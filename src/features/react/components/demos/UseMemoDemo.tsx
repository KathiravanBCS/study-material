import { useState, useMemo, useEffect } from "react";

// ─── Slow function ────────────────────────────────────────────────────────────
function slowFunction(num: number) {
  console.log("%c slowFunction called", "color: green");
  // for (let i = 0; i < 10000000000; i++) {}  // uncomment for real delay
  return num * 2;
}

// ─── Approach 1: useMemo ──────────────────────────────────────────────────────
export const UseMemoApproach = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  console.log("%c===== RENDER START =====", "color: blue; font-weight: bold");

  // without useMemo, this would run on every render, causing lag when toggling theme.
  // const doubleNumberwithoutmemo = slowFunction(number);

  // useMemo #1: Caches the result of the slow function.
  // // Re-runs ONLY when `number` changes, not on every render.
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  console.log(`%c doubleNumber = ${doubleNumber}`, "color: blue");
  console.log("%c ===== RENDER END =====", "color: blue; font-weight: bold");


    //without usememo, this object would be recreated on every render, causing any dependent useEffects or memoized components to re-run unnecessarily.
  // const themeStyles = {
  //     backgroundColor: dark ? "#0f172a" : "#ffffff",
  //     color: dark ? "#f1f5f9" : "#0f172a",
  //   };

  // useMemo #2: Caches the styles object reference.
  // Re-runs ONLY when `dark` changes.
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "#0f172a" : "#ffffff",
      color: dark ? "#f1f5f9" : "#0f172a",
    };
  }, [dark]);

  useEffect(() => {

  console.log(`%c Theme Changed`, "color: black");
  }, [themeStyles]);

  return (
    <div
      style={{
        ...themeStyles,
        minHeight: "100vh",
        padding: "40px 24px",
        fontFamily: "sans-serif",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <div style={{ maxWidth: 520, margin: "0 auto" }}>
        {/* Title */}
        <h1
          style={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          useMemo Demo
        </h1>

        {/* Result Card */}
        <div
          style={{
            backgroundColor: dark ? "#1e293b" : "#f3f4f6",
            borderRadius: 16,
            padding: "28px 24px",
            textAlign: "center",
            marginBottom: 28,
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: dark ? "#94a3b8" : "#9ca3af",
              marginBottom: 12,
              marginTop: 0,
            }}
          >
            Doubled Result
          </p>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#3b82f6",
              lineHeight: 1,
            }}
          >
            {doubleNumber}
          </div>
        </div>

        {/* Number Input */}
        <label
          style={{
            display: "block",
            fontWeight: 700,
            fontSize: 15,
            marginBottom: 8,
          }}
        >
          Enter a Number:
        </label>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            console.log("%c number changed by user", "color: orange");
            setNumber(parseInt(e.target.value) || 0);
          }}
          style={{
            width: "100%",
            padding: "13px 16px",
            fontSize: 16,
            border: `1px solid ${dark ? "#334155" : "#d1d5db"}`,
            borderRadius: 10,
            outline: "none",
            boxSizing: "border-box",
            backgroundColor: dark ? "#1e293b" : "#ffffff",
            color: dark ? "#f1f5f9" : "#0f172a",
            marginBottom: 6,
          }}
        />
        <p
          style={{
            fontSize: 13,
            color: dark ? "#64748b" : "#9ca3af",
            marginTop: 0,
            marginBottom: 20,
          }}
        >
          This will double the number via the slow function
        </p>

        {/* Dark Mode Button */}
        <button
          onClick={() => {
            console.log("%c theme toggled by user", "color: orange");
            setDark((d) => !d);
          }}
          style={{
            width: "100%",
            padding: "15px",
            fontSize: 16,
            fontWeight: 600,
            background: dark ? "#22c55e" : "#3b82f6",
            color: dark ? "#0f172a" : "#ffffff",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
            marginBottom: 24,
            transition: "background 0.2s",
          }}
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Info Box */}
        <div
          style={{
            backgroundColor: dark ? "#1c1a0e" : "#fefce8",
            border: `1px solid ${dark ? "#422006" : "#fde047"}`,
            borderRadius: 10,
            padding: "16px 20px",
          }}
        >
          <p
            style={{
              fontSize: 14,
              color: dark ? "#ca8a04" : "#713f12",
              margin: "0 0 8px 0",
              lineHeight: 1.5,
            }}
          >
            ✓ <strong>With useMemo:</strong> Slow function runs only when number changes
          </p>
          <p
            style={{
              fontSize: 14,
              color: dark ? "#ca8a04" : "#713f12",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            ✓ <strong>Theme memoized:</strong> New objects prevent unnecessary re-renders
          </p>
        </div>
      </div>
    </div>
  );
};

