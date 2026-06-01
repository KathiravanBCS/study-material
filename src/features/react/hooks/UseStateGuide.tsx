
import { DocumentationBox } from "../components/DocumentationBox";
import { UseStateDemo } from "../components/demos/UseStateDemo";
import { VariableVsStateDemo } from "../components/demos/VariableVsStateDemo";

export function UseStateGuide() {
  return (
    <>
      <DocumentationBox
        title="useState Hook"
        concept="The useState hook is a function that allows you to add state to a functional component. It is an alternative to the useReducer hook that is preferred when we require the basic update. useState Hooks are used to add the state variables in the components. For using the useState hook we have to import it in the component."
        syntax="const [state, setState] = useState(initialState)"
        hookSyntaxExplanation={[
          {
            label: "state",
            description: "It is the value of the current state.",
          },
          {
            label: "setState",
            description: "It is the function that is used to update the state.",
          },
          {
            label: "initialState",
            description: "It is the initial value of the state.",
          },
        ]}
        keyPoints={[
          {
            label: "Core Concept",
            description:
              "Adds state to functional components with [value, setter] pattern",
          },
          {
            label: "Re-render Trigger",
            description:
              "Calling the setter function triggers a component re-render",
          },
          {
            label: "Multiple States",
            description:
              "Call useState multiple times for different state variables",
          },
          {
            label: "Type Flexibility",
            description:
              "State can be any type: number, string, object, array, etc.",
          },
          {
            label: "Component Instance",
            description:
              "Each component instance maintains its own isolated state",
          },
          {
            label: "Asynchronous Updates",
            description:
              "State updates are asynchronous and batched for performance optimization",
          },
          {
            label: "Functional Updates",
            description:
              "Use setState(prevState => newState) when updating based on previous state",
          },
        ]}
        practicalExamples={[
          `import { useState } from "react";

function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <div>
        <h4>Counter State</h4>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h4>String State</h4>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <p>Hello, {name || "Guest"}!</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h4>Array State</h4>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add item"
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button onClick={addItem}>Add</button>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}`,
          "// Counter Example\nconst [count, setCount] = useState(0);\nsetCount(count + 1);",
          "// Form Input Example\nconst [email, setEmail] = useState('');\nsetEmail(e.target.value);",
          "// Object State Example\nconst [user, setUser] = useState({ name: '', age: 0 });\nsetUser({...user, name: 'John'});",
          "// Array State Example\nconst [items, setItems] = useState([]);\nsetItems([...items, newItem]);",
          "// Toggle Example\nconst [isOpen, setIsOpen] = useState(false);\nsetIsOpen(!isOpen);",
          "// Functional Update (for dependent state)\nsetCount(prevCount => prevCount + 1);",
          "// Lazy Initialization\nconst [state, setState] = useState(() => computeInitialValue());",
          `// Component Instance - Each has isolated state
          function Counter() {
          const [count, setCount] = useState(0);
          
          return (
          <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
          </div>
          );
          }

          // Usage - Each instance has its own count state
          export function App() {
          return (
          <>
          <Counter /> {/* count: 0 */}
          <Counter /> {/* count: 0 - isolated! */}
          <Counter /> {/* count: 0 - isolated! */}
          </>
          );
          }`,
          ]}
        additionalSections={[
          {
            title: "When to Use useState",
            content:
              "✓ Managing simple state (counters, toggles, form inputs) ✓ Handling independent state values ✓ Building interactive UI components ✓ Managing form state and user input ✗ Complex state with multiple interdependent values (use useReducer instead) ✗ State that requires complex logic and multiple actions",
          },
          {
            title: "useState vs useReducer",
            content:
              "useState: Better for simple state, single values, or few independent pieces. useReducer: Better for complex state, multiple related values, or complex state transitions. Consider useReducer when: you have related state variables, complex state shape, or multiple state updates that depend on each other.",
          },
        ]}
      />
      <div className="live-demo">
        <h2> Variable vs State - Why React Needs State</h2>
        <p style={{ marginBottom: "20px", color: "#333" }}>
          When you modify a regular variable, React doesn't know about the change, so the UI doesn't update. 
          That's why you need to use the <strong>useState</strong> hook to make React aware of your data changes.
        </p>
        <VariableVsStateDemo />
      </div>

      <div className="live-demo" style={{ marginTop: "40px" }}>
        <h2> Basic useState Examples</h2>
        <UseStateDemo />
      </div>
    </>
  );
}
