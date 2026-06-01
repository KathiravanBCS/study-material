import { useState } from "react";
import "../styles/Lifecycle.css";
import SyntaxHighlightedCode from "../components/SyntaxHighlightedCode";
import { LifeCycleDemo } from "../components/demos/useLifeCycleDemo";
import lifecycleImage from "./assets/ReactComponentLifeCycle.png";
import useEffectImage from "./assets/UseEffectWithoutDependancy.png";

interface LifecyclePhase {
  name: string;
  hook: string;
  description: string;
  code: string;
  useCase: string;
}

const lifecyclePhases: LifecyclePhase[] = [
  {
    name: "Mounting Phase",
    hook: "useState & useEffect with empty dependency array",
    description:
      "During the mounting phase, a functional component is being created and added to the DOM. In this phase, you typically initialize state and perform any setup needed when the component is first rendered.",
    code: `// Initialize state
const [count, setCount] = useState(0);

// Run once when component mounts
useEffect(() => {
  console.log("Component mounted!");
  // Perform setup, fetch data, etc.
}, []);`,
    useCase:
      "Data fetching, initializing state, setting up subscriptions, DOM setup",
  },
  {
    name: "Updating Phase",
    hook: "useEffect with dependency array",
    description:
      "In the updating phase, the functional component is re-rendered due to changes in its props or state. You can use useEffect with a dependency array to run code when specific values change.",
    code: `// Run when dependencies change
useEffect(() => {
  console.log("State or prop updated!");
  // Handle updates
}, [state, props]);

// Run on every render (no dependency array)
useEffect(() => {
  console.log("Component updated!");
});`,
    useCase:
      "Responding to prop/state changes, updating DOM, recalculating values",
  },
  {
    name: "Unmounting Phase",
    hook: "useEffect cleanup function",
    description:
      "In the unmounting phase, the functional component is being removed from the DOM. The cleanup function in useEffect simulates the componentWillUnmount behavior.",
    code: `useEffect(() => {
  // Setup
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  // Cleanup function - runs when component unmounts
  return () => {
    clearInterval(timer);
    console.log("Component unmounted!");
  };
}, []);`,
    useCase:
      "Cleanup timers, remove event listeners, cancel API requests, reset state",
  },
];

