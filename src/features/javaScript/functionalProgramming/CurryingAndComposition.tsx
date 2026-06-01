import { useState } from 'react';
import '../styles/CurryingAndComposition.css';

export default function CurryingAndComposition() {
  const [output, setOutput] = useState<string>('Click a button to run an example');

  const runMultiplierExample = () => {
    const logs: string[] = [];

    console.clear = () => { logs.length = 0; };
    logs.push('=== PRACTICAL EXAMPLE: MULTIPLIER FUNCTION ===');

    logs.push('\n📌 What is Currying?');
    logs.push('Breaking a function with multiple arguments into functions with one argument at a time\n');

    function multiply(a: number): (b: number) => number {
      return function(b: number): number {
        return a * b;
      };
    }

    logs.push('1️⃣ Create specialized multiplier functions:');
    logs.push('const multiplyBy2 = multiply(2);');
    const multiplyBy2 = multiply(2);
    logs.push('✓ Created: multiplyBy2 - will multiply any number by 2\n');

    logs.push('const multiplyBy5 = multiply(5);');
    const multiplyBy5 = multiply(5);
    logs.push('✓ Created: multiplyBy5 - will multiply any number by 5\n');

    logs.push('2️⃣ Use multiplyBy2 (multiply by 2):');
    logs.push(`multiplyBy2(3) = 3 * 2 = ${multiplyBy2(3)}`);
    logs.push(`multiplyBy2(10) = 10 * 2 = ${multiplyBy2(10)}`);

    logs.push('\n3️⃣ Use multiplyBy5 (multiply by 5):');
    logs.push(`multiplyBy5(3) = 3 * 5 = ${multiplyBy5(3)}`);
    logs.push(`multiplyBy5(10) = 10 * 5 = ${multiplyBy5(10)}`);

    logs.push('\n4️⃣ Use multiply() directly (without creating a variable):');
    logs.push(`multiply(7)(3) = 7 * 3 = ${multiply(7)(3)}`);
    logs.push(`multiply(6)(4) = 6 * 4 = ${multiply(6)(4)}`);
    logs.push(`multiply(9)(2) = 9 * 2 = ${multiply(9)(2)}`);

    logs.push('\n✓ Real-World Benefits:');
    logs.push('• multiplyBy2 can be reused throughout the app');
    logs.push('• multiplyBy5 can be reused throughout the app');
    logs.push('• No need to pass 2 or 5 every time you multiply');
    logs.push('• Creates specialized, purpose-built functions');
    logs.push('• More readable and maintainable code');

    setOutput(logs.join('\n'));
  };

  const runCurryingExample = () => {
    const logs: string[] = [];

    logs.push('=== CURRYING EXAMPLE ===');

    logs.push('\n📌 Real-World Analogy: Colored Stickers Machine');
    logs.push('Without Currying: Tell the machine both shape and color at once');
    logs.push('With Currying: First tell shape, then tell color\n');

    function makeSticker(shape: string): (color: string) => string {
      return function(color: string): string {
        return color + ' ' + shape;
      };
    }

    logs.push('1️⃣ Create star sticker maker:');
    const starSticker = makeSticker("star");
    logs.push("const starSticker = makeSticker('star');");
    logs.push(`starSticker('blue'): ${starSticker('blue')}`);
    logs.push(`starSticker('red'): ${starSticker('red')}`);
    logs.push(`starSticker('yellow'): ${starSticker('yellow')}`);

    logs.push("\n2️⃣ Create heart sticker maker:");
    const heartSticker = makeSticker("heart");
    logs.push("const heartSticker = makeSticker('heart');");
    logs.push(`heartSticker('pink'): ${heartSticker('pink')}`);
    logs.push(`heartSticker('purple'): ${heartSticker('purple')}`);

    logs.push("\n3️⃣ Or use directly:");
    logs.push(`makeSticker('circle')('green'): ${makeSticker('circle')('green')}`);

    logs.push('\n✓ Benefits of Currying:');
    logs.push('• Partial Application: Create specialized functions');
    logs.push('• Code Reusability: Use same base function multiple ways');
    logs.push('• Cleaner Code: More readable than passing all arguments at once');

    setOutput(logs.join('\n'));
  };

  const runCompositionExample = () => {
    const logs: string[] = [];

    logs.push('=== FUNCTIONAL COMPOSITION EXAMPLE ===');

    logs.push('\n📌 Real-World Analogy: Getting Ready for a Party');
    logs.push('Composition: Combine different activities (shower → dress → perfume)\n');

    function add5(x: number): number {
      return x + 5;
    }

    function multiplyBy2(x: number): number {
      return x * 2;
    }

    function compose(f: (x: number) => number, g: (x: number) => number): (x: number) => number {
      return function(x: number): number {
        return f(g(x));
      };
    }

    logs.push('1️⃣ Simple functions:');
    logs.push('add5(x) = x + 5');
    logs.push('multiplyBy2(x) = x * 2');

    logs.push('\n2️⃣ Compose them together:');
    logs.push('compose(multiplyBy2, add5) means: first add5, then multiplyBy2');

    const addThenMultiply = compose(multiplyBy2, add5);

    logs.push('\n3️⃣ Execute step by step:');
    logs.push('Input: 3');
    logs.push(`Step 1 - add5(3) = 3 + 5 = ${add5(3)}`);
    const step1 = add5(3);
    logs.push(`Step 2 - multiplyBy2(8) = 8 * 2 = ${multiplyBy2(step1)}`);
    logs.push(`Final result: ${addThenMultiply(3)}`);

    logs.push('\n4️⃣ More examples:');
    logs.push(`addThenMultiply(5): ${addThenMultiply(5)}`);
    logs.push(`addThenMultiply(10): ${addThenMultiply(10)}`);

    logs.push('\n✓ Benefits of Composition:');
    logs.push('• Readability: Clear data flow');
    logs.push('• Modularity: Rearrange, add, or remove steps');
    logs.push('• Testability: Test each function independently');
    logs.push('• Reusability: Use functions in different pipelines');

    setOutput(logs.join('\n'));
  };

  const runComparisonExample = () => {
    const logs: string[] = [];

    logs.push('=== CURRYING vs COMPOSITION COMPARISON ===');

    logs.push('\n👔 CURRYING: Outfit piece by piece');
    logs.push('Pick shirt → Pick pants → Pick shoes (one step at a time)\n');

    function dressUp(shirt: string): (pants: string) => (shoes: string) => string {
      return function(pants: string): (shoes: string) => string {
        return function(shoes: string): string {
          return `Outfit: ${shirt}, ${pants}, ${shoes}`;
        };
      };
    }

    logs.push('Step 1: Choose shirt');
    const withShirt = dressUp("blue shirt");
    logs.push('Step 2: Choose pants');
    const withPants = withShirt("black pants");
    logs.push('Step 3: Choose shoes');
    const outfit = withPants("white shoes");
    logs.push(`Result: ${outfit}`);

    logs.push('\n🚿 COMPOSITION: Combine activities');
    logs.push('Shower → Get Dressed → Put Perfume (chain operations)\n');

    function shower(): string {
      return "took a shower";
    }

    function dress(action: string): string {
      return action + " and got dressed";
    }

    function perfume(action: string): string {
      return action + " and put on perfume";
    }

    logs.push('Activities:');
    const step1 = shower();
    logs.push(`1️⃣ ${step1}`);
    const step2 = dress(step1);
    logs.push(`2️⃣ ${step2}`);
    const step3 = perfume(step2);
    logs.push(`3️⃣ ${step3}`);

    logs.push('\n📊 KEY DIFFERENCES:');
    logs.push('Currying:');
    logs.push('  • Breaking ONE function with multiple arguments');
    logs.push('  • Takes arguments one at a time');
    logs.push('  • f(a)(b)(c)');
    logs.push('\nComposition:');
    logs.push('  • Combining MULTIPLE functions together');
    logs.push('  • Output of one becomes input of next');
    logs.push('  • f(g(h(x)))');

    setOutput(logs.join('\n'));
  };

  return (
    <div className="currying-composition-container">
      <div className="header">
        <h1>Currying & Functional Composition</h1>
      </div>

      <div className="container">
        <div className="section">
          <h2>1. Currying</h2>

          <div className="definition">
            <strong>Currying</strong> is about breaking a function that takes multiple arguments into a series of functions that each take <strong>one argument at a time</strong>.
          </div>

          <h3>Real-World Analogy: Colored Stickers Machine</h3>
          <div className="analogy-box">
            <strong>Without Currying:</strong> You have a machine that makes colored stickers. You tell it both the shape and color at once: "Make a blue star."<br /><br />
            <strong>With Currying:</strong> First, you tell it "Prepare to make a star," and then later, "Now, color it blue."
          </div>

          <h3>Code Example: Normal Function vs Curried Function</h3>
          <div className="code-block">
            <pre>{`// Normal Function (Multiple Arguments)
function makeSticker(shape, color) {
  return color + ' ' + shape;
}

const result = makeSticker('star', 'blue');
// "blue star"

// Curried Function (One Argument at a Time)
function makeSticker(shape) {
  return function(color) {
    return color + ' ' + shape;
  };
}

const starSticker = makeSticker('star');
const blueStar = starSticker('blue');
// "blue star"`}</pre>
          </div>

          <div className="button-container">
            <button className="run-button" onClick={runCurryingExample}>
              Run Currying Example
            </button>
            <button className="run-button" onClick={runMultiplierExample}>
              Run Multiplier Example
            </button>
          </div>

          <h3>Benefits of Currying</h3>
          <div className="benefit-box">
            <strong>1. Partial Application:</strong> Fix some arguments, create new functions with remaining arguments<br /><br />
            <strong>2. Enhanced Function Composition:</strong> Makes it easier to chain and compose functions<br /><br />
            <strong>3. Increased Modularity:</strong> Break complex functions into smaller, reusable pieces<br /><br />
            <strong>4. Improved Code Clarity:</strong> Each step becomes a descriptive action<br /><br />
          </div>
        </div>

        <div className="section">
          <h2>2. Functional Composition</h2>

          <div className="definition">
            <strong>Functional Composition</strong> is the process of combining two or more functions to produce a new function. It's like a <strong>pipeline</strong> where the output of one function becomes the input of the next.
          </div>

          <h3>Real-World Analogy: Getting Ready for a Party</h3>
          <div className="analogy-box">
            <strong>Currying (Outfit Piece by Piece):</strong> You choose your outfit piece by piece - first shirt, then pants, then shoes, one step at a time.<br /><br />
            <strong>Functional Composition (Combining Activities):</strong> You combine different activities: First shower, then get dressed, then put on perfume to get ready completely.
          </div>

          <h3>Code Example: Simple Composition</h3>
          <div className="code-block">
            <pre>{`function double(x) {
  return x * 2;
}

function increment(x) {
  return x + 1;
}

// Without composition (nested calls)
const result1 = increment(double(5));
// 5 * 2 = 10, then 10 + 1 = 11

// With composition (cleaner)
const doubleThenIncrement = x => increment(double(x));
const result2 = doubleThenIncrement(5);
// 11`}</pre>
          </div>

          <h3>Advanced Example: Compose Function</h3>
          <div className="code-block">
            <pre>{`function add(x) {
  return x + 5;
}

function multiply(x) {
  return x * 2;
}

// Create a compose function
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

// Compose functions together
const addThenMultiply = compose(multiply, add);

console.log(addThenMultiply(3));
// Step 1: add(3) = 3 + 5 = 8
// Step 2: multiply(8) = 8 * 2 = 16
// Result: 16`}</pre>
          </div>

          <div className="button-container">
            <button className="run-button" onClick={runCompositionExample}>
              Run Composition Example
            </button>
          </div>

          <h3>Benefits of Functional Composition</h3>
          <div className="benefit-box">
            <strong>1. Readability:</strong> Clear sequence of transformations instead of nested calls<br /><br />
            <strong>2. Modularity:</strong> Easily rearrange, add, or remove steps<br /><br />
            <strong>3. Reusability:</strong> Use same functions in different combinations<br /><br />
            <strong>4. Testability:</strong> Test each function independently<br /><br />
            <strong>5. Maintainability:</strong> Changes to one function don't affect others<br /><br />
            <strong>6. Declarative Style:</strong> Describe what you want, not how to do it
          </div>
        </div>

        <div className="section">
          <h2>Currying vs Functional Composition</h2>

          <h3>Key Differences</h3>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>Currying</th>
                <th>Composition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Purpose</strong></td>
                <td>Breaking a function into smaller functions</td>
                <td>Combining multiple functions together</td>
              </tr>
              <tr>
                <td><strong>What it does</strong></td>
                <td>Takes multiple arguments one at a time</td>
                <td>Chains function outputs as inputs</td>
              </tr>
              <tr>
                <td><strong>Function structure</strong></td>
                <td>Single function with nested returns</td>
                <td>Multiple separate functions</td>
              </tr>
              <tr>
                <td><strong>Example</strong></td>
                <td>makeSticker(shape)(color)</td>
                <td>compose(multiply, add)(x)</td>
              </tr>
              <tr>
                <td><strong>How arguments work</strong></td>
                <td>Arguments applied one at a time</td>
                <td>Output of one is input to next</td>
              </tr>
            </tbody>
          </table>

          <h3>Visual Comparison</h3>
          <div className="comparison-grid">
            <div className="comparison-card">
              <h4>Currying: Step-by-Step Argument Supply</h4>
              <div className="code-block">
                <pre>{`// Curry: f(a)(b)(c)
const curry = (a) => (b) => (c) => 
  a + b + c;

curry(1)(2)(3);
// Step 1: Pass a=1
// Step 2: Pass b=2
// Step 3: Pass c=3
// Result: 6`}</pre>
              </div>
            </div>

            <div className="comparison-card">
              <h4>Composition: Data Flow Through Functions</h4>
              <div className="code-block">
                <pre>{`// Compose: f(g(h(x)))
const f = (x) => x + 10;
const g = (x) => x * 2;
const h = (x) => x - 5;

f(g(h(20)));
// Step 1: h(20) = 15
// Step 2: g(15) = 30
// Step 3: f(30) = 40
// Result: 40`}</pre>
              </div>
            </div>
          </div>

          <div className="info-box">
            <strong>Remember:</strong><br />
            • <strong>Currying</strong> is about how a single function receives its arguments<br />
            • <strong>Composition</strong> is about how multiple functions are combined together<br />
            • Both are powerful functional programming concepts but address different aspects
          </div>

          <div className="button-container">
            <button className="run-button" onClick={runComparisonExample}>
              Run Comparison Example
            </button>
          </div>
        </div>
      </div>

      <div className="output-section">
        <h3>Output:</h3>
        <pre className="output-box">{output}</pre>
      </div>
    </div>
  );
}
