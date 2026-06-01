import React from "react";
import { useRef, useState } from "react";

export function UseRefDemo() {
  // ── Approach 1: useState section ──
  const [stateValue, setStateValue] = useState<string>("");
  const [stateRenderCount, setStateRenderCount] = useState<number>(0);

  // ── Approach 2: useRef section ──
  const refInputRef = useRef<HTMLInputElement>(null);
  const refValue = useRef<string>("");
  const refRenderCount = useRef(0);
  const [refDisplayTrigger, setRefDisplayTrigger] = useState(0);
  const [refRerenderCount, setRefRerenderCount] = useState(0);

  // ── Approach 3: DOM Focus ──
  const focusInputRef = useRef<HTMLInputElement>(null);

  // ── useState handler ──
  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setStateValue(val);
    setStateRenderCount(stateValue.length + 1); // +1 because stateValue is still the old value at this point
    console.log(`%c[useState] Render #${stateValue.length + 1} - Value: "${val}"`, "color: #ef4444; font-weight: bold");
  };

  // ── useRef handler — NO re-render ──
  const handleRefChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    refValue.current = val;
    refRenderCount.current += 1;
    console.log(`%c[useRef] Keystroke #${refRenderCount.current} - ref.current: "${val}" (NO re-render)`, "color: #22c55e; font-weight: bold");
  };

  // ── Focus handler ──
  const handleFocus = () => {
    focusInputRef.current?.focus();
    console.log("%c[useRef] inputRef.current.focus() called - DOM focused imperatively", "color: #3b82f6; font-weight: bold");
  };

  // ── useRef re-render counter ──
  // This will increment refRerenderCount every time the component re-renders (for the useRef section)
  React.useEffect(() => {
    setRefRerenderCount((prev) => prev + 1);
  }, [refDisplayTrigger]);


  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#0f172a",
        minHeight: "100vh",
        padding: "40px 24px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Title */}
        <h1
          style={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          useState vs useRef Demo
        </h1>

        {/* Two Column Layout: useState (Left) and useRef (Right) */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 24 }}>
          {/* LEFT: useState */}
          <div
            style={{
              backgroundColor: "#fee2e2",
              border: "1px solid #fecaca",
              borderRadius: 12,
              padding: "20px",
            }}
          >
            <h3 style={{ margin: "0 0 12px 0", fontSize: 16, fontWeight: 700, color: "#b91c1c" }}>
              useState — Triggers Re-render
            </h3>
            <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 12px 0" }}>
              Each keystroke calls setState(), causing a re-render
            </p>

            <input
              type="text"
              value={stateValue}
              onChange={handleStateChange}
              placeholder="Type here — watch re-renders..."
              style={{
                width: "100%",
                padding: "12px 14px",
                fontSize: 14,
                border: "1px solid #d1d5db",
                borderRadius: 8,
                outline: "none",
                boxSizing: "border-box",
                backgroundColor: "#ffffff",
                color: "#0f172a",
                marginBottom: 12,
              }}
            />

            <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <div
                style={{
                  flex: 1,
                  backgroundColor: "#f3f4f6",
                  borderRadius: 8,
                  padding: "12px",
                  textAlign: "center",
                  border: "1px solid #d1d5db",
                }}
              >
                <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>Re-renders</p>
                <p style={{ margin: "4px 0 0 0", fontSize: 24, fontWeight: 700, color: "#ef4444" }}>
                  {stateRenderCount}
                </p>
              </div>
              <div
                style={{
                  flex: 1,
                  backgroundColor: "#f3f4f6",
                  borderRadius: 8,
                  padding: "12px",
                  textAlign: "center",
                  border: "1px solid #d1d5db",
                }}
              >
                <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>Keystrokes</p>
                <p style={{ margin: "4px 0 0 0", fontSize: 24, fontWeight: 700, color: "#f97316" }}>
                  {stateValue.length}
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#f3f4f6",
                borderRadius: 8,
                padding: "12px 14px",
                border: "1px solid #d1d5db",
                fontFamily: "monospace",
                fontSize: 13,
                color: "#6b7280",
              }}
            >
              stateValue = <span style={{ color: "#d97706" }}>"{stateValue}"</span>
            </div>

            <div style={{ marginTop: 12, padding: "12px", backgroundColor: "#fef2f2", borderRadius: 6, border: "1px solid #fecaca" }}>
              <p style={{ margin: 0, fontSize: 12, color: "#991b1b", lineHeight: 1.6 }}>
                ✗ <strong>Problem:</strong> Every keystroke triggers setState() → re-render → slower performance
              </p>
            </div>
          </div>

          {/* RIGHT: useRef */}
          <div
            style={{
              backgroundColor: "#dcfce7",
              border: "1px solid #86efac",
              borderRadius: 12,
              padding: "20px",
            }}
          >
            <h3 style={{ margin: "0 0 12px 0", fontSize: 16, fontWeight: 700, color: "#15803d" }}>
              useRef — Zero Re-renders
            </h3>
            <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 12px 0" }}>
              Updates ref.current directly without re-rendering
            </p>

            <input
              ref={refInputRef}
              type="text"
              onChange={handleRefChange}
              placeholder="Type here — NO re-renders..."
              style={{
                width: "100%",
                padding: "12px 14px",
                fontSize: 14,
                border: "1px solid #d1d5db",
                borderRadius: 8,
                outline: "none",
                boxSizing: "border-box",
                backgroundColor: "#ffffff",
                color: "#0f172a",
                marginBottom: 12,
              }}
            />

            <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <div
                style={{
                  flex: 1,
                  backgroundColor: "#f3f4f6",
                  borderRadius: 8,
                  padding: "12px",
                  textAlign: "center",
                  border: "1px solid #d1d5db",
                }}
              >
                <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>Re-renders</p>
                <p style={{ margin: "4px 0 0 0", fontSize: 24, fontWeight: 700, color: "#22c55e" }}>{refRerenderCount}</p>
              </div>
              <div
                style={{
                  flex: 1,
                  backgroundColor: "#f3f4f6",
                  borderRadius: 8,
                  padding: "12px",
                  textAlign: "center",
                  border: "1px solid #d1d5db",
                }}
              >
                <p style={{ margin: 0, fontSize: 12, color: "#6b7280" }}>Keystrokes</p>
                <p style={{ margin: "4px 0 0 0", fontSize: 24, fontWeight: 700, color: "#10b981" }}>
                  {refRenderCount.current}
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#f3f4f6",
                borderRadius: 8,
                padding: "12px 14px",
                border: "1px solid #d1d5db",
                fontFamily: "monospace",
                fontSize: 13,
                color: "#6b7280",
                marginBottom: 12,
              }}
            >
              ref.current = <span style={{ color: "#10b981" }}>"{refDisplayTrigger > 0 ? refValue.current : "???"}"</span>
            </div>

            <button
              onClick={() => setRefDisplayTrigger(c => c + 1)}
              style={{
                width: "100%",
                padding: "8px",
                fontSize: 12,
                fontWeight: 600,
                background: "#10b981",
                color: "white",
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                marginBottom: 12,
              }}
            >
              Show Ref Value (Click to trigger re-render)
            </button>

            <div style={{ marginTop: 12, padding: "12px", backgroundColor: "#dcfce7", borderRadius: 6, border: "1px solid #86efac" }}>
              <p style={{ margin: 0, fontSize: 12, color: "#15803d", lineHeight: 1.6 }}>
                ✓ <strong>Solution:</strong> Mutate ref.current directly → no setState() → no re-render → instant performance
              </p>
            </div>
          </div>
        </div>

        {/* Approach 3: DOM Focus */}
        <div
          style={{
            backgroundColor: "#eff6ff",
            border: "1px solid #bfdbfe",
            borderRadius: 12,
            padding: "20px",
            marginBottom: 20,
          }}
        >
          <h3 style={{ margin: "0 0 12px 0", fontSize: 16, fontWeight: 700, color: "#1e40af" }}>
            useRef — Direct DOM Access (Focus)
          </h3>
          <p style={{ fontSize: 13, color: "#9ca3af", margin: "0 0 12px 0" }}>
            Imperatively control DOM elements directly
          </p>

          <div style={{ display: "flex", gap: 10 }}>
            <input
              ref={focusInputRef}
              type="text"
              placeholder="I will be focused imperatively..."
              style={{
                flex: 1,
                padding: "12px 14px",
                fontSize: 14,
                border: "1px solid #d1d5db",
                borderRadius: 8,
                outline: "none",
                boxSizing: "border-box",
                backgroundColor: "#ffffff",
                color: "#0f172a",
              }}
            />
            <button
              onClick={handleFocus}
              style={{
                padding: "12px 20px",
                fontSize: 14,
                fontWeight: 600,
                background: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Focus Input
            </button>
          </div>

          <div style={{ marginTop: 12, padding: "12px", backgroundColor: "#eff6ff", borderRadius: 6, border: "1px solid #bfdbfe" }}>
            <p style={{ margin: 0, fontSize: 12, color: "#1e40af", lineHeight: 1.6 }}>
              ✓ <strong>useRef for DOM:</strong> Get direct access to DOM nodes for imperative operations like focus(), value manipulation, etc.
            </p>
          </div>
        </div>

          <div
            style={{
              marginTop: 16,
              padding: "12px 14px",
              backgroundColor: "#f3f4f6",
              borderRadius: 8,
              fontFamily: "monospace",
              fontSize: 12,
              color: "#6b7280",
              lineHeight: 1.7,
            }}
          >
            <span style={{ color: "#d97706" }}>rule:</span> If a value should update the UI → useState | If a value should NOT update UI → useRef
          </div>
        </div>
      </div>
  );
}