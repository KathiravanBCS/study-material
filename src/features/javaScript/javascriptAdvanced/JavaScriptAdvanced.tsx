import { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/JavaScriptAdvanced.css';

type Section = 
  | 'intro' 
  | 'functions' 
  | 'closures' 
  | 'objects' 
  | 'arrayMethods' 
  | 'destructuring' 
  | 'spreadRest' 
  | 'shorthand';

export default function JavaScriptAdvanced() {
  // The active topic is driven by the sidebar route (/javascript/advanced/:section)
  const { section } = useParams<{ section: string }>();
  const activeSection = (section as Section) || 'intro';
  const [output, setOutput] = useState<string>('Select a topic and click "Run Example" to see output');

  // INTRODUCTION
  const runIntroExample = () => {
    const logs: string[] = [];

    logs.push('=== JAVASCRIPT ADVANCED CONCEPTS ===\n');
    logs.push('Master modern ES6+ features for professional development\n');

    logs.push('📚 Topics Covered:\n');
    logs.push('1. Functions & Arrow Functions');
    logs.push('   - Multiple ways to declare functions');
    logs.push('   - Modern arrow function syntax');
    logs.push('   - Concise callbacks\n');

    logs.push('2. Closures');
    logs.push('   - Function scope and encapsulation');
    logs.push('   - Data privacy with closures');
    logs.push('   - Practical patterns\n');

    logs.push('3. Object Literals & Property Access');
    logs.push('   - Object creation and manipulation');
    logs.push('   - Dot notation vs Bracket notation');
    logs.push('   - Nested objects and arrays\n');

    logs.push('4. Array Methods');
    logs.push('   - Higher-order functions');
    logs.push('   - map(), filter(), reduce()');
    logs.push('   - find(), some(), every()\n');

    logs.push('5. Destructuring');
    logs.push('   - Object destructuring');
    logs.push('   - Array destructuring');
    logs.push('   - Function parameters\n');

    logs.push('6. Spread & Rest Operators');
    logs.push('   - Array and object spreading');
    logs.push('   - Rest parameters');
    logs.push('   - Function arguments\n');

    logs.push('7. Object Shorthand & Computed Properties');
    logs.push('   - Property shorthand');
    logs.push('   - Method shorthand');
    logs.push('   - Dynamic property names\n');

    setOutput(logs.join('\n'));
  };

  // FUNCTIONS SECTION
  const runFunctionsExample = () => {
    const logs: string[] = [];

    logs.push('=== FUNCTION DECLARATION ===\n');
    function greetDeclare(name: string) {
      return `Hello from declaration, ${name}!`;
    }
    logs.push('function greetDeclare(name) { return ...; }');
    logs.push(`Result: ${greetDeclare('Taylor')}`);
    logs.push('✓ Hoisted - Can be called before declaration\n');

    logs.push('=== FUNCTION EXPRESSION ===\n');
    const greetExpression = function(name: string) {
      return `Hello from expression, ${name}!`;
    };
    logs.push('const greetExpression = function(name) { return ...; };');
    logs.push(`Result: ${greetExpression('Taylor')}`);
    logs.push('✗ NOT hoisted - Must declare before use\n');

    logs.push('=== ARROW FUNCTION ===\n');
    const add = (a: number, b: number) => a + b;
    logs.push('const add = (a, b) => a + b;');
    logs.push(`add(5, 3) = ${add(5, 3)}`);

    const greetArrow = (name: string) => {
      return `Hello from arrow, ${name}!`;
    };
    logs.push('\nconst greetArrow = (name) => { return ...; };');
    logs.push(`Result: ${greetArrow('Taylor')}`);

    const sayHi = () => "Hi!";
    logs.push('\n✓ Implicit return (no curly braces)');
    logs.push(`const sayHi = () => "Hi!";`);
    logs.push(`Result: ${sayHi()}`);

    logs.push('\n✓ Single parameter (no parentheses needed)');
    const double = (x: number) => x * 2;
    logs.push('const double = (x) => x * 2;');
    logs.push(`double(5) = ${double(5)}`);

    logs.push('\n=== ARROW FUNCTIONS vs REGULAR FUNCTIONS ===');
    logs.push('✓ Shorter syntax');
    logs.push('✓ No own "this" binding');
    logs.push('✓ Better for callbacks');
    logs.push('✗ Cannot be used as constructors');

    setOutput(logs.join('\n'));
  };

  // CLOSURES SECTION
  const runClosuresExample = () => {
    const logs: string[] = [];

    logs.push('=== CLOSURES FUNDAMENTALS ===\n');
    logs.push('A closure is created when a function is defined inside');
    logs.push('another function and accesses variables from outer scope.\n');

    logs.push('=== EXAMPLE 1: COUNTER WITH CLOSURE ===\n');
    
    const createCounter = () => {
      let count = 0;
      return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
      };
    };

    const counter = createCounter();
    logs.push('const createCounter = () => {');
    logs.push('  let count = 0; // Private variable');
    logs.push('  return { increment, decrement, getCount };');
    logs.push('};\n');

    logs.push(`counter.getCount() = ${counter.getCount()}`);
    logs.push(`counter.increment() = ${counter.increment()}`);
    logs.push(`counter.increment() = ${counter.increment()}`);
    logs.push(`counter.decrement() = ${counter.decrement()}`);
    logs.push(`counter.getCount() = ${counter.getCount()}`);

    logs.push('\n=== EXAMPLE 2: BANK ACCOUNT (DATA PRIVACY) ===\n');

    const createAccount = (initialBalance: number) => {
      let balance = initialBalance;
      
      return {
        deposit: (amount: number) => {
          balance += amount;
          return `Deposited $${amount}. Balance: $${balance}`;
        },
        withdraw: (amount: number) => {
          if (amount > balance) {
            return `Insufficient funds! Balance: $${balance}`;
          }
          balance -= amount;
          return `Withdrew $${amount}. Balance: $${balance}`;
        },
        getBalance: () => balance
      };
    };

    const account = createAccount(1000);
    logs.push('Bank Account Example:');
    logs.push(`Initial balance: $${account.getBalance()}`);
    logs.push(account.deposit(500));
    logs.push(account.withdraw(300));
    logs.push(account.withdraw(2000));

    logs.push('\n=== FUNCTION FACTORY PATTERN ===\n');

    const createMultiplier = (multiplier: number) => {
      return (number: number) => number * multiplier;
    };

    const double = createMultiplier(2);
    const triple = createMultiplier(3);
    
    logs.push('const createMultiplier = (multiplier) => {');
    logs.push('  return (number) => number * multiplier;');
    logs.push('};\n');
    logs.push('const double = createMultiplier(2);');
    logs.push('const triple = createMultiplier(3);\n');
    logs.push(`double(5) = ${double(5)}`);
    logs.push(`triple(5) = ${triple(5)}`);

    setOutput(logs.join('\n'));
  };

  // OBJECTS SECTION
  const runObjectsExample = () => {
    const logs: string[] = [];

    logs.push('=== CREATING OBJECTS ===\n');

    const user = {
      name: 'John',
      age: 30,
      email: 'john@example.com',
      isActive: true
    };

    logs.push('const user = {');
    logs.push('  name: "John",');
    logs.push('  age: 30,');
    logs.push('  email: "john@example.com",');
    logs.push('  isActive: true');
    logs.push('};\n');

    logs.push('=== DOT NOTATION ===\n');
    logs.push(`user.name = "${user.name}"`);
    logs.push(`user.age = ${user.age}`);
    logs.push('✓ Use when property names are known at development time\n');

    logs.push('=== BRACKET NOTATION ===\n');
    logs.push(`user["email"] = "${user["email"]}"`);
    logs.push(`user["isActive"] = ${user["isActive"]}`);
    logs.push('✓ Use for dynamic property access\n');

    logs.push('=== DYNAMIC PROPERTY ACCESS ===\n');
    const propertyName = 'age';
    logs.push(`const propertyName = "${propertyName}";`);
    logs.push(`user[propertyName] = ${user[propertyName]}`);

    logs.push('\n=== SPECIAL CHARACTERS IN KEYS ===\n');
    const config = {
      'api-key': 'secret123',
      'max-connections': 100,
      '2024-revenue': 50000
    };

    logs.push('const config = {');
    logs.push('  "api-key": "secret123",');
    logs.push('  "max-connections": 100,');
    logs.push('  "2024-revenue": 50000');
    logs.push('};\n');
    logs.push(`config["api-key"] = "${config['api-key']}"`);
    logs.push(`config["max-connections"] = ${config['max-connections']}`);
    logs.push(`config["2024-revenue"] = ${config['2024-revenue']}`);

    logs.push('\n=== NESTED OBJECTS & ARRAYS ===\n');
    const company = {
      name: 'Tech Corp',
      location: {
        city: 'Chennai',
        state: 'Tamil Nadu',
        zip: 600002
      },
      employees: [
        { name: 'Vijay', role: 'Developer' },
        { name: 'Meera', role: 'Designer' }
      ]
    };

    logs.push(`company.name = "${company.name}"`);
    logs.push(`company.location.city = "${company.location.city}"`);
    logs.push(`company.employees[0].name = "${company.employees[0].name}"`);
    logs.push(`company.employees[1].role = "${company.employees[1].role}"`);

    logs.push('\n=== THIS KEYWORD ===\n');
    const person = {
      name: 'Alice',
      greet: function() {
        return `Hello, I'm ${this.name}`;
      }
    };
    logs.push('const person = {');
    logs.push('  name: "Alice",');
    logs.push('  greet: function() { return `Hello, I\'m ${this.name}`; }');
    logs.push('};\n');
    logs.push(`Result: ${person.greet()}`);

    setOutput(logs.join('\n'));
  };

  // ARRAY METHODS SECTION
  const runArrayMethodsExample = () => {
    const logs: string[] = [];

    logs.push('=== ARRAY METHODS (Higher-Order Functions) ===\n');

    const numbers = [1, 2, 3, 4, 5];

    // MAP
    logs.push('=== MAP() - Transform Each Element ===\n');
    const doubled = numbers.map(n => n * 2);
    logs.push('const numbers = [1, 2, 3, 4, 5];');
    logs.push('const doubled = numbers.map(n => n * 2);');
    logs.push(`Result: [${doubled.join(', ')}]`);
    logs.push('✓ Creates new array with transformed elements');
    logs.push('✓ Original array unchanged\n');

    const squared = numbers.map(n => n ** 2);
    logs.push('const squared = numbers.map(n => n ** 2);');
    logs.push(`Result: [${squared.join(', ')}]\n`);

    // FILTER
    logs.push('=== FILTER() - Select Matching Elements ===\n');
    const evens = numbers.filter(n => n % 2 === 0);
    logs.push('const evens = numbers.filter(n => n % 2 === 0);');
    logs.push(`Result: [${evens.join(', ')}]`);
    logs.push('✓ Returns new array with elements that pass test\n');

    const greaterThan3 = numbers.filter(n => n > 3);
    logs.push('const greaterThan3 = numbers.filter(n => n > 3);');
    logs.push(`Result: [${greaterThan3.join(', ')}]\n`);

    // REDUCE
    logs.push('=== REDUCE() - Accumulate to Single Value ===\n');
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    logs.push('const sum = numbers.reduce((acc, n) => acc + n, 0);');
    logs.push(`Result: ${sum}`);
    logs.push('Accumulation: 0 → 1 → 3 → 6 → 10 → 15\n');

    const product = numbers.reduce((acc, n) => acc * n, 1);
    logs.push('const product = numbers.reduce((acc, n) => acc * n, 1);');
    logs.push(`Result: ${product}\n`);

    // FIND
    logs.push('=== FIND() - Get First Matching Element ===\n');
    const firstEven = numbers.find(n => n % 2 === 0);
    logs.push('const firstEven = numbers.find(n => n % 2 === 0);');
    logs.push(`Result: ${firstEven}`);
    logs.push('✓ Returns first element that matches test\n');

    const users = [
      { id: 1, name: 'Alice', role: 'user' },
      { id: 2, name: 'Bob', role: 'admin' },
      { id: 3, name: 'Charlie', role: 'user' }
    ];
    const admin = users.find(u => u.role === 'admin');
    logs.push('const admin = users.find(u => u.role === "admin");');
    logs.push(`Result: { id: ${admin?.id}, name: "${admin?.name}", role: "${admin?.role}" }\n`);

    // SOME
    logs.push('=== SOME() - Test If Any Element Matches ===\n');
    const hasEven = numbers.some(n => n % 2 === 0);
    logs.push('const hasEven = numbers.some(n => n % 2 === 0);');
    logs.push(`Result: ${hasEven}`);
    logs.push('✓ Returns boolean - true if any element passes test\n');

    const hasNegative = numbers.some(n => n < 0);
    logs.push('const hasNegative = numbers.some(n => n < 0);');
    logs.push(`Result: ${hasNegative}\n`);

    // EVERY
    logs.push('=== EVERY() - Test If All Elements Match ===\n');
    const allPositive = numbers.every(n => n > 0);
    logs.push('const allPositive = numbers.every(n => n > 0);');
    logs.push(`Result: ${allPositive}`);
    logs.push('✓ Returns boolean - true if all elements pass test\n');

    const allEven = numbers.every(n => n % 2 === 0);
    logs.push('const allEven = numbers.every(n => n % 2 === 0);');
    logs.push(`Result: ${allEven}\n`);

    logs.push('=== CHAINING METHODS ===\n');
    const result = numbers
      .filter(n => n > 2)
      .map(n => n * 2)
      .reduce((acc, n) => acc + n, 0);
    
    logs.push('numbers.filter(n => n > 2).map(n => n * 2).reduce((acc, n) => acc + n, 0);');
    logs.push(`Step 1 - filter: [${numbers.filter(n => n > 2).join(', ')}]`);
    logs.push(`Step 2 - map: [${numbers.filter(n => n > 2).map(n => n * 2).join(', ')}]`);
    logs.push(`Step 3 - reduce: ${result}`);

    setOutput(logs.join('\n'));
  };

  // DESTRUCTURING SECTION
  const runDestructuringExample = () => {
    const logs: string[] = [];

    logs.push('=== OBJECT DESTRUCTURING ===\n');

    const person = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      city: 'New York'
    };

    logs.push('const person = {');
    logs.push('  firstName: "John",');
    logs.push('  lastName: "Doe",');
    logs.push('  age: 30,');
    logs.push('  city: "New York"');
    logs.push('};\n');

    logs.push('// Traditional way');
    logs.push('const firstName = person.firstName;');
    logs.push('const age = person.age;\n');

    logs.push('// Destructuring way');
    const { firstName, age } = person;
    logs.push('const { firstName, age } = person;');
    logs.push(`Result: firstName = "${firstName}", age = ${age}\n`);

    logs.push('=== RENAMING VARIABLES ===\n');
    const { firstName: fname, age: years } = person;
    logs.push('const { firstName: fname, age: years } = person;');
    logs.push(`Result: fname = "${fname}", years = ${years}\n`);

    logs.push('=== ARRAY DESTRUCTURING ===\n');
    const colors = ['red', 'green', 'blue', 'yellow'];
    logs.push('const colors = ["red", "green", "blue", "yellow"];\n');

    logs.push('// Traditional way');
    logs.push('const first = colors[0];');
    logs.push('const second = colors[1];\n');

    logs.push('// Destructuring way');
    const [first, second, third] = colors;
    logs.push('const [first, second, third] = colors;');
    logs.push(`Result: ${first}, ${second}, ${third}\n`);

    logs.push('=== ARRAY DESTRUCTURING WITH REST ===\n');
    const [c1, c2, ...rest] = colors;
    logs.push('const [c1, c2, ...rest] = colors;');
    logs.push(`c1 = "${c1}"`);
    logs.push(`c2 = "${c2}"`);
    logs.push(`rest = [${rest.join(', ')}]\n`);

    logs.push('=== SWAPPING VARIABLES ===\n');
    let x = 1, y = 2;
    logs.push('let x = 1, y = 2;');
    [x, y] = [y, x];
    logs.push('[x, y] = [y, x]; // Swap!');
    logs.push(`Result: x = ${x}, y = ${y}\n`);

    logs.push('=== FUNCTION PARAMETERS DESTRUCTURING ===\n');
    const displayUser = ({ firstName, age }: { firstName: string; age: number }) => {
      return `${firstName} is ${age} years old`;
    };
    logs.push('function displayUser({ firstName, age }) {');
    logs.push('  return `${firstName} is ${age} years old`;');
    logs.push('};\n');
    logs.push(`Result: ${displayUser({ firstName: 'Alice', age: 25 })}`);

    logs.push('\n=== NESTED DESTRUCTURING ===\n');
    const user = {
      name: 'Charlie',
      contact: {
        email: 'charlie@example.com',
        phone: '9876543210'
      }
    };
    
    const { name, contact: { email } } = user;
    logs.push('const { name, contact: { email } } = user;');
    logs.push(`Result: name = "${name}", email = "${email}"`);

    setOutput(logs.join('\n'));
  };

  // SPREAD & REST SECTION
  const runSpreadRestExample = () => {
    const logs: string[] = [];

    logs.push('=== SPREAD OPERATOR (...) ===\n');
    logs.push('Spreads elements of iterable into individual items\n');

    logs.push('--- ARRAY SPREADING ---\n');
    const original = [1, 2, 3];
    const copy = [...original];
    logs.push('const original = [1, 2, 3];');
    logs.push('const copy = [...original];');
    logs.push(`Original: [${original.join(', ')}]`);
    logs.push(`Copy: [${copy.join(', ')}]`);
    logs.push('✓ Shallow copy - independent arrays\n');

    const arr1 = [1, 2];
    const arr2 = [3, 4, 5];
    const combined = [...arr1, ...arr2];
    logs.push('const combined = [...arr1, ...arr2];');
    logs.push(`Result: [${combined.join(', ')}]\n`);

    const merged = [0, ...arr1, 2.5, ...arr2, 6];
    logs.push('const merged = [0, ...arr1, 2.5, ...arr2, 6];');
    logs.push(`Result: [${merged.join(', ')}]\n`);

    logs.push('--- ARRAY FUNCTION ARGUMENTS ---\n');
    const numbers = [5, 12, 8, 130, 44];
    logs.push('const numbers = [5, 12, 8, 130, 44];');
    logs.push('Math.max(...numbers);');
    logs.push(`Result: ${Math.max(...numbers)}`);
    logs.push(`Math.min(...numbers): ${Math.min(...numbers)}\n`);

    logs.push('--- OBJECT SPREADING ---\n');
    const person = { name: 'Alice', age: 25 };
    const personCopy = { ...person };
    logs.push('const person = { name: "Alice", age: 25 };');
    logs.push('const personCopy = { ...person };');
    logs.push(`Original: { name: "${person.name}", age: ${person.age} }`);
    logs.push(`Copy: { name: "${personCopy.name}", age: ${personCopy.age} }\n`);

    const address = { city: 'New York', country: 'USA' };
    const job = { title: 'Developer', company: 'Tech Corp' };
    const complete = { ...person, ...address, ...job };
    logs.push('const complete = { ...person, ...address, ...job };');
    logs.push(`Result: {`);
    logs.push(`  name: "${complete.name}",`);
    logs.push(`  age: ${complete.age},`);
    logs.push(`  city: "${complete.city}",`);
    logs.push(`  country: "${complete.country}",`);
    logs.push(`  title: "${complete.title}",`);
    logs.push(`  company: "${complete.company}"`);
    logs.push(`}\n`);

    logs.push('--- OVERRIDING PROPERTIES ---\n');
    const defaults = { theme: 'light', language: 'en' };
    const userSettings = { language: 'es' };
    const finalSettings = { ...defaults, ...userSettings };
    logs.push('const defaults = { theme: "light", language: "en" };');
    logs.push('const userSettings = { language: "es" };');
    logs.push('const finalSettings = { ...defaults, ...userSettings };');
    logs.push(`Result: { theme: "${finalSettings.theme}", language: "${finalSettings.language}" }\n`);

    logs.push('=== REST OPERATOR (...) ===\n');
    logs.push('Collects multiple elements into single array/object\n');

    logs.push('--- ARRAY REST ---\n');
    const [first, second, ...rest] = [1, 2, 3, 4, 5, 6];
    logs.push('const [first, second, ...rest] = [1, 2, 3, 4, 5, 6];');
    logs.push(`first = ${first}`);
    logs.push(`second = ${second}`);
    logs.push(`rest = [${rest.join(', ')}]\n`);

    logs.push('--- OBJECT REST ---\n');
    const obj = {
      name: 'Bob',
      age: 30,
      city: 'Boston',
      country: 'USA'
    };
    const { name, age, ...otherDetails } = obj;
    logs.push('const { name, age, ...otherDetails } = obj;');
    logs.push(`name = "${name}"`);
    logs.push(`age = ${age}`);
    logs.push(`otherDetails = {`);
    logs.push(`  city: "${otherDetails.city}",`);
    logs.push(`  country: "${otherDetails.country}"`);
    logs.push(`}\n`);

    logs.push('--- REST IN FUNCTION PARAMETERS ---\n');
    const sum = (...nums: number[]) => nums.reduce((a, b) => a + b, 0);
    logs.push('const sum = (...nums) => nums.reduce((a, b) => a + b, 0);');
    logs.push(`sum(1, 2, 3) = ${sum(1, 2, 3)}`);
    logs.push(`sum(10, 20, 30, 40) = ${sum(10, 20, 30, 40)}`);

    setOutput(logs.join('\n'));
  };

  // SHORTHAND SECTION
  const runShorthandExample = () => {
    const logs: string[] = [];

    logs.push('=== OBJECT PROPERTY SHORTHAND ===\n');

    const name = 'Alice';
    const age = 25;
    const city = 'New York';

    logs.push('const name = "Alice";');
    logs.push('const age = 25;');
    logs.push('const city = "New York";\n');

    logs.push('// Traditional ES5 way');
    logs.push('const person = {');
    logs.push('  name: name,');
    logs.push('  age: age,');
    logs.push('  city: city');
    logs.push('};\n');

    logs.push('// ES6 Shorthand way');
    const person = { name, age, city };
    logs.push('const person = { name, age, city };\n');
    logs.push(`Result: { name: "${person.name}", age: ${person.age}, city: "${person.city}" }\n`);

    logs.push('✓ When property name = variable name, use shorthand\n');

    logs.push('=== METHOD SHORTHAND ===\n');

    logs.push('// Traditional ES5 way');
    logs.push('const calculator = {');
    logs.push('  add: function(a, b) { return a + b; },');
    logs.push('  subtract: function(a, b) { return a - b; },');
    logs.push('  multiply: function(a, b) { return a * b; }');
    logs.push('};\n');

    logs.push('// ES6 Method Shorthand');
    const calculator = {
      add: (a: number, b: number) => a + b,
      subtract: (a: number, b: number) => a - b,
      multiply: (a: number, b: number) => a * b
    };

    logs.push('const calculator = {');
    logs.push('  add(a, b) { return a + b; },');
    logs.push('  subtract(a, b) { return a - b; },');
    logs.push('  multiply(a, b) { return a * b; }');
    logs.push('};\n');

    logs.push(`calculator.add(5, 3) = ${calculator.add(5, 3)}`);
    logs.push(`calculator.multiply(4, 2) = ${calculator.multiply(4, 2)}`);
    logs.push(`calculator.subtract(10, 4) = ${calculator.subtract(10, 4)}\n`);

    logs.push('=== COMPUTED PROPERTIES ===\n');
    logs.push('Use dynamic expressions as property names\n');

    const prefix = 'user';
    const suffix = 'Name';
    const dynamicKey = `${prefix}_${suffix}`;

    logs.push('const prefix = "user";');
    logs.push('const suffix = "Name";');
    logs.push('const dynamicKey = `${prefix}_${suffix}`;\n');

    logs.push('// Without computed properties (traditional)');
    const obj1 = {} as any;
    obj1[dynamicKey] = 'Alice';
    logs.push(`const obj = {};`);
    logs.push(`obj[dynamicKey] = "Alice";\n`);

    logs.push('// With computed properties (ES6)');
    const obj2 = {
      [dynamicKey]: 'Alice'
    };
    logs.push('const obj = {');
    logs.push('  [dynamicKey]: "Alice"');
    logs.push('};\n');
    logs.push(`Result: { "${dynamicKey}": "${obj2[dynamicKey]}" }\n`);

    logs.push('=== COMPUTED PROPERTIES WITH METHODS ===\n');
    const actions = ['get', 'post', 'delete'];
    const api = {} as any;

    logs.push('const actions = ["get", "post", "delete"];');
    logs.push('const api = {};\n');
    logs.push('actions.forEach(action => {');
    logs.push('  api[`${action}Request`] = () => {...};');
    logs.push('};\n');

    actions.forEach(action => {
      api[`${action}Request`] = () => `Making ${action.toUpperCase()} request...`;
    });

    logs.push(`api.getRequest() = "${api.getRequest()}"`);
    logs.push(`api.postRequest() = "${api.postRequest()}"`);
    logs.push(`api.deleteRequest() = "${api.deleteRequest()}"`);

    setOutput(logs.join('\n'));
  };

  return (
    <div className="js-advanced-container">
      <div className="header">
        <h1>JavaScript Advanced - Expert Level Tutorial</h1>
        <p>Master ES6+ features and modern JavaScript patterns</p>
      </div>

      <div className="container">
        <div className="content">
          {/* OVERVIEW */}
          {activeSection === 'intro' && (
            <div className="section">
              <h2>JavaScript Advanced Concepts</h2>
              <div className="definition">
                <strong>Advanced JavaScript</strong> covers modern ES6+ features and patterns that enable you to write clean, efficient, and professional-grade code.
              </div>

              <h3>What You'll Learn</h3>
              <div className="benefits">
                <div className="benefit-card">
                  <h4>⚙️ Functions & Arrow Functions</h4>
                  <p>Multiple function declarations, modern arrow syntax</p>
                </div>
                <div className="benefit-card">
                  <h4>🔒 Closures</h4>
                  <p>Function scope, data privacy, encapsulation patterns</p>
                </div>
                <div className="benefit-card">
                  <h4>📦 Objects</h4>
                  <p>Object creation, property access, nested structures</p>
                </div>
                <div className="benefit-card">
                  <h4>🔄 Array Methods</h4>
                  <p>map, filter, reduce, find, some, every - powerful transformations</p>
                </div>
                <div className="benefit-card">
                  <h4>💥 Destructuring</h4>
                  <p>Extract values from objects and arrays elegantly</p>
                </div>
                <div className="benefit-card">
                  <h4>⭐ Spread & Rest</h4>
                  <p>Expand arrays/objects, collect parameters</p>
                </div>
                <div className="benefit-card">
                  <h4>📝 Shorthand Syntax</h4>
                  <p>ES6 property and method shorthand, computed properties</p>
                </div>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runIntroExample}>
                  Run Overview
                </button>
              </div>
            </div>
          )}

          {/* FUNCTIONS */}
          {activeSection === 'functions' && (
            <div className="section">
              <h2>Functions & Arrow Functions</h2>
              <div className="definition">
                Functions are reusable blocks of code. JavaScript offers three modern ways to write them, each with distinct characteristics.
              </div>

              <h3>Three Ways to Declare Functions</h3>

              <h4>1. Function Declaration</h4>
              <div className="code-block">
                <pre>{`function greet(name) {
  return \`Hello, \${name}!\`;
}

greet('Taylor'); // "Hello, Taylor!"`}</pre>
              </div>
              <p>✓ <strong>Hoisted</strong> - Can be called before declaration in code</p>

              <h4>2. Function Expression</h4>
              <div className="code-block">
                <pre>{`const greet = function(name) {
  return \`Hello, \${name}!\`;
};

greet('Taylor'); // "Hello, Taylor!"`}</pre>
              </div>
              <p>✗ <strong>NOT Hoisted</strong> - Must declare before use</p>

              <h4>3. Arrow Function (ES6)</h4>
              <div className="code-block">
                <pre>{`// Full syntax
const greet = (name) => {
  return \`Hello, \${name}!\`;
};

// Implicit return (no curly braces)
const add = (a, b) => a + b;

// Single parameter (parentheses optional)
const double = x => x * 2;

// No parameters
const sayHi = () => "Hi!";`}</pre>
              </div>

              <h3>Key Differences</h3>
              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Declaration</th>
                      <th>Expression</th>
                      <th>Arrow</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Hoisted</strong></td>
                      <td>Yes ✓</td>
                      <td>No ✗</td>
                      <td>No ✗</td>
                    </tr>
                    <tr>
                      <td><strong>Syntax</strong></td>
                      <td>Verbose</td>
                      <td>Moderate</td>
                      <td>Concise</td>
                    </tr>
                    <tr>
                      <td><strong>this Binding</strong></td>
                      <td>Own "this"</td>
                      <td>Own "this"</td>
                      <td>Inherited "this"</td>
                    </tr>
                    <tr>
                      <td><strong>Constructor</strong></td>
                      <td>Can be</td>
                      <td>Can be</td>
                      <td>Cannot</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runFunctionsExample}>
                  Run Functions Example
                </button>
              </div>
            </div>
          )}

          {/* CLOSURES */}
          {activeSection === 'closures' && (
            <div className="section">
              <h2>Closures: Advanced Function Concept</h2>
              <div className="definition">
                A <strong>closure</strong> is created when a function is defined inside another function and accesses variables from the outer function's scope. The inner function "remembers" the outer scope variables.
              </div>

              <h3>Why Use Closures?</h3>
              <div className="benefits">
                <div className="benefit-card">
                  <h4>Data Privacy</h4>
                  <p>Create private variables that can't be accessed directly from outside</p>
                </div>
                <div className="benefit-card">
                  <h4>Stateful Functions</h4>
                  <p>Maintain state across multiple function calls</p>
                </div>
                <div className="benefit-card">
                  <h4>Encapsulation</h4>
                  <p>Bundle data with methods, hide implementation details</p>
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
  
  return function() {
    count++;
    return count;
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
// count is private - cannot access directly`}</pre>
              </div>

              <h3>Bank Account Pattern</h3>
              <div className="code-block">
                <pre>{`function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private
  
  return {
    deposit(amount) {
      balance += amount;
      return \`Balance: $\${balance}\`;
    },
    withdraw(amount) {
      balance -= amount;
      return \`Balance: $\${balance}\`;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
account.deposit(500); // "Balance: $1500"
account.withdraw(200); // "Balance: $1300"`}</pre>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runClosuresExample}>
                  Run Closures Example
                </button>
              </div>
            </div>
          )}

          {/* OBJECTS */}
          {activeSection === 'objects' && (
            <div className="section">
              <h2>Objects & Property Access</h2>
              <div className="definition">
                Objects are collections of key-value pairs. JavaScript provides multiple ways to access and manipulate object properties.
              </div>

              <h3>Creating Objects</h3>
              <div className="code-block">
                <pre>{`// Object Literal (Most Common)
const user = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
  isActive: true
};`}</pre>
              </div>

              <h3>Dot Notation vs Bracket Notation</h3>
              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>Dot Notation (.)</th>
                      <th>Bracket Notation ([])</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Syntax</strong></td>
                      <td>object.property</td>
                      <td>object["property"]</td>
                    </tr>
                    <tr>
                      <td><strong>Readability</strong></td>
                      <td>Clean, concise</td>
                      <td>More verbose</td>
                    </tr>
                    <tr>
                      <td><strong>Special Characters</strong></td>
                      <td>Not allowed</td>
                      <td>Allowed ✓</td>
                    </tr>
                    <tr>
                      <td><strong>Dynamic Access</strong></td>
                      <td>Not possible</td>
                      <td>Possible ✓</td>
                    </tr>
                    <tr>
                      <td><strong>When to Use</strong></td>
                      <td>Normal property names</td>
                      <td>Special chars, variables</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>Dot Notation</h3>
              <div className="code-block">
                <pre>{`const user = { name: 'John', age: 30 };

console.log(user.name); // "John"
console.log(user.age);  // 30

// Cannot work with special characters:
// user.first-name; ✗ Error
// user.user age;   ✗ Error`}</pre>
              </div>

              <h3>Bracket Notation</h3>
              <div className="code-block">
                <pre>{`const config = {
  'api-key': 'secret123',
  'max-connections': 100
};

console.log(config['api-key']);       // "secret123"
console.log(config['max-connections']); // 100

// Dynamic access
const prop = 'age';
console.log(user[prop]); // 30`}</pre>
              </div>

              <h3>Nested Objects & Arrays</h3>
              <div className="code-block">
                <pre>{`const company = {
  name: 'Tech Corp',
  location: {
    city: 'Chennai',
    address: {
      street: 'Anna Salai',
      zip: 600002
    }
  },
  employees: [
    { name: 'Vijay', role: 'Developer' },
    { name: 'Meera', role: 'Designer' }
  ]
};

// Access nested properties
company.location.city;           // "Chennai"
company.location.address.street; // "Anna Salai"
company.employees[0].name;       // "Vijay"
company.employees[1].role;       // "Designer"`}</pre>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runObjectsExample}>
                  Run Objects Example
                </button>
              </div>
            </div>
          )}

          {/* ARRAY METHODS */}
          {activeSection === 'arrayMethods' && (
            <div className="section">
              <h2>Array Methods: map, filter, reduce, find, some, every</h2>
              <div className="definition">
                <strong>Higher-order functions</strong> are functions that accept other functions as arguments or return functions. Array methods are powerful tools for transforming data.
              </div>

              <h3>Quick Reference</h3>
              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>Returns</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>map()</strong></td>
                      <td>New Array</td>
                      <td>Transform each element</td>
                    </tr>
                    <tr>
                      <td><strong>filter()</strong></td>
                      <td>New Array</td>
                      <td>Select matching elements</td>
                    </tr>
                    <tr>
                      <td><strong>reduce()</strong></td>
                      <td>Single Value</td>
                      <td>Accumulate into one value</td>
                    </tr>
                    <tr>
                      <td><strong>find()</strong></td>
                      <td>Single Element</td>
                      <td>Get first match</td>
                    </tr>
                    <tr>
                      <td><strong>some()</strong></td>
                      <td>Boolean</td>
                      <td>Test if any match</td>
                    </tr>
                    <tr>
                      <td><strong>every()</strong></td>
                      <td>Boolean</td>
                      <td>Test if all match</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>map() - Transform Elements</h3>
              <div className="code-block">
                <pre>{`const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] - unchanged

// Use cases: formatting, extracting, calculating`}</pre>
              </div>

              <h3>filter() - Select Matching Elements</h3>
              <div className="code-block">
                <pre>{`const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(n => n % 2 === 0);

console.log(evens); // [2, 4]

// Use cases: searching, validating, removing unwanted`}</pre>
              </div>

              <h3>reduce() - Accumulate to Single Value</h3>
              <div className="code-block">
                <pre>{`const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log(sum); // 15

// Accumulation: 0→1→3→6→10→15

// Use cases: summing, counting, grouping`}</pre>
              </div>

              <h3>Method Chaining</h3>
              <div className="code-block">
                <pre>{`const numbers = [1, 2, 3, 4, 5];

// Chain multiple methods
const result = numbers
  .filter(n => n > 2)      // [3, 4, 5]
  .map(n => n * 2)         // [6, 8, 10]
  .reduce((a, b) => a + b); // 24

console.log(result); // 24`}</pre>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runArrayMethodsExample}>
                  Run Array Methods Example
                </button>
              </div>
            </div>
          )}

          {/* DESTRUCTURING */}
          {activeSection === 'destructuring' && (
            <div className="section">
              <h2>Destructuring: Objects & Arrays</h2>
              <div className="definition">
                <strong>Destructuring</strong> allows you to extract values from objects or arrays into distinct variables in a clean, concise way.
              </div>

              <h3>Object Destructuring</h3>
              <div className="code-block">
                <pre>{`const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'New York'
};

// Traditional way
const firstName = person.firstName;
const age = person.age;

// Destructuring way
const { firstName, age } = person;
console.log(firstName); // "John"
console.log(age);       // 30`}</pre>
              </div>

              <h3>Renaming Variables</h3>
              <div className="code-block">
                <pre>{`const { firstName: fname, age: years } = person;

console.log(fname);  // "John"
console.log(years);  // 30`}</pre>
              </div>

              <h3>Array Destructuring</h3>
              <div className="code-block">
                <pre>{`const colors = ['red', 'green', 'blue', 'yellow'];

// Traditional way
const first = colors[0];
const second = colors[1];

// Destructuring way
const [first, second, third] = colors;
console.log(first);  // "red"
console.log(second); // "green"`}</pre>
              </div>

              <h3>Swapping Variables</h3>
              <div className="code-block">
                <pre>{`let x = 1, y = 2;

// Destructuring swap (no temp variable!)
[x, y] = [y, x];

console.log(x); // 2
console.log(y); // 1`}</pre>
              </div>

              <h3>Rest in Destructuring</h3>
              <div className="code-block">
                <pre>{`const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]`}</pre>
              </div>

              <h3>In Function Parameters</h3>
              <div className="code-block">
                <pre>{`// Without destructuring
function displayUser(user) {
  console.log(\`\${user.name}, Age: \${user.age}\`);
}

// With destructuring
function displayUser({ name, age }) {
  console.log(\`\${name}, Age: \${age}\`);
}

displayUser({ name: 'Alice', age: 25 });`}</pre>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runDestructuringExample}>
                  Run Destructuring Example
                </button>
              </div>
            </div>
          )}

          {/* SPREAD & REST */}
          {activeSection === 'spreadRest' && (
            <div className="section">
              <h2>Spread (...) and Rest (...) Operators</h2>
              <div className="definition">
                Both use the same <strong>...</strong> syntax but serve different purposes depending on context.
              </div>

              <h3>Spread Operator (...) - Expands Elements</h3>
              <p>Spreads an iterable into individual elements</p>

              <div className="code-block">
                <pre>{`// Copying arrays
const original = [1, 2, 3];
const copy = [...original];

// Combining arrays
const arr1 = [1, 2], arr2 = [3, 4];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Adding elements
const more = [0, ...arr1, 2.5]; // [0, 1, 2, 2.5]

// Function arguments
const numbers = [5, 12, 8, 130];
Math.max(...numbers); // 130`}</pre>
              </div>

              <h3>Spread with Objects</h3>
              <div className="code-block">
                <pre>{`// Copying objects
const original = { name: 'Alice', age: 25 };
const copy = { ...original };

// Merging objects
const person = { name: 'John', age: 30 };
const address = { city: 'NYC', country: 'USA' };
const complete = { ...person, ...address };

// Overriding properties
const defaults = { theme: 'light', lang: 'en' };
const userSettings = { lang: 'es' };
const final = { ...defaults, ...userSettings };
// { theme: 'light', lang: 'es' }`}</pre>
              </div>

              <h3>Rest Operator (...) - Collects Elements</h3>
              <p>Collects multiple elements into single array or object</p>

              <div className="code-block">
                <pre>{`// Array destructuring with rest
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]

// Object destructuring with rest
const { name, age, ...otherDetails } = person;
// Collect remaining properties into otherDetails

// Function parameters
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
sum(1, 2, 3);      // 6
sum(10, 20, 30, 40); // 100`}</pre>
              </div>

              <h3>Key Differences</h3>
              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>Spread (...)</th>
                      <th>Rest (...)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Direction</strong></td>
                      <td>Expands OUT</td>
                      <td>Collects IN</td>
                    </tr>
                    <tr>
                      <td><strong>Use Case</strong></td>
                      <td>Copy, merge, function args</td>
                      <td>Destructuring, params</td>
                    </tr>
                    <tr>
                      <td><strong>In Destructuring</strong></td>
                      <td>Right side</td>
                      <td>Left side</td>
                    </tr>
                    <tr>
                      <td><strong>Position</strong></td>
                      <td>Anywhere</td>
                      <td>Only at end</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runSpreadRestExample}>
                  Run Spread & Rest Example
                </button>
              </div>
            </div>
          )}

          {/* SHORTHAND */}
          {activeSection === 'shorthand' && (
            <div className="section">
              <h2>Object Shorthand & Computed Properties</h2>
              <div className="definition">
                ES6 introduces concise syntax for creating objects with shorthand properties and methods, plus dynamic property names.
              </div>

              <h3>Property Shorthand</h3>
              <p>When property name equals variable name, use shorthand</p>

              <div className="code-block">
                <pre>{`// Traditional ES5
const name = 'Alice';
const age = 25;
const person = {
  name: name,
  age: age
};

// ES6 Shorthand
const person = { name, age };
// Same result, cleaner code`}</pre>
              </div>

              <h3>Method Shorthand</h3>
              <div className="code-block">
                <pre>{`// Traditional ES5
const calculator = {
  add: function(a, b) { return a + b; },
  subtract: function(a, b) { return a - b; }
};

// ES6 Shorthand
const calculator = {
  add(a, b) { return a + b; },
  subtract(a, b) { return a - b; }
};`}</pre>
              </div>

              <h3>Computed Properties</h3>
              <p>Use expressions as dynamic property names</p>

              <div className="code-block">
                <pre>{`const prefix = 'user';
const suffix = 'Name';
const key = \`\${prefix}_\${suffix}\`; // "user_Name"

// Computed property
const obj = {
  [key]: 'Alice',
  [\`\${prefix}_Age\`]: 25
};

console.log(obj.user_Name);  // "Alice"
console.log(obj.user_Age);   // 25`}</pre>
              </div>

              <h3>Dynamic API Endpoints</h3>
              <div className="code-block">
                <pre>{`const actions = ['get', 'post', 'delete'];
const api = {};

// Create methods dynamically
actions.forEach(action => {
  api[\`\${action}Request\`] = () => {
    console.log(\`Making \${action.toUpperCase()} request\`);
  };
});

api.getRequest();    // "Making GET request"
api.postRequest();   // "Making POST request"
api.deleteRequest(); // "Making DELETE request"`}</pre>
              </div>

              <h3>Use Cases for Computed Properties</h3>
              <div className="benefits">
                <div className="benefit-card">
                  <h4>Dynamic Keys</h4>
                  <p>Property names determined at runtime</p>
                </div>
                <div className="benefit-card">
                  <h4>API Endpoints</h4>
                  <p>Generate methods for different HTTP actions</p>
                </div>
                <div className="benefit-card">
                  <h4>State Management</h4>
                  <p>Create object keys based on data</p>
                </div>
                <div className="benefit-card">
                  <h4>Configuration</h4>
                  <p>Build config objects with dynamic paths</p>
                </div>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runShorthandExample}>
                  Run Shorthand Example
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
