import { useState } from "react";

export function VariableVsStateDemo() {
  //  WRONG: Regular variable - React can't detect changes, UI won't update
  let counterVariable = 0;

  const handleVariableIncrement = () => {
    counterVariable++; // Value changes but UI doesn't update!
    console.log("Variable Value:", counterVariable);
  };

  const handleStateIncrement = () => {
    setCounterState(counterState + 1); // React detects this and updates UI
    console.log("State Value:", counterState);
  };
  // CORRECT: Using state - React detects changes and re-renders UI
  const [counterState, setCounterState] = useState(0);

  return (

    <div style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
    
      <h3>Variable vs State Example</h3>

      <div
        style={{
          marginBottom: "20px",
          padding: "15px",
          backgroundColor: "#ffcccc",
          borderRadius: "5px",
          border: "2px solid #ff6666",
        }}
      >
        <h4>Regular Variable (Won't Update UI)</h4>
        <div style={{ backgroundColor: "#ff9999", padding: "10px", borderRadius: "4px", marginBottom: "10px", border: "2px solid #ff3333" }}>
          <p style={{ margin: "0", fontSize: "14px", fontWeight: "bold", color: "#333" }}>
            React does NOT watch variable changes.
            <br />
            React Only Watch the Props, States and Context. 
            <br />
            Why React Not Watch Variable?
            <br />
            Variables can be changed anywhere. React cannot track where and when they changed. This makes UI updates unpredictable
          </p>
          <p style={{ margin: "5px 0 0 0", fontSize: "12px", color: "#333" }}>
            When you do: <code style={{ backgroundColor: "#fff", padding: "2px 4px" }}>counterVariable++</code>
            <br />
            React doesn't know anything changed. The UI won't update.
          </p>
        </div>
        <p>Counter Value: <strong>{counterVariable}</strong></p>
        <p style={{ fontSize: "12px", color: "#666" }}>
          Click the button but notice the counter doesn't change on screen, even though the console shows it's incrementing.
        </p>
        <button
          onClick={handleVariableIncrement}
          style={{
            padding: "8px 16px",
            backgroundColor: "#ff6666",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Increment Variable
        </button>
      </div>

      <div
        style={{
          padding: "15px",
          backgroundColor: "#ccffcc",
          borderRadius: "5px",
          border: "2px solid #66ff66",
        }}
      >
        <h4>Using useState (Updates UI)</h4>
        <p>Counter Value: <strong>{counterState}</strong></p>
        <p style={{ fontSize: "12px", color: "#666" }}>
          Click the button and the counter updates on screen because React is tracking the state.
        </p>
        <button
          onClick={handleStateIncrement}
          style={{
            padding: "8px 16px",
            backgroundColor: "#66ff66",
            color: "black",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Increment State
        </button>
      </div>



        <h5 style={{ marginTop: "25px", marginBottom: "15px", color: "#333", fontSize: "16px", fontWeight: "600" }}>Using useState:</h5>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ padding: "12px 15px", backgroundColor: "#e8e8e8", borderLeft: "4px solid #3498db", borderRadius: "4px" }}>
            <span style={{ color: "#27ae60", fontWeight: "bold" }}>React tracks changes:</span> Automatically detects state updates
          </div>
          <div style={{ padding: "12px 15px", backgroundColor: "#e8e8e8", borderLeft: "4px solid #3498db", borderRadius: "4px" }}>
            <span style={{ color: "#27ae60", fontWeight: "bold" }}>Auto re-render:</span> Component re-renders when state changes
          </div>
          <div style={{ padding: "12px 15px", backgroundColor: "#e8e8e8", borderLeft: "4px solid #3498db", borderRadius: "4px" }}>
            <span style={{ color: "#27ae60", fontWeight: "bold" }}>UI updates:</span> Display automatically shows new values
          </div>
          <div style={{ padding: "12px 15px", backgroundColor: "#e8e8e8", borderLeft: "4px solid #3498db", borderRadius: "4px" }}>
            <span style={{ color: "#27ae60", fontWeight: "bold" }}>State persists:</span> State remains across re-renders
          </div>
          <div style={{ padding: "12px 15px", backgroundColor: "#e8e8e8", borderLeft: "4px solid #3498db", borderRadius: "4px" }}>
            <span style={{ color: "#27ae60", fontWeight: "bold" }}>Works as prop:</span> Can pass to child components reliably
          </div>
        </div>
      </div>
  );
}
