import { useState } from "react";

/**
 * LifeCycleDemo Component
 *
 * This component demonstrates React's useEffect hook lifecycle patterns:
 * - Mount/Unmount with cleanup
 * - Re-render tracking
 * - Dependency array variations
 * - Proper setInterval cleanup to prevent memory leaks
 */
export const LifeCycleDemo = () => {
  const [activePhase, setActivePhase] = useState<"mounting" | "updating" | "unmounting">("mounting");
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  // Increment counter
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  // Decrement counter
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  // Increment timer
  const incrementTime = () => {
    setTime((prev) => prev + 1);
  };

  // Reset all values
  const resetAll = () => {
    setCount(0);
    setTime(0);
    setLogs([]);
    setIsRunning(false);
  };

  /**
   * Effect: Runs on EVERY render (no dependency array)
   *  Performance Warning: Can cause infinite loops and performance issues
   */
  // useEffect(() => {
  //   addLog(" Effect: Runs on every render (no dependency)");
  // });

  /**
   * Effect: Runs ONLY on initial mount (empty dependency array)
   * Use case: API calls, initializations, subscriptions
   */
//   useEffect(() => {
//     addLog(" Effect: Component Mounted Successfully");
//   }, []);

  /**
   * Effect: Runs on initial mount + when 'count' changes
   * Dependency array: [count] - tracks count state changes
   */
  // useEffect(() => {
  //   addLog(` Effect: Count changed to ${count}`);
  //   return () => {
  //     addLog(` Cleanup: Count was ${count}`);
  //   };
  // }, [count]);

  /**
   * Effect: Runs on initial mount + when 'time' changes
   * Dependency array: [time] - tracks time state changes
   */
//   useEffect(() => {
//     addLog(`Effect: Time changed to ${time}s`);
//     // return () => {
//     //   addLog(` Cleanup: Time was ${time}s`);
//     // };
//   }, [time]);

  /**
   * Effect: Demonstrates setInterval cleanup (GOOD - with cleanup)
   * BEST PRACTICE: Always cleanup intervals to prevent memory leaks
   */
  // useEffect(() => {
  //   if (!isRunning) return;

  //   const random = Math.floor(Math.random() * 1000);
  //   const interval = setInterval(() => {
  //     addLog(` Timer ${random} - Interval running`);
  //   }, 2000);

  //   // // Cleanup function: Clears interval when component unmounts or effect re-runs
  //   return () => {
  //     clearInterval(interval);
  //     addLog(` Cleanup: Cleared interval ${random}`);
  //   };
  // }, [isRunning]);

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", marginTop: "20px" }}>
      <h3 style={{ margin: "0 0 20px 0", color: "#333" }}>React useEffect Lifecycle Demo</h3>

      {/* Phase Navigation */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
        {(["mounting", "updating", "unmounting"] as const).map((phase) => (
          <button
            key={phase}
            onClick={() => {
              setActivePhase(phase);
              setLogs([]);
            }}
            style={{
              padding: "10px 16px",
              backgroundColor: activePhase === phase ? "#007bff" : "#f0f0f0",
              color: activePhase === phase ? "white" : "black",
              border: "1px solid #ddd",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: activePhase === phase ? "bold" : "normal",
              transition: "none",
              animation: "none",
              textTransform: "capitalize",
            }}
          >
            {phase} Phase
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div
        style={{
          minHeight: "200px",
          padding: "15px",
          backgroundColor: "#f9f9f9",
          borderRadius: "4px",
          marginBottom: "20px",
        }}
      >
        {activePhase === "mounting" && (
          <div>
            <h4 style={{ margin: "0 0 10px 0", color: "#333" }}> Mounting Phase</h4>
            <p style={{ margin: "0 0 15px 0", fontSize: "12px", color: "#666" }}>
              Component is created and added to DOM. This is where you initialize state and setup subscriptions.
            </p>

            <div style={{ backgroundColor: "#e8f4f8", padding: "10px", borderRadius: "4px", marginBottom: "15px" }}>
              <p style={{ margin: "0", fontSize: "12px", color: "#555" }}>
                <strong>useEffect Hook Pattern:</strong>
              </p>
              <code style={{ fontSize: "11px", color: "#666" }}>
                useEffect(() =&gt; &#123; /* runs once */ &#125;, [])
              </code>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <p style={{ margin: "0 0 8px 0", fontSize: "12px", fontWeight: "bold", color: "#333" }}>Use Cases:</p>
              <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "12px", color: "#666" }}>
                <li>Data fetching from APIs</li>
                <li>Initializing state</li>
                <li>Setting up subscriptions</li>
                <li>DOM setup and initialization</li>
              </ul>
            </div>
          </div>
        )}

        {activePhase === "updating" && (
          <div>
            <h4 style={{ margin: "0 0 10px 0", color: "#333" }}>🔄 Updating Phase</h4>
            <p style={{ margin: "0 0 15px 0", fontSize: "12px", color: "#666" }}>
              Component re-renders due to state or prop changes. Use dependency arrays to control when effects run.
            </p>

            <div style={{ backgroundColor: "#e8f4f8", padding: "10px", borderRadius: "4px", marginBottom: "15px" }}>
              <p style={{ margin: "0", fontSize: "12px", color: "#555" }}>
                <strong>Current Counter State:</strong>
              </p>
              <p
                style={{
                  margin: "8px 0 0 0",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#007bff",
                }}
              >
                {count}
              </p>
            </div>

            <div style={{ display: "flex", gap: "8px", marginBottom: "15px" }}>
              <button
                onClick={decrement}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#ff6b6b",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "none",
                  animation: "none",
                }}
              >
                − Decrease
              </button>
              <button
                onClick={increment}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "none",
                  animation: "none",
                }}
              >
                + Increase
              </button>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <p style={{ margin: "0 0 8px 0", fontSize: "12px", fontWeight: "bold", color: "#333" }}>
                Dependency Array Patterns:
              </p>
              <ul style={{ margin: "0", paddingLeft: "20px", fontSize: "12px", color: "#666" }}>
                <li>No dependencies → runs on every render</li>
                <li>Empty array [] → runs only on mount</li>
                <li>[value] → runs when value changes</li>
              </ul>
            </div>
          </div>
        )}

        {activePhase === "unmounting" && (
          <div>
            <h4 style={{ margin: "0 0 10px 0", color: "#333" }}> Unmounting Phase</h4>
            <p style={{ margin: "0 0 15px 0", fontSize: "12px", color: "#666" }}>
              Component is being removed from DOM. Use cleanup functions to prevent memory leaks and cancel pending
              operations.
            </p>

            <div style={{ backgroundColor: "#fff3cd", padding: "10px", borderRadius: "4px", marginBottom: "15px" }}>
              <p style={{ margin: "0", fontSize: "12px", color: "#856404" }}>
                <strong> Important:</strong> Always cleanup timers, event listeners, and subscriptions!
              </p>
            </div>

            <div style={{ display: "flex", gap: "8px", marginBottom: "15px" }}>
              <button
                onClick={() => setIsRunning(!isRunning)}
                style={{
                  padding: "8px 16px",
                  backgroundColor: isRunning ? "#ff6b6b" : "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "none",
                  animation: "none",
                }}
              >
                {isRunning ? "Stop" : "Start"} Timer
              </button>
              <button
                onClick={resetAll}
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#6c757d",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "none",
                  animation: "none",
                }}
              >
                Reset All
              </button>
            </div>

            <div style={{ marginBottom: "10px" }}>
              <p style={{ margin: "0 0 8px 0", fontSize: "12px", fontWeight: "bold", color: "#333" }}>
                Cleanup Function Pattern:
              </p>
              <div
                style={{
                  backgroundColor: "#f0f0f0",
                  padding: "8px",
                  borderRadius: "4px",
                  fontSize: "11px",
                  color: "#666",
                }}
              >
                <code>
                  useEffect(() =&gt; &#123; <br />
                  &nbsp;&nbsp;// setup <br />
                  &nbsp;&nbsp;return () =&gt; &#123; /* cleanup */ &#125;; <br />
                  &#125;, []);
                </code>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "20px" }}>
        <div
          style={{
            backgroundColor: "#e8f4f8",
            padding: "12px",
            borderRadius: "4px",
            textAlign: "center",
            border: "1px solid #b3d9e8",
          }}
        >
          <p style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#666" }}>Count Value</p>
          <p style={{ margin: "0", fontSize: "24px", fontWeight: "bold", color: "#007bff" }}>{count}</p>
        </div>
        <div
          style={{
            backgroundColor: "#e8f8e8",
            padding: "12px",
            borderRadius: "4px",
            textAlign: "center",
            border: "1px solid #b3e8b3",
          }}
        >
          <p style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#666" }}>Time Value</p>
          <p style={{ margin: "0", fontSize: "24px", fontWeight: "bold", color: "#28a745" }}>{time}s</p>
        </div>
      </div>

      {/* Time Controls */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={incrementTime}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4ecdc4",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "none",
            animation: "none",
          }}
        >
          ⏱ Add Time
        </button>
      </div>

      {/* Logs Section */}
      <div>
        <h4 style={{ margin: "0 0 10px 0", color: "#333" }}>Effect Execution Logs</h4>
        <div
          style={{
            backgroundColor: "#1e1e1e",
            color: "#0f0",
            padding: "10px",
            borderRadius: "4px",
            fontFamily: "monospace",
            fontSize: "11px",
            maxHeight: "150px",
            overflowY: "auto",
            minHeight: "50px",
          }}
        >
          {logs.length === 0 ? (
            <p style={{ color: "#666", margin: "0" }}>Waiting for effects...</p>
          ) : (
            logs.map((log, idx) => (
              <div key={idx} style={{ marginBottom: "4px" }}>
                {log}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
