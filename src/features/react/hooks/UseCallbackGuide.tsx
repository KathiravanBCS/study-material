import { DocumentationBox } from "../components/DocumentationBox";
import { UseCallbackDemo } from "../components/demos/UseCallbackDemo";

export function UseCallbackGuide() {
  return (
    <>
      <DocumentationBox
        title="useCallback Hook"
        concept="useCallback memoizes a function to prevent unnecessary re-renders of child components. It's useful when passing functions to optimized child components that are wrapped in React.memo or memo."
        syntax={`const memoizedCallback = useCallback(
  () => {
    // Your function logic
  },
  [dependencies]
);`}
        hookSyntaxExplanation={[
          {
            label: "callback function",
            description: "The function you want to memoize",
          },
          {
            label: "dependency array",
            description:
              "When any dependency changes, a new function is created",
          },
        ]}
        keyPoints={[
          {
            label: "Prevents Re-renders",
            description:
              "Stops child components from re-rendering when function reference doesn't change",
          },
          {
            label: "Works with React.memo or memo",
            description:
              "Most effective when used with React.memo or memo components",
          },
          {
            label: "Event Handlers",
            description:
              "Stable function reference for event handlers passed to children",
          },
          {
            label: "Dependencies Matter",
            description:
              "New function created when dependencies change, ensure they're listed",
          },
          {
            label: "Use Sparingly",
            description:
              "Only use when you have performance problems, not by default",
          },
        ]}
        codeExample={`import { useCallback, useState, memo } from "react";

export const WithUseCallbackApproach = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // Memoize the callback - only recreates when number changes
  const getItems = useCallback(() => {
    console.log("%c  getItems() called", "color: #22c55e");
    return [number + 1, number + 2, number + 3];
  }, [number]); // Only recreate when number changes

  const themeStyles = {
    backgroundColor: dark ? "#0f172a" : "#ffffff",
    color: dark ? "#f1f5f9" : "#0f172a",
  };

  return (
    <div style={{ ...themeStyles, minHeight: "100vh", padding: "40px" }}>
      <h2>WITH useCallback</h2>
      <p>Function memoized = child only re-renders when dependency changes</p>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
        placeholder="Enter a Number"
      />

      <button
        onClick={() => {
          console.log("%c theme toggled - List does NOT re-render!", "color: #22c55e");
          setDark((d) => !d);
        }}
      >
        Toggle Theme
      </button>

      {/* List is wrapped in memo to prevent unnecessary re-renders */}
      <List getItems={getItems} label="With useCallback" />

      <div style={{ backgroundColor: dark ? "#0f2818" : "#dcfce7", padding: "12px", marginTop: "16px" }}>
        <p>✓ getItems function reference stays the same when theme toggles</p>
        <p>✓ List only re-renders when number actually changes</p>
      </div>
    </div>
  );
};`}

        additionalSections={[
          {
            title: "When to Use useCallback",
            content:
              "✓ Passing callbacks to React.memo or memo components ✓ Callbacks used as dependencies in other hooks ✓ Event handlers for optimized child components ✓ Functions passed to custom hooks ✗ Simple callbacks in same component ✗ When performance isn't an issue",
          },
          {
            title: "Best Practices",
            content:
              "1. Combine with React.memo or memo on child components 2. Include all dependencies in dependency array 3. Don't use for every callback (measure first) 4. Use linting tools to catch missing dependencies 5. Remember to memoize the child component too 6. Profile performance before and after optimization",
          },
        ]}
      />
      <div className="live-demo">
        <UseCallbackDemo />
      </div>
    </>
  );
}
