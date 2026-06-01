import { useState } from 'react';
import '../styles/Immutability.css';

export default function Immutability() {
  const [output, setOutput] = useState<string>('Click a button to run an example');

  const runPrimitivesExample = () => {
    const logs: string[] = [];

    let greet = "Hello";
    logs.push('=== PRIMITIVES: NATURALLY IMMUTABLE ===');
    logs.push(`Initial string: "${greet}"`);
    logs.push('Memory address: points to "Hello"');

    greet += ", World";
    logs.push(`\nAfter greet += ", World":`);
    logs.push(`New string: "${greet}"`);
    logs.push('Memory address: NOW points to "Hello, World"');

    logs.push('\n✓ What happened?');
    logs.push('JavaScript created a NEW string');
    logs.push('The original "Hello" is unchanged');
    logs.push('The variable greet now references the new string');

    let num = 42;
    logs.push('\n✓ Numbers work the same way:');
    logs.push(`Original: ${num}`);
    num = num + 8;
    logs.push(`After num + 8: ${num}`);
    logs.push('A NEW number was created');

    setOutput(logs.join('\n'));
  };

  const runArrayMutabilityExample = () => {
    const logs: string[] = [];

    logs.push('=== ARRAYS: MUTABLE VS IMMUTABLE ===');

    logs.push('\n❌ MUTABLE APPROACH (Modifying in place):');
    let ages1 = [42, 22, 35];
    logs.push(`Original array: [${ages1.join(', ')}]`);
    logs.push('Memory address: Array_001');

    ages1.push(8);
    logs.push(`\nAfter ages1.push(8):`);
    logs.push(`Modified array: [${ages1.join(', ')}]`);
    logs.push('Memory address: STILL Array_001');
    logs.push('Same array object changed - Mutable!');

    logs.push('\n✓ IMMUTABLE APPROACH (Using spread operator):');
    let ages2 = [42, 22, 35];
    logs.push(`Original array: [${ages2.join(', ')}]`);
    logs.push('Memory address: Array_002');

    ages2 = [...ages2, 8];
    logs.push(`\nAfter ages2 = [...ages2, 8]:`);
    logs.push(`New array: [${ages2.join(', ')}]`);
    logs.push('Memory address: NOW Array_003 (DIFFERENT!)');
    logs.push('New array created - Immutable approach!');

    setOutput(logs.join('\n'));
  };

  const runArrayMethodsExample = () => {
    const logs: string[] = [];

    logs.push('=== ARRAY METHODS: MUTABLE VS IMMUTABLE ===');

    logs.push('\n❌ MUTABLE METHODS (Modify original):');

    logs.push('\n1️⃣ push() - adds element:');
    let ages1 = [1, 2, 3, 4, 5];
    logs.push(`Original: [${ages1.join(', ')}]`);
    ages1.push(6);
    logs.push(`After push(6): [${ages1.join(', ')}]`);
    logs.push('Original array CHANGED!');

    logs.push('\n2️⃣ pop() - removes last element:');
    let ages2 = [1, 2, 3, 4, 5];
    logs.push(`Original: [${ages2.join(', ')}]`);
    ages2.pop();
    logs.push(`After pop(): [${ages2.join(', ')}]`);
    logs.push('Original array CHANGED!');

    logs.push('\n✓ IMMUTABLE METHODS (Create new array):');

    logs.push('\n1️⃣ map() - creates new array:');
    let nums1 = [1, 2, 3, 4, 5];
    logs.push(`Original: [${nums1.join(', ')}]`);
    let mapped = nums1.map(x => x * 2);
    logs.push(`After map(x => x * 2): [${mapped.join(', ')}]`);
    logs.push(`Original unchanged: [${nums1.join(', ')}]`);
    logs.push('New array created!');

    logs.push('\n2️⃣ filter() - creates new array:');
    let nums2 = [10, 20, 30, 40, 50];
    logs.push(`Original: [${nums2.join(', ')}]`);
    let filtered = nums2.filter(x => x > 25);
    logs.push(`After filter(x > 25): [${filtered.join(', ')}]`);
    logs.push(`Original unchanged: [${nums2.join(', ')}]`);
    logs.push('New array created!');

    logs.push('\n📌 SUMMARY:');
    logs.push('❌ Mutable: push, pop, shift, unshift, sort, reverse, splice');
    logs.push('✓ Immutable: map, filter, slice, concat, spread operator');

    setOutput(logs.join('\n'));
  };

  const runStringImmutabilityExample = () => {
    const logs: string[] = [];

    logs.push('=== STRINGS: NATURALLY IMMUTABLE ===');

    logs.push('\n✓ Attempting to modify string at index 0:');
    let greet = "Hello";
    logs.push(`Original string: "${greet}"`);
    logs.push('Memory address: points to "Hello"');

    logs.push('\nTrying: greet[0] = "J"');
    Object.defineProperty(greet, '0', { value: 'J' });

    logs.push('\n✓ Result:');
    logs.push(`String after assignment: "${greet}"`);
    logs.push('Memory address: STILL points to "Hello"');
    logs.push('The assignment was silently ignored!');

    logs.push('\n✓ Why? Because strings are immutable:');
    logs.push('✓ Strings are read-only');
    logs.push('✓ You cannot change individual characters');
    logs.push('✓ Any change creates a NEW string');

    logs.push('\n✓ Correct way to modify strings:');
    let greeting = "Hello";
    logs.push(`Original: "${greeting}"`);
    greeting = "J" + greeting.slice(1);
    logs.push(`After slicing and concatenating: "${greeting}"`);
    logs.push('NEW string created - Immutable approach!');

    setOutput(logs.join('\n'));
  };

  const runObjectMutabilityExample = () => {
    const logs: string[] = [];

    logs.push('=== OBJECTS: MUTABLE VS IMMUTABLE ===');

    logs.push('\n❌ MUTABLE APPROACH (Direct modification):');
    let person1 = { name: "Kathir", age: 30 };
    logs.push(`Original object: ${JSON.stringify(person1)}`);
    logs.push('Memory address: Object_001');

    person1.age = 31;
    logs.push(`\nAfter person1.age = 31:`);
    logs.push(`Modified object: ${JSON.stringify(person1)}`);
    logs.push('Memory address: STILL Object_001');
    logs.push('Same object changed - Mutable!');

    logs.push('\n✓ IMMUTABLE APPROACH (Using spread):');
    let person2 = { name: "Kathir", age: 30 };
    logs.push(`Original object: ${JSON.stringify(person2)}`);
    logs.push('Memory address: Object_002');

    person2 = { ...person2, age: 31 };
    logs.push(`\nAfter person2 = { ...person2, age: 31 }:`);
    logs.push(`New object: ${JSON.stringify(person2)}`);
    logs.push('Memory address: NOW Object_003 (DIFFERENT!)');
    logs.push('New object created - Immutable approach!');

    logs.push('\n📌 Adding new properties:');
    let person3: { name: string; city?: string } = { name: "Kathir" };
    logs.push(`Original: ${JSON.stringify(person3)}`);

    person3 = { ...person3, city: "India" };
    logs.push(`After adding city (spread): ${JSON.stringify(person3)}`);
    logs.push('New object with added property!');

    setOutput(logs.join('\n'));
  };

  return (
    <div className="immutability-container">
      <div className="header">
        <h1>Immutability vs Mutability in JavaScript</h1>
      </div>

      <div className="container">
        <div className="section">
          <div className="definition">
            <strong>Immutability</strong> means that a value cannot be changed after it has been created. In JavaScript, some data types are immutable by default, while others are mutable but can be worked with in immutable ways.
          </div>

          <h3>Key Concept:</h3>
          <ul>
            <li>
              <strong>Immutable:</strong> Once a value is set, it cannot be changed. A new value must be created instead.
            </li>
            <li>
              <strong>Mutable:</strong> A value can be changed after it has been created.
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>Primitives: Naturally Immutable</h2>

          <p>In JavaScript, primitives like numbers, strings, and booleans are <strong>immutable</strong> by default.</p>

          <h3>Examples</h3>
          <div className="code-block">
            <pre>{`let greet = "Hello";
console.log("Original string:", greet);

greet += ", World";
console.log("After concatenation:", greet);
console.log("Note: A NEW string was created, not modified");

let num = 42;
console.log("Original:", num);

num = num + 8;
console.log("After num + 8:", num);
console.log("A NEW number was created");`}</pre>
          </div>

          <div className="button-container">
            <button className="run-button" onClick={runPrimitivesExample}>
              Run Primitives Example
            </button>
          </div>
        </div>

        <div className="section">
          <h2>Arrays: Mutable vs Immutable</h2>

          <div className="code-block">
            <pre>{`// MUTABLE - Push modifies the original array
let ages = [42, 22, 35];
ages.push(8);
console.log(ages); // [42, 22, 35, 8] - Original changed!

// IMMUTABLE - Spread creates a new array
let ages2 = [42, 22, 35];
ages2 = [...ages2, 8];
console.log(ages2); // [42, 22, 35, 8] - New array created`}</pre>
          </div>

          <div className="button-container">
            <button className="run-button" onClick={runArrayMutabilityExample}>
              Run Array Mutability Example
            </button>
            <button className="run-button" onClick={runArrayMethodsExample}>
              Run Array Methods Example
            </button>
          </div>
        </div>

        <div className="section">
          <h2>Strings: Naturally Immutable</h2>

          <p>Strings in JavaScript are <strong>immutable</strong>. Once created, they cannot be changed. Any operation that appears to modify a string actually creates a new string.</p>

          <div className="button-container">
            <button className="run-button" onClick={runStringImmutabilityExample}>
              Run String Immutability Example
            </button>
          </div>
        </div>

        <div className="section">
          <h2>Objects: Mutable by Default</h2>

          <p>In JavaScript, objects are <strong>mutable by default</strong>. You can add, delete, or change properties after an object is created.</p>

          <div className="code-block">
            <pre>{`// MUTABLE - Direct modification
let person = { name: "Kathir", age: 30 };
person.age = 31;
console.log(person); // Object CHANGED

// IMMUTABLE - Using spread
let person2 = { name: "Kathir", age: 30 };
person2 = { ...person2, age: 31 };
console.log(person2); // NEW object created`}</pre>
          </div>

          <div className="button-container">
            <button className="run-button" onClick={runObjectMutabilityExample}>
              Run Objects Example
            </button>
          </div>
        </div>

        <div className="section">
          <h2>Why Is Immutability Important?</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <h4>1. Predictability</h4>
              <p>Immutable values are predictable and consistent. Once set, they won't change unexpectedly.</p>
            </div>
            <div className="benefit-card">
              <h4>2. State Management</h4>
              <p>Immutability is a key principle in frameworks like Redux for reliable state tracking.</p>
            </div>
            <div className="benefit-card">
              <h4>3. Fewer Bugs</h4>
              <p>Code becomes simpler and less error-prone when data structures don't change unexpectedly.</p>
            </div>
            <div className="benefit-card">
              <h4>4. Functional Programming</h4>
              <p>Immutability aligns with functional programming principles for safer, more predictable code.</p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Mutability vs Immutability Comparison</h2>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Mutable</th>
                <th>Immutable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Can change after creation?</strong></td>
                <td>Yes</td>
                <td>No</td>
              </tr>
              <tr>
                <td><strong>Examples</strong></td>
                <td>Arrays, Objects (by default)</td>
                <td>Strings, Numbers, boolean</td>
              </tr>
              <tr>
                <td><strong>Predictable?</strong></td>
                <td>Less predictable</td>
                <td>More predictable</td>
              </tr>
              <tr>
                <td><strong>Good for state?</strong></td>
                <td>No</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="section">
          <h2>Best Practices</h2>

          <ul>
            <li>
              <strong>Embrace immutability</strong> - Use spread operator and immutable methods (map, filter, etc.) for arrays and objects.
            </li>
            <li>
              <strong>Avoid mutations in functions</strong> - Return new values instead of modifying parameters.
            </li>
            <li>
              <strong>Use const by default</strong> - Use <code>const</code> instead of <code>let</code> to prevent reassignment.
            </li>
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
