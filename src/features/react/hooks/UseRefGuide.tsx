import { DocumentationBox } from "../components/DocumentationBox";
import { UseRefDemo } from "../components/demos/UseRefDemo";

export function UseRefGuide() {
  return (
    <>
      <DocumentationBox
        title="useRef Hook"
        concept="useRef is a React hook that returns a mutable object with a .current property, which persists across renders without causing re-renders when updated. It is used to store mutable values and access DOM elements directly."
        syntax={`const ref = useRef(initialValue);`}
        hookSyntaxExplanation={[
          {
            label: "initialValue",
            description:
              "The initial value stored in ref.current. This value persists across renders",
          },
          {
            label: "ref.current",
            description:
              "A mutable property that holds the current value or DOM element",
          },
        ]}
        keyPoints={[
          {
            label: "No Re-render",
            description:
              "Updating ref.current does NOT trigger a re-render",
          },
          {
            label: "DOM Access",
            description:
              "Commonly used to directly access DOM elements like inputs",
          },
          {
            label: "Persistent Values",
            description:
              "Stores values between renders without resetting",
          },
          {
            label: "Avoid for UI",
            description:
              "Do not use refs to manage UI that should be reactive",
          },
        ]}
        codeExample={`import { useRef, useState } from "react";

export const UseRefExample = () => {
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  const [value, setValue] = useState("");

  renderCount.current += 1;

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef Example</h2>

      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />

      <button onClick={focusInput}>
        Focus Input
      </button>

      <p>Typed Value: {value}</p>
      <p>Render Count: {renderCount.current}</p>
    </div>
  );
};`}
        additionalSections={[
          {
            title: "Common useRef Use Cases",
            content:
              "✓ Focusing inputs  ✓ Tracking render counts ✓ Storing timers or intervals ✓ Avoiding unnecessary re-renders",
          },
          {
            title: "useRef vs useState",
            content:
              "useState triggers UI updates when data changes. useRef does not cause re-renders and is best for non-UI or DOM-related data.",
          },
        ]}
      />

      <div className="live-demo">
        <UseRefDemo />
      </div>
    </>
  );
}
