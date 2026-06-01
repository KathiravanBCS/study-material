import { DocumentationBox } from "../components/DocumentationBox";
import { UseReducerDemo } from "../components/demos/UseReducerDemo";

export function UseReducerGuide() {
  return (
    <>
      <DocumentationBox
        title="useReducer Hook"
        concept="useReducer manages complex state with multiple actions. It's similar to Redux , Zustand  but built into React. Perfect for state that involves multiple related values or complex transitions."
        syntax={`const [state, dispatch] = useReducer(reducer, initialState);`}
        hookSyntaxExplanation={[
          {
            label: "reducer function",
            description:
              "Function that takes current state and action, returns new state",
          },
          {
            label: "initialState",
            description: "The initial value of the state object",
          },
          {
            label: "dispatch",
            description:
              "Function to trigger state updates by dispatching actions",
          },
        ]}
        keyPoints={[
          {
            label: "Complex State",
            description:
              "Better than useState when state has multiple interdependent values",
          },
          {
            label: "Predictable Updates",
            description:
              "All state changes go through a reducer function, making logic centralized",
          },
          {
            label: "Action Objects",
            description:
              "Actions describe what happened, reducer decides how to update state",
          },
          {
            label: "Debugging",
            description:
              "Easier to debug and trace state changes compared to useState",
          },
        ]}
        codeExample={`import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}`}
    
        additionalSections={[
          {
            title: "When to Use useReducer",
            content:
              "✓ Complex state with multiple related values ✓ State that depends on previous state ✓ Multiple actions that update state ✓ Form state with many fields ✗ Simple state values (use useState) ✗ Single independent state variables",
          },
        ]}
      />
      <div className="live-demo">
        <UseReducerDemo />
      </div>
    </>
  );
}