export default function ComponentLifecycle() {
  const [activePhase, setActivePhase] = useState<number>(0);

  return (
    <div className="lifecycle-container">
      <div className="lifecycle-header">
        <h1>React Functional Component Lifecycle</h1>
        <p>
          Understanding the three phases of React component lifecycle with hooks
        </p>
      </div>

      <div className="lifecycle-content">
        {/* Overview Section */}
        <section className="lifecycle-overview">
          <h2>Lifecycle Overview</h2>
          <p>
            The React component lifecycle refers to the series of phases that a
            React component goes through, from its creation and rendering to
            updates and eventual removal from the DOM. Functional components use
            hooks to manage lifecycle behavior.
          </p>

          <div className="phases-grid">
            <div className="phase-card">
              <h3>1. Mounting</h3>
              <p>Component is created and added to DOM</p>
              <code>useState, useEffect([], ...)</code>
            </div>
            <div className="phase-card">
              <h3>2. Updating</h3>
              <p>Component re-renders due to state/prop changes</p>
              <code>useEffect([deps], ...)</code>
            </div>
            <div className="phase-card">
              <h3>3. Unmounting</h3>
              <p>Component is removed from DOM</p>
              <code>useEffect cleanup function</code>
            </div>
          </div>

          <div className="lifecycle-image-section">
            <img 
              src={lifecycleImage} 
              alt="React Component Lifecycle Diagram"
              style={{ width: "60%", height: "auto" }}
            />
          </div>
            <div className="useeffect-image-section">
            <h2>useEffect Behavior</h2>
            <img 
              src={useEffectImage} 
              alt="useEffect Without Dependency Array"
              style={{ width: "70%", height: "auto" }}
            />
          </div>
          </section>

        {/* Phase Navigation */}
        <section className="lifecycle-phases">
          <div className="phase-buttons">
            {lifecyclePhases.map((phase, idx) => (
              <button
                key={idx}
                className={`phase-button ${activePhase === idx ? "active" : ""}`}
                onClick={() => setActivePhase(idx)}
              >
                {phase.name}
              </button>
            ))}
          </div>

          {/* Phase Details */}
          <div className="phase-detail">
            <div className="detail-header">
              <h2>{lifecyclePhases[activePhase].name}</h2>
              <span className="hook-label">
                {lifecyclePhases[activePhase].hook}
              </span>
            </div>

            <div className="detail-content">
              <div className="description-section">
                <h3>Description</h3>
                <p>{lifecyclePhases[activePhase].description}</p>
              </div>

              <div className="code-section">
                <h3>Code Example</h3>
                <SyntaxHighlightedCode
                  code={lifecyclePhases[activePhase].code}
                  language="javascript"
                  theme="light"
                />
              </div>

              <div className="usecase-section">
                <h3>Use Cases</h3>
                <p>{lifecyclePhases[activePhase].useCase}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices Section */}
        <section className="lifecycle-practices">
          <h2>Best Practices</h2>

          <div className="practice-cards">
            <div className="practice-card">
              <h3>✓ Always use the appropriate hook</h3>
              <p>Match the hook to the lifecycle phase to keep code clean</p>
            </div>
            <div className="practice-card">
              <h3>✓ Handle dependencies correctly</h3>
              <p>
                Use dependency arrays to control when effects run. Include all
                dependencies.
              </p>
            </div>
            <div className="practice-card">
              <h3>✓ Cleanup when needed</h3>
              <p>
                Always return cleanup functions for timers, subscriptions, and
                event listeners
              </p>
            </div>
            <div className="practice-card">
              <h3>✓ Keep effects focused</h3>
              <p>
                Each useEffect should handle one concern. Split multiple effects
                if needed.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="lifecycle-comparison">
          <h2>Class vs Functional Components Lifecycle</h2>
          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Class Component</th>
                  <th>Functional Component (Hooks)</th>
                  <th>Phase</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>constructor()</td>
                  <td>useState()</td>
                  <td>Mounting</td>
                </tr>
                <tr>
                  <td>componentDidMount()</td>
                  <td>useEffect([], ...)</td>
                  <td>Mounting</td>
                </tr>
                <tr>
                  <td>componentDidUpdate()</td>
                  <td>useEffect([deps], ...)</td>
                  <td>Updating</td>
                </tr>
                <tr>
                  <td>componentWillUnmount()</td>
                  <td>useEffect cleanup</td>
                  <td>Unmounting</td>
                </tr>
                <tr>
                  <td>render()</td>
                  <td>Function return</td>
                  <td>All phases</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <LifeCycleDemo />

        {/* useEffect Visualization */}
        <section className="lifecycle-useeffect">
          <h2>useEffect Behavior</h2>

        </section>

        {/* Common Patterns */}
         <section className="lifecycle-patterns">
           <h2>Common Lifecycle Patterns</h2>

          <div className="pattern-box">
            <h3>Pattern 1: Data Fetching on Mount</h3>
            <SyntaxHighlightedCode
              code={`useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('/api/data');
    const data = await response.json();
    setData(data);
  };
  
  fetchData();
}, []); // Runs once on mount`}
              language="javascript"
              theme="light"
            />
          </div>

          <div className="pattern-box">
            <h3>Pattern 2: Event Listener with Cleanup</h3>
            <SyntaxHighlightedCode
              code={`useEffect(() => {
  const handleResize = () => {
    console.log('Window resized');
  };
  
  window.addEventListener('resize', handleResize);
  
  // Cleanup: remove listener on unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);`}
              language="javascript"
              theme="light"
            />
          </div>

          <div className="pattern-box">
            <h3>Pattern 3: Watch Specific Values</h3>
            <SyntaxHighlightedCode
              code={`const [count, setCount] = useState(0);

useEffect(() => {
  console.log('Count changed:', count);
  // This runs whenever 'count' changes
}, [count]);`}
              language="javascript"
              theme="light"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
