import { useState } from 'react';
import '../styles/PureFunctions.css';

export default function PureFunctions() {
  const [output, setOutput] = useState<string>('Click a button to run an example');

  const runPureExample = () => {
    const logs: string[] = [];
    
    // Pure Function
    function add(a: number, b: number): number {
      return a + b;
    }

    logs.push('=== PURE FUNCTION EXAMPLE ===');
    logs.push('Pure Function: add(3, 4)');
    logs.push(`Result: ${add(3, 4)}`);
    logs.push('Pure Function: add(3, 4) again');
    logs.push(`Result: ${add(3, 4)}`);
    logs.push('Result: Same input always returns same output ✓');
    logs.push('Key Property: Pure functions are predictable!');

    setOutput(logs.join('\n'));
  };

  const runImpureExample = () => {
    const logs: string[] = [];
    
    // Impure Function
    let message = "Hi there!";

    function myMessage(value: string): string {
      return `${message} ${value}`;
    }

    logs.push('=== IMPURE FUNCTION EXAMPLE ===');
    logs.push("Impure Function: myMessage('Kathir')");
    logs.push(myMessage("Kathir"));

    message = "Hello!"; // outside variable changed!

    logs.push("After changing message to 'Hello!'");
    logs.push("Impure Function: myMessage('Kathir') - SAME INPUT");
    logs.push(myMessage("Kathir"));
    logs.push("Result: Same input returns DIFFERENT output ✗");
    logs.push("Key Problem: Impure functions depend on outside state!");

    setOutput(logs.join('\n'));
  };

  return (
    <div className="pure-functions-container">
      <div className="header">
        <h1>Pure and Impure Functions in JavaScript</h1>
      </div>

      <div className="container">
        <div className="section">
          <div className="definition">
            A <strong>pure function</strong> in JavaScript is a function that returns the same result if the same arguments(input) are passed in the function.
          </div>

          <ul>
            <li>
              The <strong>return value</strong> of the function on the function call should only be dependent on the input function arguments.
            </li>
            <li>
              It should <strong>not modify any non-local state</strong>.
            </li>
            <li>
              The function should <strong>not have any side effects</strong>.
            </li>
          </ul>

          <h3>Pure Function Example</h3>
          <div className="code-block">
            <pre>{`// PURE FUNCTION
function add(a, b) {
  return a + b;
}

console.log(add(3, 4));  // Always 7
console.log(add(3, 4));  // Always 7`}</pre>
          </div>

          <div className="button-container">
            <button className="run-button" onClick={runPureExample}>
              Run Pure Function Example
            </button>
          </div>
        </div>

        <div className="section">
          <h2>Why Use Pure Functions in JavaScript?</h2>
          <div className="benefits">
            <div className="benefit-card">
              <h4>1. Better Readability</h4>
              <p>Pure functions increase the readability of JavaScript code because of its simplicity.</p>
            </div>
            <div className="benefit-card">
              <h4>2. Testable</h4>
              <p>It's easier to perform unit testing on a pure function than on an impure function.</p>
            </div>
            <div className="benefit-card">
              <h4>3. Better Performance</h4>
              <p>Pure functions can be memoized and this makes your application faster.</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Impure Function in JavaScript</h2>

          <ul>
            <li><strong>Gives inconsistent results</strong> - Same input can return different output each time.</li>
            <li><strong>Has one or more side effects</strong> - It can change things outside the function.</li>
            <li><strong>Mutates non-local state</strong> - It can modify variables or data that live outside the function.</li>
          </ul>

          <h3>Impure Function Example</h3>
          <div className="code-block">
            <pre>{`// IMPURE FUNCTION
let message = 'Hi there!';

function myMessage(value) {
  return \`\${message} \${value}\`;
}

console.log(myMessage('Kathir')); // Hi there! Kathir

message = 'Hello!'; // outside variable changed!

console.log(myMessage('Kathir')); // Hello! Kathir — DIFFERENT OUTPUT!`}</pre>
          </div>

          <div className="button-container">
            <button className="run-button" onClick={runImpureExample}>
              Run Impure Function Example
            </button>
          </div>
        </div>

        <div className="section">
          <h2>Pure vs Impure Functions Comparison</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Pure</th>
                <th>Impure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Same input = same output?</strong></td>
                <td>Always</td>
                <td>Not always</td>
              </tr>
              <tr>
                <td><strong>Modifies outside variables?</strong></td>
                <td>Never</td>
                <td>Can</td>
              </tr>
              <tr>
                <td><strong>Easy to test?</strong></td>
                <td>Very easy</td>
                <td>Harder</td>
              </tr>
              <tr>
                <td><strong>Predictable?</strong></td>
                <td>Yes</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="output-section">
        <h3>Output:</h3>
        <pre className="output-box">{output}</pre>
      </div>
    </div>
  );
}
