import { DocumentationBox } from "../components/DocumentationBox";
import { UseEffectDemo } from "../components/demos/UseEffectDemo";
import { SideEffectsDemo } from "../components/demos/SideEffectsDemo";

export function UseEffectGuide() {
  return (
    <>
      <DocumentationBox
        title="useEffect Hook"
        concept="Definition: useEffect is a React Hook used for handling side effects in functional components. UseEffect Hook accepts two argument the first is a function contain your logic and the second is a dependency array that determines when to re-run the effect (props and states). The effect function can optionally return a cleanup function, which is executed before the effect re-runs or when the component unmounts."
        syntax={`useEffect(() => {
  // Code to run on each render
  return () => {
    // Cleanup function (optional)
  };
}, [dependencies]);`}
        hookSyntaxExplanation={[
          {
            label: "Effect function",
            description: "This is where your side effect code runs.",
          },
          {
            label: "Cleanup function",
            description:
              "Optional return function cleans up side effects like  timers when the component unmounts.",
          },
          {
            label: "Dependencies array",
            description:
              "React re-runs the effect if any of the values in this array change.",
          },
        ]}
        usage={[
          {
            label: "Code to run after every re-render",
            description: "When no dependency array is provided, the effect runs after each render.",
          },
          {
            label: "On Mount Only",
            description: "When an empty dependency array [] is provided, the effect runs only once when the component mounts.",
          },
          {
            label: "Dependency-based Execution",
            description: "When a dependency array with values is provided, the effect runs only when those dependencies change.",
          },
          {
            label: "Cleanup on Unmount",
            description: "The cleanup function is executed when the component unmounts or before the effect re-runs, allowing you to clean up resources like timers, and event listeners to prevent memory leaks.",
          },
        ]}
        keyPoints={[
          {
            label: "useEffect does NOT run during render",
            description:
              "It runs after the UI is already shown to the user. Rendering should be fast and side effects should not block the UI.",
          },
          {
            label: " 1 - Component function runs",
            description:
              "React executes the component function first.",
          },
          {
            label: " 2 - JSX  or TSX returned",
            description:
              "The component returns the JSX OR Tsx to be rendered.",
          },
          {
            label: " 3 - DOM updated",
            description:
              "React updates the actual DOM with the new JSX.",
          },
          {
            label: " 4 - Screen painted (user sees UI)",
            description:
              "The browser paints the UI to the screen - user now sees the interface.",
          },
          {
            label: " 5 - useEffect runs",
            description:
              "Only after the UI is visible to the user, useEffect executes with any side effects.",
          },
          {
            label: "Real-Life Analogy",
            description:
              "1 - Render = Cooking food, 2 - DOM update = Serving food, 3 - useEffect = Cleaning dishes after eating. Cleaning happens after serving, not while cooking.",
          },
          {
            label: "Why React Designed Like This?",
            description:
              "Because rendering should be fast and side effects (API calls, timers, etc.) should not block the UI from displaying to the user.",
          },
          {
            label: "Example with API Call",
            description:
              "UI shows 'Loading...' immediately to the user. Then the API call runs in useEffect asynchronously without blocking the initial render.",
          },
        ]}
        codeExample={`import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []); // Empty dependency = run once on mount

  return <p>Seconds: {seconds}</p>;
}`}
      />
      <div className="live-demo">
        <UseEffectDemo />
      </div>

      <DocumentationBox
        title="Side Effects Handled by useEffect"
        concept="useEffect handles anything that reaches outside React's rendering — like the browser, a server, or a timer. These are called side effects because they happen outside the normal component render flow."
        keyPoints={[
          {
            label: "Fetching Data from an API",
            description:
              "Making network requests to load data when a component mounts or when dependencies change.",
          },
          {
            label: "Setting Up Event Listeners or Timers",
            description:
              "Attaching event listeners to DOM elements or Timers to external data sources.",
          },
          {
            label: "DOM Manipulation",
            description:
              "Directly manipulating the DOM when needed — for example, updating the document title.",
          },
          {
            label: "Cleaning Up Resources",
            description:
              "Cleaning up when a component unmounts, such as clearing timers or intervals, canceling network requests, or removing event listeners.",
          },
          {
            label: "Setting Up Timers or Intervals",
            description:
              "Running repeated tasks on a schedule.",
          },
        ]}
        practicalExamples={[
            "// Fetch and display user data\nuseEffect(() => {\n  fetch('https://jsonplaceholder.typicode.com/users')\n    .then(res => res.json())\n    .then(users => setData(users));\n}, [refetchTrigger]);",
          "// Track window resizing\nuseEffect(() => {\n  const handleResize = () => setWindowWidth(window.innerWidth);\n  window.addEventListener('resize', handleResize);\n  return () => window.removeEventListener('resize', handleResize);\n}, []);",
          "// Update browser title dynamically\nuseEffect(() => {\n  document.title = `App - Count: ${count}`;\n  return () => { document.title = 'App'; };\n}, [count]);",
          "// Auto-increment counter with interval\nuseEffect(() => {\n  const interval = setInterval(() => {\n    setCount(prev => prev + 1);\n  }, 1000);\n  return () => clearInterval(interval);\n}, []);",]}
      />

   

      <div className="live-demo">
        <SideEffectsDemo />
      </div>
    </>
  );
}
