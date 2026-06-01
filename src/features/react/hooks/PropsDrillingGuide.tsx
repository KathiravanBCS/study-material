import { useState } from "react";
import { DocumentationBox } from "../components/DocumentationBox";

// Demo Components
function GrandchildComponent({
  user,
  theme,
  onNameChange,
}: {
  user: { name: string; age: number };
  theme: "light" | "dark";
  onNameChange: (name: string) => void;
}) {
  return (
    <div
      style={{
        padding: "15px",
        margin: "10px 0",
        border: `2px solid ${theme === "light" ? "#333" : "#fff"}`,
        background: theme === "light" ? "#f0f0f0" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        borderRadius: "5px",
      }}
    >
      <h4>Grandchild Component (Deepest Level)</h4>
      <p>User: {user.name}</p>
      <p>Age: {user.age}</p>
      <input
        type="text"
        value={user.name}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Change name"
        style={{
          padding: "8px",
          marginTop: "10px",
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#000" : "#fff",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}

function ChildComponent({
  user,
  theme,
  onNameChange,
}: {
  user: { name: string; age: number };
  theme: "light" | "dark";
  onNameChange: (name: string) => void;
}) {
  return (
    <div
      style={{
        padding: "15px",
        margin: "10px 0",
        border: `2px dashed ${theme === "light" ? "#666" : "#aaa"}`,
        background: theme === "light" ? "#fafafa" : "#1a1a1a",
        color: theme === "light" ? "#000" : "#fff",
        borderRadius: "5px",
      }}
    >
      <h4>Child Component (Middle Level)</h4>
      <p>Theme: {theme}</p>
      <p>Passing props down to grandchild...</p>
      <GrandchildComponent
        user={user}
        theme={theme}
        onNameChange={onNameChange}
      />
    </div>
  );
}

export function ParentComponent() {
  const [user, setUser] = useState({ name: "John Doe", age: 25 });
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const handleNameChange = (name: string) => {
    setUser({ ...user, name });
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "3px solid #007bff",
        borderRadius: "8px",
        background: theme === "light" ? "#fff" : "#0a0a0a",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h3>Parent Component (Top Level - Data Source)</h3>
      <p>This component holds the state and passes props down</p>

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          padding: "10px 15px",
          marginBottom: "15px",
          background: theme === "light" ? "#007bff" : "#0056b3",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Toggle Theme: {theme}
      </button>

      <ChildComponent user={user} theme={theme} onNameChange={handleNameChange} />
    </div>
  );
}

export function PropsDrillingGuide() {
  return (
    <>
      <DocumentationBox
        title="Props & Props Drilling in React"
        concept="Props (properties) are a way to pass data from a parent component to a child component. Props drilling occurs when you need to pass data through multiple intermediate components to reach the component that needs it. This is a common pattern in React but can become cumbersome in deeply nested component trees, leading to alternatives like Context API or state management libraries."
        syntax="<ChildComponent prop1={value1} prop2={value2} />"
        hookSyntaxExplanation={[
          {
            label: "props",
            description:
              "Objects that contain data passed from parent to child components",
          },
          {
            label: "prop drilling",
            description:
              "Passing props through multiple layers of components to reach deeply nested child components",
          },
          {
            label: "destructuring",
            description:
              "Extracting specific props from the props object for cleaner code",
          },
          {
            label: "prop validation",
            description:
              "Using TypeScript or PropTypes to ensure correct prop types and values",
          },
        ]}
        keyPoints={[
          {
            label: "One-Way Data Flow",
            description:
              "Props flow only from parent to child, never from child to parent",
          },
          {
            label: "Immutable Props",
            description:
              "Props are read-only and cannot be modified by child components",
          },
          {
            label: "Props Drilling Problem",
            description:
              "Passing props through many intermediate components creates maintenance issues and reduces code clarity",
          }
        ]}
        practicalExamples={[

          `// Destructuring Props
function UserCard({ name, age, email }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
}

// Usage
<UserCard name="John" age={25} email="john@example.com" />`,


          `// Props Drilling Example (Problem)
function App() {
  const [user, setUser] = useState({ name: "John" });
  return <Level1 user={user} />;
}

function Level1({ user }) {
  return <Level2 user={user} />;
}

function Level2({ user }) {
  return <Level3 user={user} />;
}

function Level3({ user }) {
  return <p>User: {user.name}</p>;
}`,
        ]}
        additionalSections={[
          {
            title: "Props vs State",
            content:
              "Props: Data passed from parent → child, read-only, causes child to re-render when changed. State: Data owned by component, mutable via setState, triggers re-render when updated. Use Props for data flowing down, State for data that changes within a component.",
          },
    
        ]}
      />

    </>
  );
}
