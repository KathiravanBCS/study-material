import {useReducer } from "react";

interface CounterState {
  count: number;
}

type CounterAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }
  | { type: "INCREMENT_BY"; payload: number };

const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  console.log("Reducer received old state:", state, "for action:", action.type);

  switch (action.type) {
    case "INCREMENT": {
      console.log("Before mutation:", state);
      // const nextState = { count: state.count + 1 };
      // console.log("Reducer returning new state:", nextState);
      // return nextState;
       ////WRONG: mutating existing state
      state= {count:state.count + 1} ;
      console.log("After mutation:", state);
      return state; // returning same object reference
    }
    case "DECREMENT": {
      const nextState = { count: state.count - 1 };
      console.log("Reducer returning new state:", nextState);
      return nextState;
    }
    case "RESET": {
      const nextState = { count: 0 };
      console.log("Reducer returning new state:", nextState);
      return nextState;
    }
    case "INCREMENT_BY": {
      const nextState = { count: state.count + action.payload };
      console.log("Reducer returning new state:", nextState);
      return nextState;
    }
    default:
      return state;
  }
};

export function UseReducerDemo() {
  const [counter, send] = useReducer(counterReducer, { count: 0 });

  const immutableStateExample = `//Correct: return a NEW state object (immutable)

                                   case "INCREMENT":
                                   return { count: state.count + 1 };

                                 // Never do this: mutating existing state

                                  case "INCREMENT":
                                  state.count = state.count + 1;
                                  return state;`;


  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}
    >
      <h4>useReducer Counter</h4>
      <p style={{ fontSize: "28px", fontWeight: "bold" }}>
        Count: {counter.count}
      </p>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button onClick={() => send({ type: "INCREMENT" })}>+1</button>
        <button onClick={() => send({ type: "DECREMENT" })}>-1</button>
        <button onClick={() => send({ type: "INCREMENT_BY", payload: 5 })}>
          +5
        </button>
        <button onClick={() => send({ type: "RESET" })}>Reset</button>
      </div>
      <p style={{ marginTop: "10px", fontSize: "12px", color: "#666" }}>
        Using reducer pattern for predictable state updates.
      </p>
      <div style={{ marginTop: "14px" }}>
        <p
          style={{
            marginBottom: "8px",
            fontSize: "13px",
            fontWeight: 600,
            color: "#333",
          }}
        >
          Important Concept: State is immutable
        </p>
        <pre
          style={{
            margin: 0,
            background: "#f7f7f7",
            border: "1px solid #e2e2e2",
            borderRadius: "6px",
            padding: "12px",
            overflowX: "auto",
            fontSize: "12px",
            lineHeight: 1.5,
          }}
        >
          {immutableStateExample}
        </pre>
      </div>
    </div>
  );
}