// ─── Approach 2: useEffect ────────────────────────────────────────────────────
export const UseEffectApproach = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const [doubleNumber, setDoubleNumber] = useState(0); // <-- extra state

  console.log(
    `%c ===== RENDER START ===== doubleNumber currently = ${doubleNumber}`,
    "color: red; font-weight: bold"
  );

  useEffect(() => {
    console.log(
      "%c useEffect fired AFTER render (paint already happened!)",
      "color: coral; font-weight: bold"
    );
    const result = slowFunction(number);
    console.log(
      `%c calling setDoubleNumber(${result}) → this triggers ANOTHER render!`,
      "color: coral"
    );
    setDoubleNumber(result);
  }, [number]);

  console.log(`%c===== RENDER END =====`, "color: red; font-weight: bold");

  const themeStyles = {
    backgroundColor: dark ? "#0f172a" : "#ffffff",
    color: dark ? "#f1f5f9" : "#0f172a",
  };

  return (
    <div
      style={{
        ...themeStyles,
        minHeight: "100vh",
        padding: "40px 24px",
        fontFamily: "sans-serif",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <div style={{ maxWidth: 520, margin: "0 auto" }}>
        {/* Title */}
        <h1
          style={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          useEffect Approach
        </h1>

        {/* Result Card */}
        <div
          style={{
            backgroundColor: dark ? "#1e293b" : "#f3f4f6",
            borderRadius: 16,
            padding: "28px 24px",
            textAlign: "center",
            marginBottom: 28,
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: dark ? "#94a3b8" : "#9ca3af",
              marginBottom: 12,
              marginTop: 0,
            }}
          >
            Doubled Result
          </p>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "#ef4444",
              lineHeight: 1,
            }}
          >
            {doubleNumber}
          </div>
        </div>

        {/* Number Input */}
        <label
          style={{
            display: "block",
            fontWeight: 700,
            fontSize: 15,
            marginBottom: 8,
          }}
        >
          Enter a Number:
        </label>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            console.log("%c number changed by user", "color: orange");
            setNumber(parseInt(e.target.value) || 0);
          }}
          style={{
            width: "100%",
            padding: "13px 16px",
            fontSize: 16,
            border: `1px solid ${dark ? "#334155" : "#d1d5db"}`,
            borderRadius: 10,
            outline: "none",
            boxSizing: "border-box",
            backgroundColor: dark ? "#1e293b" : "#ffffff",
            color: dark ? "#f1f5f9" : "#0f172a",
            marginBottom: 6,
          }}
        />
        <p
          style={{
            fontSize: 13,
            color: dark ? "#64748b" : "#9ca3af",
            marginTop: 0,
            marginBottom: 20,
          }}
        >
          This will double the number via the slow function
        </p>

        {/* Dark Mode Button */}
        <button
          onClick={() => {
            console.log("%c theme toggled by user", "color: orange");
            setDark((d) => !d);
          }}
          style={{
            width: "100%",
            padding: "15px",
            fontSize: 16,
            fontWeight: 600,
            background: dark ? "#22c55e" : "#3b82f6",
            color: dark ? "#0f172a" : "#ffffff",
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
            marginBottom: 24,
            transition: "background 0.2s",
          }}
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>

        {/* Warning Box */}
        <div
          style={{
            backgroundColor: dark ? "#1c0a0a" : "#fef2f2",
            border: `1px solid ${dark ? "#7f1d1d" : "#fca5a5"}`,
            borderRadius: 10,
            padding: "16px 20px",
          }}
        >
          <p
            style={{
              fontSize: 14,
              color: dark ? "#f87171" : "#991b1b",
              margin: "0 0 8px 0",
              lineHeight: 1.5,
            }}
          >
            ✗ <strong>Without useMemo:</strong> Slow function runs on EVERY render
          </p>
          <p
            style={{
              fontSize: 14,
              color: dark ? "#f87171" : "#991b1b",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            ✗ <strong>Extra state + useEffect:</strong> Causes a double render cycle
          </p>
        </div>
      </div>
    </div>
  );
};