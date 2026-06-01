import { useState } from "react";
import SyntaxHighlightedCode from "../../react/components/SyntaxHighlightedCode";
import "../styles/HigherOrderFunctions.css";


export default function HigherOrderFunctions() {
  const [outputs, setOutputs] = useState<{ [key: string]: string }>({});
  const [expandedExample, setExpandedExample] = useState<string | null>(null);

  const runPassingFunctionsExample = () => {
    const logs: string[] = [];

    function executeFunction(fn: () => void): void {
      fn();
    }

    function sayHello(): void {
      logs.push("Hello, Kathir!");
    }

    logs.push("=== EXAMPLE 1: PASSING FUNCTIONS AS ARGUMENTS ===");
    executeFunction(sayHello);

    logs.push("\n[EXPLANATION]");
    logs.push("- executeFunction is a HIGHER ORDER FUNCTION");
    logs.push("- It accepts another function (fn) as an argument");
    logs.push("- It calls that function inside its body");
    logs.push("- sayHello is passed WITHOUT parentheses (fn) not (fn())");

    setOutputs((prev) => ({ ...prev, example1: logs.join("\n") }));
    setExpandedExample("example1");
  };

  const runReturningFunctionsExample = () => {
    const logs: string[] = [];

    function greet(greeting: string): (name: string) => void {
      return function (name: string): void {
        logs.push(`${greeting}, ${name}`);
      };
    }

    logs.push("=== EXAMPLE 2: RETURNING FUNCTIONS FROM FUNCTIONS ===");

    const sayHelloFn = greet("Hello");
    const sayGoodbyeFn = greet("Goodbye");

    sayHelloFn("Kathir");
    sayGoodbyeFn("Kathir");

    logs.push("\n[EXPLANATION]");
    logs.push("- greet is a HIGHER ORDER FUNCTION");
    logs.push("- It returns another function as its result");
    logs.push("- The returned function has access to the greeting parameter");
    logs.push(
      "- This demonstrates CLOSURE - inner function remembers outer variable",
    );

    setOutputs((prev) => ({ ...prev, example2: logs.join("\n") }));
    setExpandedExample("example2");
  };

  const runCallbackExample = () => {
    const logs: string[] = [];

    function fetchData(callback: (data: any) => void): void {
      logs.push("Fetching data...");
      let data = { name: "Kathir", age: 25 };
      callback(data);
    }

    function displayData(data: any): void {
      logs.push(`Data received: ${JSON.stringify(data)}`);
    }

    logs.push("=== EXAMPLE 3: CALLBACKS ===");
    fetchData(displayData);

    logs.push("\n[EXPLANATION]");
    logs.push("- fetchData is a HIGHER ORDER FUNCTION");
    logs.push("- It accepts a callback function as an argument");
    logs.push("- After fetching, it calls the callback with the data");
    logs.push("- Callbacks are used for handling async operations");
    logs.push("- The callback gets executed AFTER the operation completes");

    setOutputs((prev) => ({ ...prev, example3: logs.join("\n") }));
    setExpandedExample("example3");
  };

  const runMapExample = () => {
    const logs: string[] = [];

    const numbers = [1, 2, 3, 4, 5];

    logs.push("=== ARRAY METHOD: map() ===");
    logs.push("\n[ORIGINAL ARRAY]");
    logs.push(`[${numbers.join(", ")}]`);

    logs.push("\n[1] Square each number:");
    const squared = numbers.map((num) => num * num);
    logs.push(`numbers.map(num => num * num): [${squared.join(", ")}]`);

    logs.push("\n[2] Double each number:");
    const doubled = numbers.map((num) => num * 2);
    logs.push(`numbers.map(num => num * 2): [${doubled.join(", ")}]`);

    logs.push("\n[3] Convert to strings:");
    const stringNumbers = numbers.map((num) => "Number: " + num);
    logs.push('numbers.map(num => "Number: " + num):');
    stringNumbers.forEach((s) => logs.push(`  ${s}`));

    logs.push("\n[KEY POINTS]");
    logs.push("- map() is a HIGHER ORDER FUNCTION");
    logs.push("- Takes a callback that transforms each element");
    logs.push("- Returns a NEW array with transformed values");
    logs.push("- Does NOT modify the original array (immutable)");
    logs.push("- Same length as original array");

    setOutputs((prev) => ({ ...prev, map: logs.join("\n") }));
    setExpandedExample("map");
  };

  const runFilterExample = () => {
    const logs: string[] = [];

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    logs.push("=== ARRAY METHOD: filter() ===");
    logs.push("\n[ORIGINAL ARRAY]");
    logs.push(`[${numbers.join(", ")}]`);

    logs.push("\n[1] Get even numbers:");
    const even = numbers.filter((num) => num % 2 === 0);
    logs.push(`numbers.filter(num => num % 2 === 0): [${even.join(", ")}]`);

    logs.push("\n[2] Get numbers greater than 5:");
    const greaterThan5 = numbers.filter((num) => num > 5);
    logs.push(`numbers.filter(num => num > 5): [${greaterThan5.join(", ")}]`);

    logs.push("\n[3] Get numbers less than 4:");
    const lessThan4 = numbers.filter((num) => num < 4);
    logs.push(`numbers.filter(num => num < 4): [${lessThan4.join(", ")}]`);

    logs.push("\n[KEY POINTS]");
    logs.push("- filter() is a HIGHER ORDER FUNCTION");
    logs.push("- Takes a callback that returns true/false");
    logs.push("- Returns NEW array with only matching elements");
    logs.push("- Size may be different from original");
    logs.push("- Original array remains UNCHANGED");

    setOutputs((prev) => ({ ...prev, filter: logs.join("\n") }));
    setExpandedExample("filter");
  };

  const runReduceExample = () => {
    const logs: string[] = [];

    const numbers = [1, 2, 3, 4, 5];

    logs.push("=== ARRAY METHOD: reduce() ===");
    logs.push("\n[ORIGINAL ARRAY]");
    logs.push(`[${numbers.join(", ")}]`);

    logs.push("\n[1] Calculate SUM:");
    const sum = numbers.reduce((acc, curr) => {
      logs.push(
        `  step: accumulator=${acc}, current=${curr}, result=${acc + curr}`,
      );
      return acc + curr;
    }, 0);
    logs.push(`Final sum: ${sum}`);

    logs.push("\n[2] Calculate PRODUCT:");
    const product = numbers.reduce((acc, curr) => acc * curr, 1);
    logs.push(`Final product: ${product}`);

    logs.push("\n[KEY POINTS]");
    logs.push("- reduce() is a HIGHER ORDER FUNCTION");
    logs.push("- Takes callback with (accumulator, current)");
    logs.push("- Reduces array to a SINGLE value");
    logs.push("- acc = accumulator (running result)");
    logs.push("- curr = current element");
    logs.push("- Second argument (0, 1) is initial accumulator value");

    setOutputs((prev) => ({ ...prev, reduce: logs.join("\n") }));
    setExpandedExample("reduce");
  };

  const runForEachExample = () => {
    const logs: string[] = [];

    const names = ["Kathir", "Rajesh", "Sarath"];

    logs.push("=== ARRAY METHOD: forEach() ===");
    logs.push("\n[ORIGINAL ARRAY]");
    logs.push(`[${names.join(", ")}]`);

    logs.push("\n[1] Print each name:");
    names.forEach((name) => {
      logs.push(`  ${name}`);
    });

    logs.push("\n[2] Print with index:");
    names.forEach((name, index) => {
      logs.push(`  ${index + 1}. ${name}`);
    });

    logs.push("\n[KEY POINTS]");
    logs.push("- forEach() is a HIGHER ORDER FUNCTION");
    logs.push("- Executes callback for EACH element");
    logs.push("- Callback receives (element, index, array)");
    logs.push("- Does NOT return a new array (returns undefined)");
    logs.push("- Used for SIDE EFFECTS only");
    logs.push("- Cannot break or continue like for loop");

    setOutputs((prev) => ({ ...prev, forEach: logs.join("\n") }));
    setExpandedExample("forEach");
  };

  const runChainingExample = () => {
    const logs: string[] = [];

    const numbers = [1, 2, 3, 4, 5, 6];

    logs.push("=== CHAINING HIGHER ORDER FUNCTIONS ===");
    logs.push("\n[ORIGINAL ARRAY]");
    logs.push(`[${numbers.join(", ")}]`);

    logs.push("\n[EXECUTION - STEP BY STEP]");
    logs.push("\n[1] FILTER (keep even numbers):");
    const filtered = numbers.filter((num) => num % 2 === 0);
    logs.push(`   Result: [${filtered.join(", ")}]`);

    logs.push("\n[2] MAP (square each number):");
    const mapped = filtered.map((num) => num * num);
    logs.push(`   Result: [${mapped.join(", ")}]`);

    logs.push("\n[3] REDUCE (sum all values):");
    const result = mapped.reduce((acc, curr) => acc + curr, 0);
    logs.push(`   Result: ${result}`);

    logs.push("\n[ALL IN ONE LINE]");
    const chainedResult = numbers
      .filter((num) => num % 2 === 0)
      .map((num) => num * num)
      .reduce((acc, curr) => acc + curr, 0);
    logs.push(`Final Result: ${chainedResult}`);

    logs.push("\n[KEY POINTS]");
    logs.push("- Each method returns a new array");
    logs.push("- Can chain multiple methods together");
    logs.push("- Operations are applied left to right");
    logs.push("- Creates powerful, readable transformations");
    logs.push("- Immutable - original array unchanged");

    setOutputs((prev) => ({ ...prev, chaining: logs.join("\n") }));
    setExpandedExample("chaining");
  };



  return (
    <div className="higher-order-functions-container">
      <div className="header">
        <h1>Higher Order Functions in JavaScript</h1>
      </div>

      <div className="container">
        <div className="section">
          <h2>What is a Higher Order Function?</h2>

          <div className="definition">
            A <strong>Higher Order Function</strong> is a function that does one
            of the following:
            <ol style={{ marginTop: "15px" }}>
              <li>
                <strong>Takes another function as an argument</strong>
              </li>
              <li>
                <strong>Returns another function as its result</strong>
              </li>
            </ol>
          </div>

          <p style={{ marginTop: "20px" }}>
            Higher-order functions help make your code more{" "}
            <strong>reusable</strong>, <strong>modular</strong>, and{" "}
            <strong>flexible</strong> by allowing you to work with functions as
            values.
          </p>
        </div>

        <div className="section">
          <h2>Benefits of Higher Order Functions</h2>

          <ul>
            <li>
              <strong>Code Reusability:</strong> Create generic functions that
              can be customized with different callbacks
            </li>
            <li>
              <strong>Modularity:</strong> Break down complex operations into
              smaller, composable functions
            </li>
            <li>
              <strong>Cleaner Code:</strong> Reduce repetition and make code
              more declarative
            </li>
            <li>
              <strong>Flexibility:</strong> Change behavior by passing different
              functions as arguments
            </li>
            <li>
              <strong>Functional Programming:</strong> Embrace functional
              programming paradigms
            </li>
            <li>
              <strong>Easier Testing:</strong> Pure functions are easier to test
              and reason about
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <h2>Examples - WITHOUT Array Methods</h2>

          <h3>[1] Passing Functions as Arguments</h3>
          <SyntaxHighlightedCode
            code={`function executeFunction(fn) {
    fn();
}

function sayHello() {
    console.log("Hello, Kathir!");
}

executeFunction(sayHello);`}
            language="javascript"
            theme="light"
            showLineNumbers={true}
          />
          <div className="button-container">
            <button className="run-button" onClick={runPassingFunctionsExample}>
              Run Example 1
            </button>
            {outputs.example1 && expandedExample === "example1" && (
              <SyntaxHighlightedCode
                code={outputs.example1}
                language="javascript"
                theme="light"
                showLineNumbers={true}
              />
            )}
          </div>

          <h3>[2] Returns another function as its result</h3>
          <SyntaxHighlightedCode
            code={`function greet(greeting) {
    return function(name) {
        console.log(greeting + ", " + name);
    };
}

const sayHelloFn = greet("Hello");
const sayGoodbyeFn = greet("Goodbye");

sayHelloFn("Kathir");
sayGoodbyeFn("Kathir");`}
            language="javascript"
            theme="light"
            showLineNumbers={true}
          />
          <div className="button-container">
            <button
              className="run-button"
              onClick={runReturningFunctionsExample}
            >
              Run Example 2
            </button>
            {outputs.example2 && expandedExample === "example2" && (
              <SyntaxHighlightedCode
                code={outputs.example2}
                language="javascript"
                theme="light"
                showLineNumbers={true}
              />
            )}
          </div>

          <h3>[3] Callbacks</h3>
          <SyntaxHighlightedCode
            code={`function fetchData(callback) {
    console.log("Fetching data...");
    let data = { name: "Kathir", age: 25 };
    callback(data);
}

function displayData(data) {
    console.log("Data received:", data);
}

fetchData(displayData);`}
            language="javascript"
            theme="light"
            showLineNumbers={true}
          />
          <div className="button-container">
            <button className="run-button" onClick={runCallbackExample}>
              Run Example 3
            </button>
            {outputs.example3 && expandedExample === "example3" && (
              <SyntaxHighlightedCode
                code={outputs.example3}
                language="javascript"
                theme="light"
                showLineNumbers={true}
              />
            )}
          </div>

          </div>

        <div className="section">
          <h2>Examples - WITH Array Methods</h2>

          <div className="info-box">
            <strong>Note:</strong> Array methods like <strong>map()</strong>,{" "}
            <strong>filter()</strong>, <strong>reduce()</strong>, and{" "}
            <strong>forEach()</strong> are all higher-order functions because
            they accept callback functions as arguments.
          </div>

          <h3>[1] map() - Transform Array Elements</h3>
          <p>
            <strong>map()</strong> applies a callback function to each element
            and returns a <strong>new array</strong> with transformed values.
          </p>
          <SyntaxHighlightedCode
            code={`const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(function(num) {
    return num * num;
});

// Using arrow function
const doubled = numbers.map(num => num * 2);

console.log("Squared:", squared);
// [1, 4, 9, 16, 25]

console.log("Doubled:", doubled);
// [2, 4, 6, 8, 10]`}
            language="javascript"
            theme="light"
            showLineNumbers={true}
          />
          <div className="button-container">
            <button className="run-button" onClick={runMapExample}>
              Run map() Example
            </button>
            {outputs.map && expandedExample === "map" && (
              <SyntaxHighlightedCode
                code={outputs.map}
                language="javascript"
                theme="light"
                showLineNumbers={true}
              />
            )}
          </div>

          <h3>[2] filter() - Select Array Elements</h3>
          <p>
            <strong>filter()</strong> returns a <strong>new array</strong>{" "}
            containing only elements that pass the test in the callback
            function.
          </p>
          <SyntaxHighlightedCode
            code={`const numbers = [1, 2, 3, 4, 5, 6];

// Get only even numbers
const even = numbers.filter(function(num) {
    return num % 2 === 0;
});

// Get numbers greater than 3
const greaterThan3 = numbers.filter(num => num > 3);

console.log("Even:", even);
// [2, 4, 6]

console.log("Greater than 3:", greaterThan3);
// [4, 5, 6]`}
            language="javascript"
            theme="light"
            showLineNumbers={true}
          />
          <div className="button-container">
            <button className="run-button" onClick={runFilterExample}>
              Run filter() Example
            </button>
            {outputs.filter && expandedExample === "filter" && (
              <SyntaxHighlightedCode
                code={outputs.filter}
                language="javascript"
                theme="light"
                showLineNumbers={true}
              />
            )}
          </div>

          <h3>[3] reduce() - Accumulate to Single Value</h3>
          <p>
            <strong>reduce()</strong> accumulates array elements into a{" "}
            <strong>single value</strong> based on the callback function.
          </p>
          <SyntaxHighlightedCode
            code={`const numbers = [1, 2, 3, 4, 5];

// Calculate sum
const sum = numbers.reduce(function(acc, curr) {
    return acc + curr;
}, 0);

// Calculate product
const product = numbers.reduce((acc, curr) => acc * curr, 1);

console.log("Sum:", sum);
// 15

console.log("Product:", product);
// 120`}
            language="javascript"
            theme="light"
            showLineNumbers={true}
          />
          <div className="button-container">
            <button className="run-button" onClick={runReduceExample}>
              Run reduce() Example
            </button>
            {outputs.reduce && expandedExample === "reduce" && (
              <SyntaxHighlightedCode
                code={outputs.reduce}
                language="javascript"
                theme="light"
                showLineNumbers={true}
              />
            )}
          </div>

          <h3>[4] forEach() - Execute For Each Element</h3>
          <p>
            <strong>forEach()</strong> executes a callback function for each
            element but <strong>does NOT return a new array</strong>.
          </p>
          <SyntaxHighlightedCode
            code={`const names = ["Kathir", "Rajesh", "Sarath"];

// Print each name
names.forEach(function(name) {
    console.log(name);
});

// Print with index
names.forEach((name, index) => {
    console.log(\`\${index + 1}. \${name}\`);
});

// Output:
// 1. Kathir
// 2. Rajesh
// 3. Sarath`}
            language="javascript"
            theme="light"
            showLineNumbers={true}
          />
          <div className="button-container">
            <button className="run-button" onClick={runForEachExample}>
              Run forEach() Example
            </button>
            {outputs.forEach && expandedExample === "forEach" && (
              <SyntaxHighlightedCode
                code={outputs.forEach}
                language="javascript"
                theme="light"
                showLineNumbers={true}
              />
            )}
          </div>

          <h3>[5] Chaining Higher Order Functions</h3>
          <p>
            You can chain multiple higher-order functions together for powerful
            transformations.
          </p>
          <SyntaxHighlightedCode
            code={`const numbers = [1, 2, 3, 4, 5, 6];

// Filter even numbers, then square them, then sum them
const result = numbers
    .filter(num => num % 2 === 0)     // [2, 4, 6]
    .map(num => num * num)             // [4, 16, 36]
    .reduce((acc, curr) => acc + curr, 0); // 56

console.log("Result:", result);
// 56

// Step by step:
// 1. Filter: [2, 4, 6]
// 2. Map: [4, 16, 36]
// 3. Reduce: 4 + 16 + 36 = 56`}
            language="javascript"
            theme="light"
            showLineNumbers={true}
          />
          <div className="button-container">
            <button className="run-button" onClick={runChainingExample}>
              Run Chaining Example
            </button>
            {outputs.chaining && expandedExample === "chaining" && (
              <SyntaxHighlightedCode
                code={outputs.chaining}
                language="javascript"
                theme="light"
                showLineNumbers={true}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
