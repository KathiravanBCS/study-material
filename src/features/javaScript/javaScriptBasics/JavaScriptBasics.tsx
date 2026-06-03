import { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/JavaScriptBasics.css';

type Section = 
  | 'intro' 
  | 'variables' 
  | 'datatypes' 
  | 'operators' 
  | 'control' 
  | 'loops' 
  | 'functions' 
  | 'scope' 
  | 'error' 
  | 'closures';

export default function JavaScriptBasics() {
  // The active topic is driven by the sidebar route (/javascript/basics/:section)
  const { section } = useParams<{ section: string }>();
  const activeSection = (section as Section) || 'intro';
  const [output, setOutput] = useState<string>('Select a topic and click "Run Example" to see output');

  // VARIABLES SECTION
  const runVariablesExample = () => {
    const logs: string[] = [];

    logs.push('=== VARIABLES: var vs let vs const ===\n');
    
    logs.push('--- VAR Example ---');
    var x = 10;
    var x = 20; // Re-declaration allowed
    logs.push(`var x = 10; then var x = 20;`);
    logs.push(`Result: x = ${x} (Re-declaration allowed ✓)`);

    logs.push('\n--- LET Example ---');
    let y = 10;
    y = 20; // Re-assignment allowed
    logs.push(`let y = 10; then y = 20;`);
    logs.push(`Result: y = ${y} (Re-assignment allowed ✓)`);
    logs.push(`let y = 30; → Error: Identifier 'y' has already been declared`);

    logs.push('\n--- CONST Example ---');
    const z = 10;
    logs.push(`const z = 10;`);
    logs.push(`Result: z = ${z}`);
    logs.push(`z = 20; → Error: Assignment to constant variable`);

    logs.push('\n--- KEY DIFFERENCES ---');
    logs.push(`var: Function-scoped, allows re-declaration, allows re-assignment`);
    logs.push(`let: Block-scoped, NO re-declaration, allows re-assignment`);
    logs.push(`const: Block-scoped, NO re-declaration, NO re-assignment`);

    setOutput(logs.join('\n'));
  };

  // DATA TYPES SECTION
  const runDataTypesExample = () => {
    const logs: string[] = [];

    logs.push('=== DATA TYPES ===\n');

    const age = 30;
    const percentage = 12.2;
    const name = "Charlie";
    const isOnline = false;
    let score;
    const empty = null;
    const person = { name: "Sam", age: 25 };
    const colours = ["red", "blue", "green"];
    const id = Symbol("unique");
    const bigNum = 90071992547991n;

    logs.push(`Number (Integer): ${age} → typeof: ${typeof age}`);
    logs.push(`Number (Float): ${percentage} → typeof: ${typeof percentage}`);
    logs.push(`String: "${name}" → typeof: ${typeof name}`);
    logs.push(`Boolean: ${isOnline} → typeof: ${typeof isOnline}`);
    logs.push(`Undefined: ${score} → typeof: ${typeof score}`);
    logs.push(`Null: ${empty} → typeof: ${typeof empty} (Note: null is object type)`);
    logs.push(`Object: ${JSON.stringify(person)} → typeof: ${typeof person}`);
    logs.push(`Array: ${JSON.stringify(colours)} → typeof: ${typeof colours}`);
    logs.push(`Symbol: Symbol("unique") → typeof: ${typeof id}`);
    logs.push(`BigInt: ${bigNum} → typeof: ${typeof bigNum}`);

    setOutput(logs.join('\n'));
  };

  // OPERATORS SECTION
  const runOperatorsExample = () => {
    const logs: string[] = [];

    logs.push('=== ARITHMETIC OPERATORS ===\n');
    const a = 12;
    const b = 4;
    logs.push(`let a = ${a}, b = ${b}`);
    logs.push(`Addition: a + b = ${a + b}`);
    logs.push(`Subtraction: a - b = ${a - b}`);
    logs.push(`Multiplication: a * b = ${a * b}`);
    logs.push(`Division: a / b = ${a / b}`);
    logs.push(`Modulus: a % b = ${a % b}`);
    logs.push(`Exponentiation: a ** b = ${a ** b}`);

    logs.push('\n=== ASSIGNMENT OPERATORS ===\n');
    let x = 10;
    logs.push(`Starting: x = ${x}`);
    x += 5;
    logs.push(`After x += 5: x = ${x}`);
    x -= 3;
    logs.push(`After x -= 3: x = ${x}`);
    x *= 2;
    logs.push(`After x *= 2: x = ${x}`);
    x /= 4;
    logs.push(`After x /= 4: x = ${x}`);

    logs.push('\n=== COMPARISON OPERATORS ===\n');
    const num1 = 10;
    // num2 holds the STRING "10" at runtime; typed as any so the intentional
    // loose/strict comparisons against a number compile (TS2367 otherwise).
    const num2: any = "10";
    const num3 = 15;
    logs.push(`num1 = ${num1}, num2 = "${num2}", num3 = ${num3}`);
    logs.push(`num1 == num2 (loose): ${num1 == num2} (value equal)`);
    logs.push(`num1 === num2 (strict): ${num1 === num2} (type different)`);
    logs.push(`num1 != num2 (loose): ${num1 != num2}`);
    logs.push(`num1 !== num2 (strict): ${num1 !== num2}`);
    logs.push(`num3 > num1: ${num3 > num1}`);
    logs.push(`num1 < num3: ${num1 < num3}`);
    logs.push(`num1 >= 10: ${num1 >= 10}`);
    logs.push(`num3 <= 20: ${num3 <= 20}`);

    logs.push('\n=== LOGICAL OPERATORS ===\n');
    const t = true;
    const f = false;
    logs.push(`true && false = ${t && f} (AND)`);
    logs.push(`true || false = ${t || f} (OR)`);
    logs.push(`!true = ${!t} (NOT)`);
    logs.push(`!false = ${!f} (NOT)`);

    logs.push('\n=== TERNARY OPERATOR ===\n');
    const testVal = 10;
    const result = testVal > 5 ? "Greater than 5" : "Less than or equal to 5";
    logs.push(`${testVal} > 5 ? "Greater than 5" : "Less than or equal to 5"`);
    logs.push(`Result: ${result}`);

    setOutput(logs.join('\n'));
  };

  // CONTROL FLOW SECTION
  const runControlFlowExample = () => {
    const logs: string[] = [];

    logs.push('=== CONTROL FLOW: if-else-if ===\n');

    const gradeCalc = (score: number): string => {
      if (score >= 90) return "Grade: A";
      else if (score >= 80) return "Grade: B";
      else if (score >= 70) return "Grade: C";
      else if (score >= 60) return "Grade: D";
      else return "Grade: F";
    };

    logs.push('Grade Calculator:');
    logs.push(`Score 95: ${gradeCalc(95)}`);
    logs.push(`Score 82: ${gradeCalc(82)}`);
    logs.push(`Score 72: ${gradeCalc(72)}`);
    logs.push(`Score 65: ${gradeCalc(65)}`);
    logs.push(`Score 45: ${gradeCalc(45)}`);

    logs.push('\n=== CONTROL FLOW: switch ===\n');

    const switchGrade = (score: number): string => {
      const grade = Math.floor(score / 10);
      switch (grade) {
        case 10:
        case 9:
          return "Grade: A";
        case 8:
          return "Grade: B";
        case 7:
          return "Grade: C";
        case 6:
          return "Grade: D";
        default:
          return "Grade: F";
      }
    };

    logs.push('Switch Grade Calculator:');
    logs.push(`Score 92: ${switchGrade(92)}`);
    logs.push(`Score 88: ${switchGrade(88)}`);
    logs.push(`Score 78: ${switchGrade(78)}`);

    setOutput(logs.join('\n'));
  };

  // LOOPS SECTION
  const runLoopsExample = () => {
    const logs: string[] = [];

    logs.push('=== FOR LOOP ===\n');
    logs.push('Print even numbers 2 to 10:');
    for (let i = 2; i <= 10; i += 2) {
      logs.push(`Even No: ${i}`);
    }

    logs.push('\n=== WHILE LOOP ===\n');
    logs.push('Count from 1 to 5:');
    let i = 1;
    while (i <= 5) {
      logs.push(`Count: ${i}`);
      i++;
    }

    logs.push('\n=== DO-WHILE LOOP ===\n');
    logs.push('Times from 1 to 5:');
    let j = 1;
    do {
      logs.push(`Times: ${j}`);
      j++;
    } while (j <= 5);

    logs.push('\n=== FOR-EACH LOOP ===\n');
    const names = ["Alice", "Bob", "Charlie"];
    logs.push('List of names:');
    names.forEach((name, index) => {
      logs.push(`Name ${index + 1}: ${name}`);
    });

    logs.push('\n=== BREAK STATEMENT ===\n');
    logs.push('Loop with break at i = 3:');
    for (let k = 1; k <= 5; k++) {
      if (k === 3) break;
      logs.push(`i = ${k}`);
    }
    logs.push('Loop stopped at i = 3');

    logs.push('\n=== CONTINUE STATEMENT ===\n');
    logs.push('Loop skipping even numbers:');
    for (let k = 1; k <= 5; k++) {
      if (k % 2 === 0) continue;
      logs.push(`Odd i = ${k}`);
    }

    setOutput(logs.join('\n'));
  };

  // FUNCTIONS SECTION
  const runFunctionsExample = () => {
    const logs: string[] = [];

    logs.push('=== FUNCTION DECLARATION ===\n');
    function greetDeclaration() {
      return "Hello from declaration!";
    }
    logs.push(`function greetDeclaration() { return "Hello from declaration!"; }`);
    logs.push(`Result: ${greetDeclaration()}`);

    logs.push('\n=== FUNCTION EXPRESSION ===\n');
    const greetExpression = function() {
      return "Hello from function expression!";
    };
    logs.push(`const greetExpression = function() { ... };`);
    logs.push(`Result: ${greetExpression()}`);

    logs.push('\n=== ARROW FUNCTION ===\n');
    const add = (a: number, b: number) => a + b;
    logs.push(`const add = (a, b) => a + b;`);
    logs.push(`add(5, 3) = ${add(5, 3)}`);

    const multiply = (a: number, b: number) => {
      return a * b;
    };
    logs.push(`const multiply = (a, b) => { return a * b; };`);
    logs.push(`multiply(4, 6) = ${multiply(4, 6)}`);

    logs.push('\n=== PARAMETERS & DEFAULT VALUES ===\n');
    const greetWithDefault = (name: string = "Guest") => {
      return `Hello, ${name}`;
    };
    logs.push(`const greetWithDefault = (name = "Guest") => { ... };`);
    logs.push(`greetWithDefault() = "${greetWithDefault()}"`);
    logs.push(`greetWithDefault("Arun") = "${greetWithDefault("Arun")}"`);

    logs.push('\n=== RETURN VALUE ===\n');
    const testReturn = (x: number, y: number) => {
      return x * y;
    };
    logs.push(`testReturn(4, 5) = ${testReturn(4, 5)}`);

    setOutput(logs.join('\n'));
  };

  // SCOPE SECTION
  const runScopeExample = () => {
    const logs: string[] = [];

    logs.push('=== GLOBAL SCOPE ===\n');
    const globalVar = "I'm global";
    const showGlobal = () => {
      return globalVar;
    };
    logs.push(`let globalVar = "I'm global"`);
    logs.push(`Accessible in function: ${showGlobal()}`);

    logs.push('\n=== LOCAL FUNCTION SCOPE ===\n');
    const testLocalScope = () => {
      const localVar = "I'm local";
      return localVar;
    };
    logs.push(`function testLocalScope() { let localVar = "I'm local"; ... }`);
    logs.push(`Inside function: ${testLocalScope()}`);
    logs.push(`Outside function: Reference error (variable not defined)`);

    logs.push('\n=== BLOCK SCOPE ===\n');
    logs.push(`if (true) { let blockVar = "Inside block"; }`);
    if (true) {
      const blockVar = "Inside block";
      logs.push(`Inside block: ${blockVar}`);
    }
    logs.push(`Outside block: Reference error (variable not defined)`);

    logs.push('\n=== VARIABLE SHADOWING ===\n');
    const outer = 10;
    logs.push(`outer scope: const outer = ${outer}`);
    {
      const outer = 20;
      logs.push(`inner scope: const outer = ${outer}`);
    }
    logs.push(`outer scope again: ${outer}`);

    setOutput(logs.join('\n'));
  };

  // ERROR HANDLING SECTION
  const runErrorHandlingExample = () => {
    const logs: string[] = [];

    logs.push('=== ERROR HANDLING: try-catch-finally ===\n');

    const divide = (a: number, b: number): string => {
      let result: string;
      try {
        if (b === 0) {
          throw new Error("Cannot divide by zero");
        }
        result = `${a} / ${b} = ${a / b}`;
      } catch (error) {
        result = `Error caught: ${(error as Error).message}`;
      } finally {
        // finally always runs, but must NOT return — a return here would
        // override the try/catch result and swallow it.
        result = `${result!} (finally: division attempt completed)`;
      }
      return result;
    };

    logs.push('Function: divide(a, b)');
    logs.push(`divide(10, 2): ${divide(10, 2)}`);
    logs.push(`divide(10, 0): ${divide(10, 0)}`);

    logs.push('\n=== TRY-CATCH WITH CUSTOM ERROR ===\n');

    const validateAge = (age: number): string => {
      try {
        if (age < 0 || age > 150) {
          throw new Error("Age must be between 0 and 150");
        }
        return `Age ${age} is valid`;
      } catch (error) {
        return `Validation error: ${(error as Error).message}`;
      }
    };

    logs.push('Function: validateAge(age)');
    logs.push(`validateAge(25): ${validateAge(25)}`);
    logs.push(`validateAge(-5): ${validateAge(-5)}`);
    logs.push(`validateAge(200): ${validateAge(200)}`);

    setOutput(logs.join('\n'));
  };

  // CLOSURES SECTION
  const runClosuresExample = () => {
    const logs: string[] = [];

    logs.push('=== CLOSURES ===\n');

    const outer = () => {
      let count = 0;
      const inner = () => {
        count++;
        return count;
      };
      return inner;
    };

    const counter = outer();
    logs.push('function outer() {');
    logs.push('  let count = 0;');
    logs.push('  function inner() { count++; return count; }');
    logs.push('  return inner;');
    logs.push('}');
    logs.push(`const counter = outer();\n`);
    logs.push(`counter() = ${counter()}`);
    logs.push(`counter() = ${counter()}`);
    logs.push(`counter() = ${counter()}`);

    logs.push('\n=== CLOSURE: DATA PRIVACY ===\n');

    const createBankAccount = (initialBalance: number) => {
      let balance = initialBalance;
      
      return {
        deposit: (amount: number) => {
          balance += amount;
          return `Deposited $${amount}. New balance: $${balance}`;
        },
        withdraw: (amount: number) => {
          if (amount > balance) {
            return `Insufficient funds! Balance: $${balance}`;
          }
          balance -= amount;
          return `Withdrew $${amount}. New balance: $${balance}`;
        },
        getBalance: () => balance
      };
    };

    const account = createBankAccount(1000);
    logs.push('Bank Account with Closure:');
    logs.push(`Initial: $${account.getBalance()}`);
    logs.push(account.deposit(500));
    logs.push(account.withdraw(300));
    logs.push(account.withdraw(2000));

    setOutput(logs.join('\n'));
  };

  // INTRODUCTION SECTION
  const runIntroExample = () => {
    const logs: string[] = [];

    logs.push('=== JAVASCRIPT BASICS ===\n');
    logs.push('JavaScript is a widely-used programming language.');
    logs.push('It powers the dynamic behavior of webpages and web applications.\n');

    logs.push('=== WHAT CAN JAVASCRIPT DO? ===\n');
    logs.push('✓ Update Web Content Dynamically');
    logs.push('✓ Validate Forms');
    logs.push('✓ Handle Events (click, hover, input, etc.)');
    logs.push('✓ Control Multimedia');
    logs.push('✓ Create Cookies');
    logs.push('✓ Create Animations');
    logs.push('✓ Build Full Applications\n');

    logs.push('=== JAVASCRIPT FUNDAMENTALS ===\n');
    logs.push('Topics to Master:');
    logs.push('1. Variables (var, let, const)');
    logs.push('2. Data Types (number, string, boolean, object, array, etc.)');
    logs.push('3. Operators (arithmetic, logical, comparison, etc.)');
    logs.push('4. Control Flow (if-else, switch)');
    logs.push('5. Loops (for, while, do-while, forEach)');
    logs.push('6. Functions (declarations, expressions, arrow functions)');
    logs.push('7. Scope (global, local, block)');
    logs.push('8. Error Handling (try-catch-finally)');
    logs.push('9. Closures (advanced function concept)\n');

    logs.push('=== SCRIPT TYPES ===\n');
    logs.push('Internal Script: JavaScript code inside HTML file');
    logs.push('External Script: JavaScript code in separate .js file');

    setOutput(logs.join('\n'));
  };

  return (
    <div className="js-basics-container">
      <div className="header">
        <h1>JavaScript Basics - Complete Tutorial</h1>
        <p>Interactive learning module covering all fundamental JavaScript concepts</p>
      </div>

      <div className="container">
        <div className="content">
          {/* INTRODUCTION */}
          {activeSection === 'intro' && (
            <div className="section">
              <h2>Introduction to JavaScript</h2>
              <div className="definition">
                <strong>JavaScript</strong> is a dynamic, interpreted programming language that runs in web browsers and powers interactive web applications.
              </div>

              <h3>What is JavaScript?</h3>
              <ul>
                <li>Widely-used programming language for web development</li>
                <li>Provides dynamic behavior and interactivity to websites</li>
                <li>Client-side and Server-side execution (Node.js)</li>
                <li>Interpreted language - no compilation needed</li>
              </ul>

              <h3>JavaScript Capabilities</h3>
              <div className="benefits">
                <div className="benefit-card">
                  <h4>💻 DOM Manipulation</h4>
                  <p>Update web content dynamically without reloading</p>
                </div>
                <div className="benefit-card">
                  <h4>✅ Form Validation</h4>
                  <p>Validate user input before submission</p>
                </div>
                <div className="benefit-card">
                  <h4>🎬 Event Handling</h4>
                  <p>Respond to user interactions (clicks, typing, etc.)</p>
                </div>
                <div className="benefit-card">
                  <h4>🎨 Animations</h4>
                  <p>Create smooth animations and transitions</p>
                </div>
                <div className="benefit-card">
                  <h4>🔐 Cookies & Storage</h4>
                  <p>Store user data locally</p>
                </div>
                <div className="benefit-card">
                  <h4>🚀 Full Applications</h4>
                  <p>Build complete web apps with frameworks like React</p>
                </div>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runIntroExample}>
                  Run Introduction Example
                </button>
              </div>
            </div>
          )}

          {/* VARIABLES */}
          {activeSection === 'variables' && (
            <div className="section">
              <h2>Variables: var, let, const</h2>
              <div className="definition">
                Variables are containers for storing data values. JavaScript has three ways to declare variables: <strong>var</strong>, <strong>let</strong>, and <strong>const</strong>.
              </div>

              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>var</th>
                      <th>let</th>
                      <th>const</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Scope</strong></td>
                      <td>Function-scoped</td>
                      <td>Block-scoped</td>
                      <td>Block-scoped</td>
                    </tr>
                    <tr>
                      <td><strong>Re-declaration</strong></td>
                      <td>Allowed ✓</td>
                      <td>Not allowed ✗</td>
                      <td>Not allowed ✗</td>
                    </tr>
                    <tr>
                      <td><strong>Re-assignment</strong></td>
                      <td>Allowed ✓</td>
                      <td>Allowed ✓</td>
                      <td>Not allowed ✗</td>
                    </tr>
                    <tr>
                      <td><strong>Hoisting</strong></td>
                      <td>Yes (undefined)</td>
                      <td>Yes (TDZ)</td>
                      <td>Yes (TDZ)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Code Examples</h3>
              <div className="code-block">
                <pre>{`// VAR - Function scoped
var x = 10;
var x = 20; // Re-declaration allowed ✓

// LET - Block scoped
let y = 10;
y = 20; // Re-assignment allowed ✓
let y = 30; // Error: already declared ✗

// CONST - Block scoped, immutable
const z = 10;
z = 20; // Error: cannot re-assign ✗`}</pre>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runVariablesExample}>
                  Run Variables Example
                </button>
              </div>
            </div>
          )}

          {/* DATA TYPES */}
          {activeSection === 'datatypes' && (
            <div className="section">
              <h2>Data Types in JavaScript</h2>
              <div className="definition">
                JavaScript has different data types to represent different kinds of data. Understanding these is fundamental to programming.
              </div>

              <h3>Primitive Data Types</h3>
              <ul>
                <li><strong>Number</strong> - Integers and floating-point numbers</li>
                <li><strong>String</strong> - Text enclosed in quotes</li>
                <li><strong>Boolean</strong> - Logical values: true or false</li>
                <li><strong>Undefined</strong> - Variable declared but not assigned</li>
                <li><strong>Null</strong> - Intentional absence of value</li>
                <li><strong>Symbol</strong> - Unique and immutable identifier (ES6)</li>
                <li><strong>BigInt</strong> - Large integers beyond Number limits</li>
              </ul>

              <h3>Non-Primitive Data Types</h3>
              <ul>
                <li><strong>Object</strong> - Collection of key-value pairs</li>
                <li><strong>Array</strong> - Ordered list of values (special object)</li>
                <li><strong>Function</strong> - Block of reusable code</li>
              </ul>

              <h3>Code Example</h3>
              <div className="code-block">
                <pre>{`let age = 30; // Number
let percentage = 12.2; // Float
let name = "Charlie"; // String
let isOnline = false; // Boolean
let score; // Undefined
let empty = null; // Null
let person = { name: "Sam" }; // Object
let colours = ["red", "blue"]; // Array
let id = Symbol("unique"); // Symbol
let bigNum = 90071992547991n; // BigInt`}</pre>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runDataTypesExample}>
                  Run Data Types Example
                </button>
              </div>
            </div>
          )}

          {/* OPERATORS */}
          {activeSection === 'operators' && (
            <div className="section">
              <h2>Operators in JavaScript</h2>
              <div className="definition">
                Operators are symbols used to perform operations on values and variables. JavaScript supports various types of operators.
              </div>

              <h3>Types of Operators</h3>
              <div className="benefits">
                <div className="benefit-card">
                  <h4>Arithmetic Operators</h4>
                  <p>+, -, *, /, %, ** (add, subtract, multiply, divide, modulus, power)</p>
                </div>
                <div className="benefit-card">
                  <h4>Assignment Operators</h4>
                  <p>=, +=, -=, *=, /=, %= (assign and combine operations)</p>
                </div>
                <div className="benefit-card">
                  <h4>Comparison Operators</h4>
                  <p>{'==, ===, !=, !==, >, <, >=, <= (compare values)'}</p>
                </div>
                <div className="benefit-card">
                  <h4>Logical Operators</h4>
                  <p>&&, ||, ! (AND, OR, NOT)</p>
                </div>
                <div className="benefit-card">
                  <h4>Ternary Operator</h4>
                  <p>condition ? true_value : false_value</p>
                </div>
                <div className="benefit-card">
                  <h4>Type Operators</h4>
                  <p>typeof, instanceof (check data types)</p>
                </div>
              </div>

              <h3>Important Note: == vs ===</h3>
              <div className="code-block">
                <pre>{`// Loose Equality (==) - only checks value
5 == '5' → true (values match, type ignored)

// Strict Equality (===) - checks value and type
5 === '5' → false (value matches, but types differ)`}</pre>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runOperatorsExample}>
                  Run Operators Example
                </button>
              </div>
            </div>
          )}

          {/* CONTROL FLOW */}
          {activeSection === 'control' && (
            <div className="section">
              <h2>Control Flow: if-else and switch</h2>
              <div className="definition">
                Control flow statements allow you to execute different code based on different conditions.
              </div>

              <h3>if-else-if-else Structure</h3>
              <div className="code-block">
                <pre>{`if (condition1) {
  // code if condition1 is true
} else if (condition2) {
  // code if condition2 is true
} else {
  // code if all conditions are false
}`}</pre>
              </div>

              <h3>switch Statement</h3>
              <div className="code-block">
                <pre>{`switch (expression) {
  case value1:
    // code if expression === value1
    break;
  case value2:
    // code if expression === value2
    break;
  default:
    // code if no cases match
}`}</pre>
              </div>

              <h3>When to Use</h3>
              <ul>
                <li><strong>if-else:</strong> For complex conditions with logical operators (&&, ||)</li>
                <li><strong>switch:</strong> For checking a single value against multiple options</li>
              </ul>

              <div className="button-container">
                <button className="run-button" onClick={runControlFlowExample}>
                  Run Control Flow Example
                </button>
              </div>
            </div>
          )}

          {/* LOOPS */}
          {activeSection === 'loops' && (
            <div className="section">
              <h2>Loops: for, while, do-while, forEach</h2>
              <div className="definition">
                Loops allow you to execute a block of code multiple times. JavaScript provides several types of loops for different scenarios.
              </div>

              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Loop Type</th>
                      <th>When to Use</th>
                      <th>Syntax</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>for</strong></td>
                      <td>Known number of iterations</td>
                      <td>for(init; condition; increment)</td>
                    </tr>
                    <tr>
                      <td><strong>while</strong></td>
                      <td>Unknown iterations, check first</td>
                      <td>while(condition)</td>
                    </tr>
                    <tr>
                      <td><strong>do-while</strong></td>
                      <td>Execute at least once, then check</td>
                      <td>do { } while(condition)</td>
                    </tr>
                    <tr>
                      <td><strong>forEach</strong></td>
                      <td>Iterate over array elements</td>
                      <td>array.forEach(callback)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Loop Control Statements</h3>
              <ul>
                <li><strong>break:</strong> Exit the loop immediately</li>
                <li><strong>continue:</strong> Skip current iteration and go to next</li>
              </ul>

              <div className="button-container">
                <button className="run-button" onClick={runLoopsExample}>
                  Run Loops Example
                </button>
              </div>
            </div>
          )}

          {/* FUNCTIONS */}
          {activeSection === 'functions' && (
            <div className="section">
              <h2>Functions: Declarations, Expressions, and Arrow Functions</h2>
              <div className="definition">
                Functions are reusable blocks of code that perform specific tasks. JavaScript supports multiple ways to define functions.
              </div>

              <h3>Three Ways to Define Functions</h3>

              <h4>1. Function Declaration</h4>
              <div className="code-block">
                <pre>{`function greet() {
  return "Hello from declaration!";
}
greet(); // Call the function`}</pre>
              </div>

              <h4>2. Function Expression</h4>
              <div className="code-block">
                <pre>{`const greet = function() {
  return "Hello from expression!";
};
greet(); // Call the function`}</pre>
              </div>

              <h4>3. Arrow Function (ES6)</h4>
              <div className="code-block">
                <pre>{`// With body and return
const add = (a, b) => {
  return a + b;
};

// Short form (implicit return)
const multiply = (a, b) => a * b;

// No parameters
const sayHi = () => "Hi!";

// Single parameter (parentheses optional)
const double = x => x * 2;`}</pre>
              </div>

              <h3>Parameters and Default Values</h3>
              <div className="code-block">
                <pre>{`// Parameter without default
const greet = (name) => {
  return "Hello, " + name;
};

// Parameter with default value
const greetDefault = (name = "Guest") => {
  return "Hello, " + name;
};

greetDefault(); // Uses default: "Hello, Guest"
greetDefault("Arun"); // Uses provided value: "Hello, Arun"`}</pre>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runFunctionsExample}>
                  Run Functions Example
                </button>
              </div>
            </div>
          )}

          {/* SCOPE */}
          {activeSection === 'scope' && (
            <div className="section">
              <h2>Scope: Global, Local, and Block</h2>
              <div className="definition">
                Scope determines where a variable is accessible in your code. Understanding scope is crucial to writing maintainable JavaScript.
              </div>

              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Scope Type</th>
                      <th>Definition</th>
                      <th>Accessible</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Global</strong></td>
                      <td>Declared outside all functions</td>
                      <td>Anywhere in code</td>
                    </tr>
                    <tr>
                      <td><strong>Local (Function)</strong></td>
                      <td>Declared inside a function</td>
                      <td>Only inside that function</td>
                    </tr>
                    <tr>
                      <td><strong>Block</strong></td>
                      <td>Declared inside { } (let/const only)</td>
                      <td>Only inside that block</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Scope Chain</h3>
              <p>Inner scopes can access outer scopes, but outer scopes cannot access inner scopes.</p>

              <div className="code-block">
                <pre>{`let global = "Global scope";

function outer() {
  let outerLocal = "Outer function scope";
  
  function inner() {
    let innerLocal = "Inner function scope";
    console.log(global); // ✓ Can access global
    console.log(outerLocal); // ✓ Can access outer
    console.log(innerLocal); // ✓ Can access inner
  }
  
  inner();
  console.log(innerLocal); // ✗ Error: innerLocal not defined
}

outer();
console.log(outerLocal); // ✗ Error: outerLocal not defined`}</pre>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runScopeExample}>
                  Run Scope Example
                </button>
              </div>
            </div>
          )}

          {/* ERROR HANDLING */}
          {activeSection === 'error' && (
            <div className="section">
              <h2>Error Handling: try-catch-finally</h2>
              <div className="definition">
                Error handling allows you to gracefully manage exceptions and unexpected behavior in your code without crashing the application.
              </div>

              <h3>Structure</h3>
              <div className="code-block">
                <pre>{`try {
  // Code that might throw an error
  if (condition) {
    throw new Error("Custom error message");
  }
} catch (error) {
  // Handle the error
  console.error("Caught error:", error.message);
} finally {
  // Always executes, whether error or not
  console.log("Cleanup code");
}`}</pre>
              </div>

              <h3>Key Points</h3>
              <ul>
                <li><strong>try:</strong> Contains code that might cause an error</li>
                <li><strong>catch:</strong> Executes if an error is thrown in try block</li>
                <li><strong>finally:</strong> Always executes, used for cleanup</li>
                <li><strong>throw:</strong> Manually throw a custom error</li>
              </ul>

              <h3>Common Errors</h3>
              <ul>
                <li><strong>ReferenceError:</strong> Variable not defined</li>
                <li><strong>TypeError:</strong> Wrong data type or invalid operation</li>
                <li><strong>SyntaxError:</strong> Invalid code syntax</li>
                <li><strong>RangeError:</strong> Value out of acceptable range</li>
              </ul>

              <div className="button-container">
                <button className="run-button" onClick={runErrorHandlingExample}>
                  Run Error Handling Example
                </button>
              </div>
            </div>
          )}

          {/* CLOSURES */}
          {activeSection === 'closures' && (
            <div className="section">
              <h2>Closures: Advanced Function Concept</h2>
              <div className="definition">
                A <strong>closure</strong> is created when a function is defined inside another function and accesses variables from the outer function's scope. The inner function "remembers" the outer scope even after the outer function returns.
              </div>

              <h3>Why Use Closures?</h3>
              <div className="benefits">
                <div className="benefit-card">
                  <h4>Data Privacy</h4>
                  <p>Create private variables that cannot be accessed directly</p>
                </div>
                <div className="benefit-card">
                  <h4>Stateful Functions</h4>
                  <p>Maintain state between function calls</p>
                </div>
                <div className="benefit-card">
                  <h4>Callbacks</h4>
                  <p>Preserve context in async operations</p>
                </div>
                <div className="benefit-card">
                  <h4>Function Factories</h4>
                  <p>Create specialized functions with different configurations</p>
                </div>
              </div>

              <h3>Simple Closure Example</h3>
              <div className="code-block">
                <pre>{`function outer() {
  let count = 0; // Private variable
  
  function inner() {
    count++;
    return count;
  }
  
  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3

// count is not accessible: counter.count → undefined`}</pre>
              </div>

              <h3>Practical Example: Bank Account</h3>
              <div className="code-block">
                <pre>{`function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private variable
  
  return {
    deposit: (amount) => {
      balance += amount;
      return \`Deposited $\${amount}. Balance: $\${balance}\`;
    },
    withdraw: (amount) => {
      if (amount > balance) {
        return "Insufficient funds!";
      }
      balance -= amount;
      return \`Withdrew $\${amount}. Balance: $\${balance}\`;
    },
    getBalance: () => balance
  };
}

const account = createBankAccount(1000);
account.deposit(500); // "Deposited $500. Balance: $1500"
account.withdraw(300); // "Withdrew $300. Balance: $1200"`}</pre>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runClosuresExample}>
                  Run Closures Example
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="output-section">
        <h3>Output:</h3>
        <pre className="output-box">{output}</pre>
      </div>
    </div>
  );
}
