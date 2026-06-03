import { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ReactBasics.css';

type Section =
  | 'intro'
  | 'history'
  | 'components'
  | 'spa'
  | 'dom'
  | 'setup'
  | 'structure'
  | 'importexport'
  | 'expressions'
  | 'styles';

export default function ReactBasics() {
  // The active topic is driven by the sidebar route (/react/basics/:section)
  const { section } = useParams<{ section: string }>();
  const activeSection = (section as Section) || 'intro';
  const [output, setOutput] = useState<string>('Select a topic and click "Run Example" to see output');

  // INTRODUCTION
  const runIntroExample = () => {
    const logs: string[] = [];
    logs.push('=== WHAT IS REACT? ===\n');
    logs.push('React is a JavaScript LIBRARY for building user interfaces.');
    logs.push('Created and maintained by Meta (Facebook).\n');
    logs.push('Core ideas:');
    logs.push('1. Component-based  - Build UI from small, reusable pieces');
    logs.push('2. Declarative      - Describe WHAT the UI should look like');
    logs.push('3. Virtual DOM      - Efficiently update only what changed');
    logs.push('4. Unidirectional   - Data flows down via props\n');
    logs.push('You describe the UI for a given state, and React keeps');
    logs.push('the screen in sync whenever that state changes.');
    setOutput(logs.join('\n'));
  };

  // HISTORY
  const runHistoryExample = () => {
    const logs: string[] = [];
    logs.push('=== REACT TIMELINE ===\n');
    logs.push('2011  Prototype "FaxJS" used internally at Facebook');
    logs.push('2013  React open-sourced at JSConf US');
    logs.push('2015  React Native released (mobile apps)');
    logs.push('2016  React 15 - improved DOM rendering');
    logs.push('2017  React 16 (Fiber) - new core, error boundaries');
    logs.push('2019  React 16.8 - HOOKS introduced');
    logs.push('2020  React 17 - gradual upgrades');
    logs.push('2022  React 18 - concurrent rendering, automatic batching');
    setOutput(logs.join('\n'));
  };

  // COMPONENT TYPES
  const runComponentsExample = () => {
    const logs: string[] = [];
    logs.push('=== FUNCTION COMPONENT (modern) ===\n');
    logs.push('function Welcome(props) {');
    logs.push('  return <h1>Hello, {props.name}</h1>;');
    logs.push('}');
    logs.push('Result for name="Kathir": Hello, Kathir\n');
    logs.push('=== CLASS COMPONENT (legacy) ===\n');
    logs.push('class Welcome extends React.Component {');
    logs.push('  render() { return <h1>Hello, {this.props.name}</h1>; }');
    logs.push('}\n');
    logs.push('Today function components + hooks are the standard.');
    setOutput(logs.join('\n'));
  };

  // SPA
  const runSpaExample = () => {
    const logs: string[] = [];
    logs.push('=== SINGLE PAGE APPLICATION (SPA) ===\n');
    logs.push('Traditional Multi-Page App (MPA):');
    logs.push('  Click link -> request new HTML -> full page reload\n');
    logs.push('Single Page App (SPA):');
    logs.push('  Load one HTML shell once');
    logs.push('  JavaScript swaps the view on navigation');
    logs.push('  No full reload -> faster, app-like feel\n');
    logs.push('React + a router (React Router) updates the URL and');
    logs.push('renders the matching component without reloading.');
    setOutput(logs.join('\n'));
  };

  // DOM vs Virtual DOM
  const runDomExample = () => {
    const logs: string[] = [];
    logs.push('=== REAL DOM vs VIRTUAL DOM ===\n');
    logs.push('Real DOM:');
    logs.push('  - Updating is slow when done repeatedly');
    logs.push('  - Re-renders large parts of the tree\n');
    logs.push('Virtual DOM:');
    logs.push('  - A lightweight JS copy of the UI');
    logs.push('  - On state change React builds a new virtual tree');
    logs.push('  - "Diffing" compares new vs old tree');
    logs.push('  - Only the changed nodes are patched to the real DOM\n');
    logs.push('Result: fewer, smaller DOM operations = better performance.');
    setOutput(logs.join('\n'));
  };

  // SETUP
  const runSetupExample = () => {
    const logs: string[] = [];
    logs.push('=== CREATE A REACT APP WITH VITE ===\n');
    logs.push('1. npm create vite@latest my-app -- --template react');
    logs.push('2. cd my-app');
    logs.push('3. npm install');
    logs.push('4. npm run dev\n');
    logs.push('Requirements: Node.js (LTS) and npm installed.');
    logs.push('Dev server runs at http://localhost:5173');
    setOutput(logs.join('\n'));
  };

  // FOLDER STRUCTURE
  const runStructureExample = () => {
    const logs: string[] = [];
    logs.push('=== TYPICAL VITE + REACT STRUCTURE ===\n');
    logs.push('my-app/');
    logs.push('├── node_modules/   installed packages');
    logs.push('├── public/         static assets served as-is');
    logs.push('├── src/');
    logs.push('│   ├── assets/      images, fonts');
    logs.push('│   ├── components/  reusable UI pieces');
    logs.push('│   ├── App.jsx      root component');
    logs.push('│   └── main.jsx     entry: renders <App/>');
    logs.push('├── index.html      single HTML shell');
    logs.push('├── package.json    scripts & dependencies');
    logs.push('└── vite.config.js  build/dev configuration');
    setOutput(logs.join('\n'));
  };

  // IMPORT / EXPORT
  const runImportExportExample = () => {
    const logs: string[] = [];
    logs.push('=== DEFAULT EXPORT ===\n');
    logs.push('// Button.jsx');
    logs.push('export default function Button() { ... }');
    logs.push('// App.jsx');
    logs.push("import Button from './Button';  // any name\n");
    logs.push('=== NAMED EXPORT ===\n');
    logs.push('// utils.js');
    logs.push('export const add = (a, b) => a + b;');
    logs.push('export const sub = (a, b) => a - b;');
    logs.push('// App.jsx');
    logs.push("import { add, sub } from './utils'; // exact names\n");
    logs.push('Rule: ONE default export per file, MANY named exports.');
    setOutput(logs.join('\n'));
  };

  // EXPRESSIONS
  const runExpressionsExample = () => {
    const logs: string[] = [];
    const name = 'Kathir';
    const age = 20;
    const items = ['React', 'Vite', 'JSX'];

    logs.push('=== JSX EXPRESSIONS ( { } ) ===\n');
    logs.push('Inside JSX, { } embeds any JavaScript expression.\n');
    logs.push(`<h1>Hello {name}</h1>            -> Hello ${name}`);
    logs.push(`<p>Next year: {age + 1}</p>      -> Next year: ${age + 1}`);
    logs.push(`{age >= 18 ? "Adult" : "Minor"}  -> ${age >= 18 ? 'Adult' : 'Minor'}`);
    logs.push('');
    logs.push('Render a list with .map():');
    items.forEach((it, i) => logs.push(`  <li key={${i}}>${it}</li>`));
    logs.push('');
    logs.push('NOTE: only expressions work inside { } - not statements');
    logs.push('(no if / for / switch directly inside JSX).');
    setOutput(logs.join('\n'));
  };

  // STYLES
  const runStylesExample = () => {
    const logs: string[] = [];
    logs.push('=== WAYS TO STYLE IN REACT ===\n');
    logs.push('1. Inline style (object, camelCase keys):');
    logs.push("   <h1 style={{ color: 'blue', fontSize: '20px' }}>Hi</h1>\n");
    logs.push('2. External CSS file:');
    logs.push("   import './App.css';");
    logs.push('   <h1 className="title">Hi</h1>\n');
    logs.push('3. CSS Modules (scoped automatically):');
    logs.push("   import styles from './App.module.css';");
    logs.push('   <h1 className={styles.title}>Hi</h1>\n');
    logs.push('4. CSS-in-JS / UI libraries (styled-components, Mantine).\n');
    logs.push('Remember: use className (not class) and style takes an OBJECT.');
    setOutput(logs.join('\n'));
  };

  return (
    <div className="react-basics-container">
      <div className="header">
        <h1>React Basics - Getting Started</h1>
        <p>Core React concepts every developer should know before building apps</p>
      </div>

      <div className="container">
        <div className="content">
          {/* INTRODUCTION */}
          {activeSection === 'intro' && (
            <div className="section">
              <h2>Introduction to React</h2>
              <div className="definition">
                <strong>React</strong> is an open-source JavaScript library for building
                fast, interactive user interfaces out of reusable <strong>components</strong>.
              </div>

              <h3>Why React?</h3>
              <div className="benefits">
                <div className="benefit-card">
                  <h4>🧩 Component-Based</h4>
                  <p>Build encapsulated pieces of UI and compose them into complex screens.</p>
                </div>
                <div className="benefit-card">
                  <h4>📝 Declarative</h4>
                  <p>Describe what the UI should look like; React updates the DOM for you.</p>
                </div>
                <div className="benefit-card">
                  <h4>⚡ Virtual DOM</h4>
                  <p>Efficiently re-renders only the parts of the page that actually changed.</p>
                </div>
                <div className="benefit-card">
                  <h4>🌐 Huge Ecosystem</h4>
                  <p>Routing, state management, and tooling backed by a massive community.</p>
                </div>
              </div>

              <h3>Your First Component</h3>
              <div className="code-block">
                <pre>{`function App() {
  return <h1>Hello, React!</h1>;
}

export default App;`}</pre>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runIntroExample}>
                  Run Introduction Example
                </button>
              </div>
            </div>
          )}

          {/* HISTORY */}
          {activeSection === 'history' && (
            <div className="section">
              <h2>History of React</h2>
              <div className="definition">
                React was created by <strong>Jordan Walke</strong> at Facebook and first
                released to the public in <strong>2013</strong>. It changed how developers
                build UIs by popularizing the component model and the virtual DOM.
              </div>

              <h3>Key Milestones</h3>
              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Milestone</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>2011</td><td>Early prototype ("FaxJS") used inside Facebook</td></tr>
                    <tr><td>2013</td><td>React open-sourced at JSConf US</td></tr>
                    <tr><td>2015</td><td>React Native released for mobile apps</td></tr>
                    <tr><td>2017</td><td>React 16 ("Fiber") rewrite of the core</td></tr>
                    <tr><td>2019</td><td>React 16.8 introduced Hooks</td></tr>
                    <tr><td>2022</td><td>React 18 added concurrent rendering</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runHistoryExample}>
                  Run History Timeline
                </button>
              </div>
            </div>
          )}

          {/* COMPONENT TYPES */}
          {activeSection === 'components' && (
            <div className="section">
              <h2>Component Types</h2>
              <div className="definition">
                A <strong>component</strong> is a reusable, self-contained piece of UI.
                React has two kinds: <strong>function components</strong> (modern) and
                <strong> class components</strong> (legacy).
              </div>

              <h3>1. Function Component (Recommended)</h3>
              <div className="code-block">
                <pre>{`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Usage
<Welcome name="Kathir" />`}</pre>
              </div>
              <p>Simple JavaScript functions that return JSX. Use <strong>hooks</strong> for state and lifecycle.</p>

              <h3>2. Class Component (Older Code)</h3>
              <div className="code-block">
                <pre>{`class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`}</pre>
              </div>

              <h3>Function vs Class</h3>
              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>Function</th>
                      <th>Class</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Syntax</strong></td><td>Short, plain function</td><td>Verbose, ES6 class</td></tr>
                    <tr><td><strong>State</strong></td><td>useState hook</td><td>this.state</td></tr>
                    <tr><td><strong>Lifecycle</strong></td><td>useEffect hook</td><td>Lifecycle methods</td></tr>
                    <tr><td><strong>Today</strong></td><td>Standard ✓</td><td>Legacy</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runComponentsExample}>
                  Run Components Example
                </button>
              </div>
            </div>
          )}

          {/* SPA */}
          {activeSection === 'spa' && (
            <div className="section">
              <h2>Single Page Application (SPA)</h2>
              <div className="definition">
                A <strong>Single Page Application</strong> loads a single HTML page once,
                then updates the content dynamically with JavaScript as the user navigates —
                without full page reloads.
              </div>

              <h3>MPA vs SPA</h3>
              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>Multi-Page App</th>
                      <th>Single Page App</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Navigation</strong></td><td>Server returns new HTML</td><td>JS swaps the view</td></tr>
                    <tr><td><strong>Page reload</strong></td><td>Full reload each click</td><td>No reload</td></tr>
                    <tr><td><strong>Speed</strong></td><td>Slower transitions</td><td>Fast, app-like</td></tr>
                    <tr><td><strong>Example</strong></td><td>Traditional websites</td><td>Gmail, this app</td></tr>
                  </tbody>
                </table>
              </div>

              <h3>How React Does It</h3>
              <p>React renders components into one root element, and a router (like <strong>React Router</strong>) changes which component is shown based on the URL — all on the client.</p>

              <div className="button-container">
                <button className="run-button" onClick={runSpaExample}>
                  Run SPA Example
                </button>
              </div>
            </div>
          )}

          {/* DOM vs VIRTUAL DOM */}
          {activeSection === 'dom' && (
            <div className="section">
              <h2>Normal DOM vs Virtual DOM</h2>
              <div className="definition">
                The <strong>DOM</strong> (Document Object Model) is the browser's tree of
                HTML elements. The <strong>Virtual DOM</strong> is a lightweight JavaScript
                copy React uses to figure out the smallest set of real DOM updates.
              </div>

              <h3>How the Virtual DOM Works</h3>
              <ul>
                <li>State changes &rarr; React builds a <strong>new</strong> virtual DOM tree.</li>
                <li>React <strong>diffs</strong> it against the previous virtual tree.</li>
                <li>Only the <strong>changed nodes</strong> are updated in the real DOM (reconciliation).</li>
              </ul>

              <h3>Comparison</h3>
              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>Real DOM</th>
                      <th>Virtual DOM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Update cost</strong></td><td>Expensive</td><td>Cheap (in memory)</td></tr>
                    <tr><td><strong>Updates</strong></td><td>Can re-render a lot</td><td>Only what changed</td></tr>
                    <tr><td><strong>Managed by</strong></td><td>Browser</td><td>React</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runDomExample}>
                  Run DOM Comparison
                </button>
              </div>
            </div>
          )}

          {/* SETUP */}
          {activeSection === 'setup' && (
            <div className="section">
              <h2>React Environment Setup</h2>
              <div className="definition">
                The fastest way to start a modern React project is with <strong>Vite</strong>,
                a lightning-fast build tool and dev server.
              </div>

              <h3>Prerequisites</h3>
              <ul>
                <li><strong>Node.js</strong> (LTS version) — includes npm</li>
                <li>A code editor such as <strong>VS Code</strong></li>
              </ul>

              <h3>Create the App</h3>
              <div className="code-block">
                <pre>{`# 1. Scaffold a new project
npm create vite@latest my-app -- --template react

# 2. Move into the folder
cd my-app

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev`}</pre>
              </div>
              <p>Open the printed URL (usually <strong>http://localhost:5173</strong>) in your browser.</p>

              <div className="button-container">
                <button className="run-button" onClick={runSetupExample}>
                  Run Setup Steps
                </button>
              </div>
            </div>
          )}

          {/* FOLDER STRUCTURE */}
          {activeSection === 'structure' && (
            <div className="section">
              <h2>React Folder Structure</h2>
              <div className="definition">
                A Vite + React project follows a simple, predictable layout. Knowing what
                each file does helps you find your way around quickly.
              </div>

              <h3>Default Layout</h3>
              <div className="code-block">
                <pre>{`my-app/
├── node_modules/      # installed packages
├── public/            # static files served as-is
├── src/
│   ├── assets/        # images, fonts
│   ├── components/    # reusable UI components
│   ├── App.jsx        # root component
│   ├── App.css        # styles for App
│   ├── main.jsx       # entry point - renders <App/>
│   └── index.css      # global styles
├── index.html         # the single HTML shell
├── package.json       # scripts & dependencies
└── vite.config.js     # build / dev configuration`}</pre>
              </div>

              <h3>Important Files</h3>
              <ul>
                <li><strong>index.html</strong> — contains the root <code>&lt;div id="root"&gt;</code>.</li>
                <li><strong>main.jsx</strong> — mounts the React app into that root div.</li>
                <li><strong>App.jsx</strong> — your top-level component.</li>
                <li><strong>package.json</strong> — lists dependencies and npm scripts.</li>
              </ul>

              <div className="button-container">
                <button className="run-button" onClick={runStructureExample}>
                  Run Structure Overview
                </button>
              </div>
            </div>
          )}

          {/* IMPORT / EXPORT */}
          {activeSection === 'importexport' && (
            <div className="section">
              <h2>Import &amp; Export</h2>
              <div className="definition">
                React apps split code across many files (modules). <strong>export</strong>
                makes something available to other files; <strong>import</strong> brings it in.
              </div>

              <h3>Default Export</h3>
              <div className="code-block">
                <pre>{`// Button.jsx
export default function Button() {
  return <button>Click me</button>;
}

// App.jsx - import with ANY name
import Button from './Button';`}</pre>
              </div>
              <p>Only <strong>one</strong> default export per file.</p>

              <h3>Named Export</h3>
              <div className="code-block">
                <pre>{`// utils.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;

// App.jsx - import using EXACT names in { }
import { add, sub } from './utils';`}</pre>
              </div>
              <p>You can have <strong>many</strong> named exports per file.</p>

              <h3>Default vs Named</h3>
              <div className="comparison-table-wrapper">
                <table className="comparison-table">
                  <thead>
                    <tr>
                      <th>Aspect</th>
                      <th>Default</th>
                      <th>Named</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>Per file</strong></td><td>One</td><td>Many</td></tr>
                    <tr><td><strong>Import name</strong></td><td>Any name</td><td>Must match (or alias)</td></tr>
                    <tr><td><strong>Syntax</strong></td><td>import X from '...'</td><td>{`import { X } from '...'`}</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runImportExportExample}>
                  Run Import / Export Example
                </button>
              </div>
            </div>
          )}

          {/* EXPRESSIONS */}
          {activeSection === 'expressions' && (
            <div className="section">
              <h2>Expressions in JSX</h2>
              <div className="definition">
                Inside JSX you can embed any JavaScript <strong>expression</strong> by
                wrapping it in curly braces <strong>{'{ }'}</strong>.
              </div>

              <h3>Embedding Values</h3>
              <div className="code-block">
                <pre>{`const name = "Kathir";
const age = 20;

return (
  <div>
    <h1>Hello {name}</h1>
    <p>Next year you will be {age + 1}</p>
    <p>{age >= 18 ? "Adult" : "Minor"}</p>
  </div>
);`}</pre>
              </div>

              <h3>Rendering Lists</h3>
              <div className="code-block">
                <pre>{`const items = ["React", "Vite", "JSX"];

return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);`}</pre>
              </div>

              <h3>What You CANNOT Put in { }</h3>
              <ul>
                <li>Statements like <strong>if</strong>, <strong>for</strong>, <strong>switch</strong> (use a ternary or <code>.map()</code> instead).</li>
                <li>Variable declarations.</li>
              </ul>

              <div className="button-container">
                <button className="run-button" onClick={runExpressionsExample}>
                  Run Expressions Example
                </button>
              </div>
            </div>
          )}

          {/* STYLES */}
          {activeSection === 'styles' && (
            <div className="section">
              <h2>Styles in React</h2>
              <div className="definition">
                React gives you several ways to style components. Two key rules:
                use <strong>className</strong> (not <code>class</code>), and inline
                <strong> style</strong> takes a JavaScript <strong>object</strong>.
              </div>

              <h3>1. Inline Styles</h3>
              <div className="code-block">
                <pre>{`<h1 style={{ color: 'blue', fontSize: '24px' }}>
  Hello
</h1>`}</pre>
              </div>
              <p>Keys are <strong>camelCase</strong> (<code>fontSize</code>, not <code>font-size</code>).</p>

              <h3>2. External CSS File</h3>
              <div className="code-block">
                <pre>{`/* App.css */
.title { color: blue; }

// App.jsx
import './App.css';
<h1 className="title">Hello</h1>`}</pre>
              </div>

              <h3>3. CSS Modules (Scoped)</h3>
              <div className="code-block">
                <pre>{`/* App.module.css */
.title { color: blue; }

// App.jsx
import styles from './App.module.css';
<h1 className={styles.title}>Hello</h1>`}</pre>
              </div>

              <h3>Ways to Style — Summary</h3>
              <div className="benefits">
                <div className="benefit-card">
                  <h4>Inline</h4>
                  <p>Quick, dynamic styles via a style object.</p>
                </div>
                <div className="benefit-card">
                  <h4>CSS File</h4>
                  <p>Familiar global stylesheets with className.</p>
                </div>
                <div className="benefit-card">
                  <h4>CSS Modules</h4>
                  <p>Locally scoped classes — no name clashes.</p>
                </div>
                <div className="benefit-card">
                  <h4>UI Libraries</h4>
                  <p>styled-components, Tailwind, Mantine, etc.</p>
                </div>
              </div>

              <div className="button-container">
                <button className="run-button" onClick={runStylesExample}>
                  Run Styles Example
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
