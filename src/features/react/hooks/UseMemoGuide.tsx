import { DocumentationBox } from "../components/DocumentationBox";
import { UseEffectApproach } from "../components/demos/UseMemoDemo";

export function UseMemoGuide() {
  return (
    <>
      <DocumentationBox
        title="useMemo Hook"
        concept="useMemo memoizes expensive computations and returns a memoized value. It prevents recalculating values on every render when inputs haven't changed. Use it to optimize performance by skipping expensive recalculations."
        syntax={`const memoizedValue = useMemo(
  () => expensiveComputation(a, b),
  [a, b]
);`}
        hookSyntaxExplanation={[
          {
            label: "computation function",
            description: "Function that performs the expensive computation",
          },
          {
            label: "dependency array",
            description:
              "Computation only runs when dependencies change",
          },
        ]}
        keyPoints={[
          {
            label: "Performance Optimization",
            description:
              "Skip expensive recalculations when inputs haven't changed",
          },
          {
            label: "Reference Stability",
            description:
              "Same object/array reference when dependencies don't change",
          },
          {
            label: "Dependency Tracking",
            description:
              "Recomputes only when specified dependencies change",
          },
          {
            label: "Memory Trade-off",
            description:
              "Uses memory to store cached values; worth it for expensive computations",
          },
          {
            label: "Use Wisely",
            description:
              "Only optimize genuinely expensive operations; premature optimization is wasteful",
          },
        ]}
        codeExample={`import React, { useState, useMemo, useEffect } from "react";

export const UseMemoDemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("Theme changed");
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        transition: "all 0.3s ease",
        ...themeStyles,
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h1 style={{ textAlign: "center", marginBottom: "40px", fontSize: "32px" }}>
          useMemo Demo
        </h1>

        <div
          style={{
            backgroundColor: dark ? "#333" : "#f5f5f5",
            padding: "30px",
            borderRadius: "12px",
            marginBottom: "30px",
            border: \`2px solid \${dark ? "#555" : "#ddd"}\`,
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "14px", opacity: 0.7, marginBottom: "15px" }}>
            Doubled Result
          </p>
          <p
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              margin: "0",
              color: dark ? "#4ade80" : "#2563eb",
            }}
          >
            {doubleNumber}
          </p>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Enter a Number:
          </label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
            style={{
              width: "100%",
              padding: "12px",
              fontSize: "16px",
              border: \`2px solid \${dark ? "#555" : "#ddd"}\`,
              borderRadius: "8px",
              backgroundColor: dark ? "#222" : "#fff",
              color: dark ? "#fff" : "#000",
              boxSizing: "border-box",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = dark ? "#4ade80" : "#2563eb";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = dark ? "#555" : "#ddd";
            }}
          />
          <p style={{ fontSize: "12px", opacity: 0.6, marginTop: "8px" }}>
            This will double the number via the slow function
          </p>
        </div>

        <div style={{ marginBottom: "30px" }}>
          <button
            onClick={() => setDark((curr) => !curr)}
            style={{
              width: "100%",
              padding: "14px",
              fontSize: "16px",
              fontWeight: "600",
              border: "none",
              borderRadius: "8px",
              backgroundColor: dark ? "#4ade80" : "#2563eb",
              color: dark ? "#000" : "#fff",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = \`0 6px 20px \${
                dark ? "rgba(74, 222, 128, 0.3)" : "rgba(37, 99, 235, 0.3)"
              }\`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <div
          style={{
            backgroundColor: dark ? "#222" : "#fffbeb",
            padding: "20px",
            borderRadius: "8px",
            border: \`1px solid \${dark ? "#333" : "#fcd34d"}\`,
            fontSize: "13px",
            lineHeight: "1.6",
            opacity: 0.85,
          }}
        >
          <p style={{ margin: "0 0 10px 0" }}>
            <strong>✓ With useMemo:</strong> Slow function runs only when number changes
          </p>
          <p style={{ margin: "0" }}>
            <strong>✓ Theme memoized:</strong> New objects prevent unnecessary re-renders
          </p>
        </div>
      </div>
    </div>
  );
};

function slowFunction(num: number) {
  console.log("Running slow function...");
  for (let i = 0; i < 10000000000; i++) {}
  return num * 2;
}`}
        practicalExamples={[
          `// Memoize expensive computation (slow function)
const doubleNumber = useMemo(() => {
  return slowFunction(number);
}, [number]);

function slowFunction(num: number) {
  for (let i = 0; i < 1_000_000_000; i++) {}
  return num * 2;
}`,
          `// Memoize styles object to maintain reference
const themeStyles = useMemo(() => {
  return {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
}, [dark]);`,
          `// Memoize filtered data
const filtered = useMemo(
  () => data.filter(item => item.status === 'active'),
  [data]
);`,
          `// Memoize computed calculations
const statistics = useMemo(() => {
  return {
    sum: items.reduce((a, b) => a + b, 0),
    average: items.reduce((a, b) => a + b, 0) / items.length,
    max: Math.max(...items)
  };
}, [items]);`,
        ]}
        additionalSections={[
          {
            title: "When to Use useMemo",
            content:
              "✓ Expensive computations (filtering, sorting, aggregation) ✓ Creating new objects/arrays that need stable reference ✓ Dependencies for memoized child components ✗ Simple operations (don't optimize prematurely) ✗ Small data sets where computation is trivial",
          },
        ]}
      />
      <div className="live-demo">
        {/* <UseMemoApproach /> */}
        <UseEffectApproach />
      </div>
    </>
  );
}
