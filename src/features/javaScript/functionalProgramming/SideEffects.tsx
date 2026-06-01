import { useState } from 'react';
import '../styles/SideEffects.css';

export default function SideEffects() {
  const [output, setOutput] = useState<string>('Click a button to run an example');
  const [httpOutput, setHttpOutput] = useState<string>('');

  const runMutatingArguments = () => {
    const logs: string[] = [];

    // IMPURE
    function impureAddItem(myArray: number[], item: number): number[] {
      myArray.push(item);
      return myArray;
    }

    const arr1 = [1, 2, 3];
    logs.push('❌ IMPURE FUNCTION:');
    logs.push(`Before calling impureAddItem: [${arr1.join(', ')}]`);
    impureAddItem(arr1, 4);
    logs.push(`After calling impureAddItem: [${arr1.join(', ')}]`);
    logs.push('Side effect: Original array MUTATED!');

    // PURE
    function pureAddItem(myArray: number[], item: number): number[] {
      return [...myArray, item];
    }

    const arr2 = [1, 2, 3];
    logs.push('\n✓ PURE FUNCTION:');
    logs.push(`Before calling pureAddItem: [${arr2.join(', ')}]`);
    const arr3 = pureAddItem(arr2, 4);
    logs.push(`After calling pureAddItem: [${arr2.join(', ')}]`);
    logs.push(`Returned new array: [${arr3.join(', ')}]`);
    logs.push('No side effect: Original array UNCHANGED!');

    setOutput(logs.join('\n'));
  };

  const runNonLocalState = () => {
    const logs: string[] = [];

    // IMPURE
    let globalMessage = "Hello";

    function impureGreet(name: string): string {
      return `${globalMessage} ${name}`;
    }

    logs.push('❌ IMPURE FUNCTION:');
    logs.push(impureGreet("Kathir"));
    globalMessage = "Hi";
    logs.push("After changing globalMessage to 'Hi':");
    logs.push(impureGreet("Kathir"));
    logs.push('Same input, DIFFERENT output! Depends on external state.');

    // PURE
    function pureGreet(greeting: string, name: string): string {
      return `${greeting} ${name}`;
    }

    logs.push('\n✓ PURE FUNCTION:');
    logs.push(pureGreet("Hello", "Kathir"));
    logs.push(pureGreet("Hello", "Kathir"));
    logs.push('Always returns SAME output for same inputs!');

    setOutput(logs.join('\n'));
  };

  const runModifyingNonLocal = () => {
    const logs: string[] = [];

    // IMPURE
    let counter = 0;

    function impureIncrement(num: number): number {
      counter += num;
      return counter;
    }

    logs.push('❌ IMPURE FUNCTION:');
    logs.push(`Initial counter: ${0}`);
    logs.push(`impureIncrement(5): ${impureIncrement(5)}`);
    logs.push(`impureIncrement(5): ${impureIncrement(5)}`);
    logs.push(`Final counter: ${counter}`);
    logs.push('Side effect: External counter variable CHANGED!');

    // PURE
    function pureIncrement(currentValue: number, num: number): number {
      return currentValue + num;
    }

    logs.push('\n✓ PURE FUNCTION:');
    logs.push(`pureIncrement(0, 5): ${pureIncrement(0, 5)}`);
    logs.push(`pureIncrement(0, 5): ${pureIncrement(0, 5)}`);
    logs.push('Always returns SAME result - no external state changed!');

    setOutput(logs.join('\n'));
  };

  const runHTTPSideEffect = async () => {
    const logs: string[] = [];
    logs.push('❌ IMPURE FUNCTION - Making HTTP Request:');
    logs.push('Fetching user data from JSONPlaceholder API...');
    setOutput(logs.join('\n'));

    try {
      const [user1, user2] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json()),
        fetch('https://jsonplaceholder.typicode.com/users/2').then(r => r.json()),
      ]);

      let html = `<div style="margin-bottom: 20px; padding: 15px; background: #e8f4f8; border-radius: 4px;">
        <h4 style="color: #d63384; margin-top: 0;">User 1:</h4>
        <strong>Name:</strong> ${user1.name}<br>
        <strong>Email:</strong> ${user1.email}<br>
        <strong>Company:</strong> ${user1.company.name}
      </div>
      <div style="padding: 15px; background: #fff3cd; border-radius: 4px;">
        <h4 style="color: #d63384; margin-top: 0;">User 2:</h4>
        <strong>Name:</strong> ${user2.name}<br>
        <strong>Email:</strong> ${user2.email}<br>
        <strong>Company:</strong> ${user2.company.name}
      </div>`;

      setHttpOutput(html);
    } catch (error) {
      setHttpOutput(`<p style="color: red;">Error fetching data: ${error}</p>`);
    }
  };

  const runDOMSideEffect = () => {
    const logs: string[] = [];
    
    // IMPURE - Modifies DOM directly (side effect)
    function impureDisplayMessage(message: string): string {
      logs.push('❌ IMPURE FUNCTION - Modifying DOM:');
      logs.push(`Displaying message: "${message}"`);
      logs.push('Side effect: DOM element MODIFIED!');
      logs.push('The HTML on the page has been changed directly by the function.');
      return message;
    }

    // PURE - Returns data without modifying DOM
    function pureFormatMessage(message: string) {
      logs.push('\n✓ PURE FUNCTION - No DOM manipulation:');
      logs.push(`Processing message: "${message}"`);

      return {
        text: message,
        timestamp: new Date().toISOString(),
        length: message.length,
      };
    }

    impureDisplayMessage("Hello from Side Effects Example!");
    const pureResult = pureFormatMessage("Hello from Pure Function");
    logs.push(`Pure function returned: ${JSON.stringify(pureResult)}`);
    logs.push('No side effect: Only returns data, does not modify DOM!');

    setOutput(logs.join('\n'));
  };

  const runCommonSideEffects = () => {
    const logs: string[] = [];

    // Math.random()
    function impureRandomNumber(): number {
      return Math.random();
    }

    logs.push('❌ IMPURE - Using Math.random():');
    logs.push(`impureRandomNumber(): ${impureRandomNumber()}`);
    logs.push(`impureRandomNumber(): ${impureRandomNumber()}`);
    logs.push('Each call returns different result!');

    // Pure alternative
    function pureCalculateAge(birthYear: number, currentYear: number): number {
      return currentYear - birthYear;
    }

    logs.push('\n✓ PURE - Accepts parameters:');
    logs.push(`pureCalculateAge(2000, 2024): ${pureCalculateAge(2000, 2024)}`);
    logs.push(`pureCalculateAge(2000, 2024): ${pureCalculateAge(2000, 2024)}`);
    logs.push('Always returns SAME result!');

    setOutput(logs.join('\n'));
  };

  return (
    <div className="side-effects-container">
      <div className="header">
        <h1>Side Effects in JavaScript</h1>
      </div>

      <div className="container">
        <div className="section">
          <div className="definition">
            A <strong>side effect</strong> is any change or action that occurs <strong>outside the function's scope</strong>. It means the function modifies something beyond just returning a value. Functions with side effects are <strong>impure functions</strong>.
          </div>

          <h3>Common Side Effects:</h3>
          <ul>
            <li><strong>Modifying non-local variables</strong> - Changing variables outside the function</li>
            <li><strong>Mutating arguments</strong> - Modifying objects or arrays passed as parameters</li>
            <li><strong>Making HTTP requests</strong> - Network calls to servers</li>
            <li><strong>DOM manipulation</strong> - Changing HTML elements on the page</li>
            <li><strong>Console output</strong> - Writing to the console</li>
            <li><strong>Using Math.random()</strong> - Generating unpredictable values</li>
            <li><strong>Getting current time</strong> - Using Date or timestamps</li>
          </ul>
        </div>

        <div className="section">
          <h2>Example 1: Mutating Arguments (Side Effect)</h2>
          <div className="button-container">
            <button className="run-button" onClick={runMutatingArguments}>
              Run Example 1
            </button>
          </div>
        </div>

        <div className="section">
          <h2>Example 2: Dependent on Non-Local State</h2>
          <div className="button-container">
            <button className="run-button" onClick={runNonLocalState}>
              Run Example 2
            </button>
          </div>
        </div>

        <div className="section">
          <h2>Example 3: Modifying Non-Local State</h2>
          <div className="button-container">
            <button className="run-button" onClick={runModifyingNonLocal}>
              Run Example 3
            </button>
          </div>
        </div>

        <div className="section">
          <h2>Example 4: HTTP Request Side Effect</h2>
          <div className="button-container">
            <button className="run-button" onClick={runHTTPSideEffect}>
              Run HTTP Example
            </button>
          </div>
          {httpOutput && (
            <div className="http-result" dangerouslySetInnerHTML={{ __html: httpOutput }} />
          )}
        </div>

        <div className="section">
          <h2>Example 5: DOM Manipulation Side Effect</h2>
          <div className="button-container">
            <button className="run-button" onClick={runDOMSideEffect}>
              Run DOM Example
            </button>
          </div>
        </div>

        <div className="section">
          <h2>Example 6: Common Side Effects</h2>
          <div className="button-container">
            <button className="run-button" onClick={runCommonSideEffects}>
              Run Example 6
            </button>
          </div>
        </div>

        <div className="section">
          <h2>Key Takeaways</h2>
          <ul>
            <li><strong>Side effects make functions unpredictable</strong> - Same inputs don't guarantee same outputs</li>
            <li><strong>Pure functions are better</strong> - They're easier to test, understand, and debug</li>
            <li><strong>Sometimes side effects are necessary</strong> - HTTP requests, DOM updates, etc.</li>
            <li><strong>Best practice</strong> - Separate pure logic from side effects. Keep functions as pure as possible.</li>
          </ul>
        </div>
      </div>

      <div className="output-section">
        <h3>Output:</h3>
        <pre className="output-box">{output}</pre>
      </div>
    </div>
  );
}
