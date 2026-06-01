import { useState, useEffect } from "react";

export function UseEffectDemo() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}
    >
      <h4>Timer with useEffect</h4>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        {seconds.toString().padStart(2, "0")} seconds
      </p>
      <div>
        <button
          onClick={() => setIsRunning(!isRunning)}
          style={{ marginRight: "10px" }}
        >
          {isRunning ? "⏸ Pause" : "▶ Start"}
        </button>
        <button onClick={() => setSeconds(0)}>Reset</button>
      </div>
      <p style={{ marginTop: "10px", fontSize: "12px", color: "#666" }}>
        Effect runs when isRunning changes. Cleanup function clears interval.
      </p>
    </div>
  );
}
