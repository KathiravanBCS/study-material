import { useCallback, useState, useMemo, useEffect, memo } from "react";
import { List } from "./List";


//  Approach 1: WITHOUT useCallback (Problem Case)

export const WithoutUseCallbackApproach = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  console.log("%c===== WITHOUT useCallback =====", "color: #ef4444; font-weight: bold");


  const getItems = () => {
    console.log("%c  getItems() called", "color: #f97316");
    return [number + 1, number + 2, number + 3];
  };


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
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: 700,
            marginBottom: 12,
            color: dark ? "#f1f5f9" : "#0f172a",
          }}
        >
           WITHOUT useCallback
        </h2>
        <p
          style={{
            textAlign: "center",
            color: dark ? "#94a3b8" : "#6b7280",
            marginBottom: 24,
            fontSize: 14,
          }}
        >
          Function recreated on every render = unnecessary child re-renders
        </p>

        {/* Number Input */}
        <label
          style={{
            display: "block",
            fontWeight: 700,
            fontSize: 14,
            marginBottom: 8,
            color: dark ? "#f1f5f9" : "#0f172a",
          }}
        >
          Enter a Number:
        </label>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            console.log("%c number changed", "color: #f97316");
            setNumber(parseInt(e.target.value) || 0);
          }}
          style={{
            width: "100%",
            padding: "10px 12px",
            fontSize: 14,
            border: `1px solid ${dark ? "#334155" : "#d1d5db"}`,
            borderRadius: 8,
            outline: "none",
            boxSizing: "border-box",
            backgroundColor: dark ? "#1e293b" : "#ffffff",
            color: dark ? "#f1f5f9" : "#0f172a",
            marginBottom: 16,
          }}
        />

        {/* Toggle Theme Button */}
        <button
          onClick={() => {
            console.log("%c theme toggled (WITHOUT useCallback) - this causes unnecessary List re-renders!", "color: #f97316; font-weight: bold");
            setDark((d) => !d);
          }}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: 14,
            fontWeight: 600,
            background: dark ? "#22c55e" : "#ef4444",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            marginBottom: 20,
            transition: "background 0.2s",
          }}
        >
          Toggle Theme 
        </button>

        {/* List Component */}
        <List getItems={getItems} label="Without useCallback" />

        {/* Problem Info Box */}
        <div
          style={{
            backgroundColor: dark ? "#1c0f0f" : "#fee2e2",
            border: `1px solid ${dark ? "#7f1d1d" : "#fecaca"}`,
            borderRadius: 8,
            padding: "12px 16px",
            marginTop: 16,
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: dark ? "#fca5a5" : "#b91c1c",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            <strong>Problem:</strong> Toggling theme causes List component to re-render unnecessarily because getItems function reference changes on every parent render.
          </p>
        </div>
      </div>
    </div>
  );
};


// Approach 2: WITH useCallback (Fixed Case)

export const WithUseCallbackApproach = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);



  const getItems = useCallback(() => {
    console.log("%c  getItems() called", "color: #22c55e");
    return [number + 1, number + 2, number + 3];
  }, [number]); // Only recreate when number changes


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
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: 700,
            marginBottom: 12,
            color: dark ? "#f1f5f9" : "#0f172a",
          }}
        >
          WITH useCallback
        </h2>
        <p
          style={{
            textAlign: "center",
            color: dark ? "#94a3b8" : "#6b7280",
            marginBottom: 24,
            fontSize: 14,
          }}
        >
          Function memoized = child only re-renders when dependency changes
        </p>

        {/* Number Input */}
        <label
          style={{
            display: "block",
            fontWeight: 700,
            fontSize: 14,
            marginBottom: 8,
            color: dark ? "#f1f5f9" : "#0f172a",
          }}
        >
          Enter a Number:
        </label>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            console.log("%c number changed", "color: #22c55e");
            setNumber(parseInt(e.target.value) || 0);
          }}
          style={{
            width: "100%",
            padding: "10px 12px",
            fontSize: 14,
            border: `1px solid ${dark ? "#334155" : "#d1d5db"}`,
            borderRadius: 8,
            outline: "none",
            boxSizing: "border-box",
            backgroundColor: dark ? "#1e293b" : "#ffffff",
            color: dark ? "#f1f5f9" : "#0f172a",
            marginBottom: 16,
          }}
        />

        {/* Toggle Theme Button */}
        <button
          onClick={() => {
            console.log("%c theme toggled (WITH useCallback) - List does NOT re-render!", "color: #22c55e; font-weight: bold");
            setDark((d) => !d);
          }}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: 14,
            fontWeight: 600,
            background: dark ? "#fbbf24" : "#22c55e",
            color: dark ? "#0f172a" : "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            marginBottom: 20,
            transition: "background 0.2s",
          }}
        >
          Toggle Theme 
        </button>

        {/* List Component */}
        <List getItems={getItems} label="With useCallback" />

        {/* Success Info Box */}
        <div
          style={{
            backgroundColor: dark ? "#0f2818" : "#dcfce7",
            border: `1px solid ${dark ? "#16a34a" : "#86efac"}`,
            borderRadius: 8,
            padding: "12px 16px",
            marginTop: 16,
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: dark ? "#86efac" : "#15803d",
              margin: "0 0 6px 0",
              lineHeight: 1.6,
            }}
          >
            ✓ <strong>Solution:</strong> getItems function reference stays the same when theme toggles
          </p>
          <p
            style={{
              fontSize: 13,
              color: dark ? "#86efac" : "#15803d",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            ✓ <strong>Result:</strong> List only re-renders when number actually changes
          </p>
        </div>
      </div>
    </div>
  );
};


// Approach 3: useCallback vs useMemo (Advanced - Parameters & Values) 


interface AdvancedListProps {
  getItems: (incrementor: number) => number[];
  label: string;
}

const AdvancedList = memo(({ getItems, label }: AdvancedListProps) => {
  const [items, setItems] = useState<number[]>([]);
  const [renderCount, setRenderCount] = useState(0);

  console.log(`%c${label} Advanced List rendered`, "color: #8b5cf6; font-weight: bold");

  useEffect(() => {
    console.log(`%c useEffect triggered`, "color: #8b5cf6");
    setItems(getItems(10)); // Passing parameter 10 to incrementor
    setRenderCount((prev) => prev + 1);
  }, [getItems, label]);

  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        border: "2px solid #8b5cf6",
        borderRadius: 10,
        padding: "16px",
        marginTop: 12,
      }}
    >
      <div style={{ fontSize: 12, color: "#666", marginBottom: 8 }}>
        <strong>{label}</strong> • Effect Runs: {renderCount}
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {items.map((item, index) => (
          <span
            key={index}
            style={{
              backgroundColor: "#8b5cf6",
              color: "white",
              padding: "6px 12px",
              borderRadius: 6,
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
});

AdvancedList.displayName = "AdvancedList";

export const UseCallbackVsUseMemoApproach = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);


  // APPROACH 1: useCallback - Memoizes a FUNCTION that accepts PARAMETERS
  const getItemsWithCallback = useCallback(
    (incrementor: number) => {
      console.log(`%c  getItemsWithCallback(${incrementor}) called`, "color: #8b5cf6");
      return [
        number + incrementor + 1,
        number + incrementor + 2,
        number + incrementor + 3,
      ];
    },
    [number] // Only recreate when number changes
  );

  // APPROACH 2: useMemo - Memoizes a VALUE (computed result)
  const itemsWithMemo = useMemo(() => {
    console.log(`%c  useMemo computed`, "color: #06b6d4");
    return [number + 1, number + 2, number + 3];
  }, [number]);



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
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        {/* Title */}
        <h2
          style={{
            textAlign: "center",
            fontSize: 24,
            fontWeight: 700,
            marginBottom: 12,
            color: dark ? "#f1f5f9" : "#0f172a",
          }}
        >
          useCallback vs useMemo
        </h2>
        <p
          style={{
            textAlign: "center",
            color: dark ? "#94a3b8" : "#6b7280",
            marginBottom: 24,
            fontSize: 14,
          }}
        >
          Compare: Memoizing Functions (useCallback) vs Values (useMemo)
        </p>

        {/* Number Input */}
        <label
          style={{
            display: "block",
            fontWeight: 700,
            fontSize: 14,
            marginBottom: 8,
            color: dark ? "#f1f5f9" : "#0f172a",
          }}
        >
          Enter a Number:
        </label>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            console.log("%c number changed", "color: #8b5cf6");
            setNumber(parseInt(e.target.value) || 0);
          }}
          style={{
            width: "100%",
            padding: "10px 12px",
            fontSize: 14,
            border: `1px solid ${dark ? "#334155" : "#d1d5db"}`,
            borderRadius: 8,
            outline: "none",
            boxSizing: "border-box",
            backgroundColor: dark ? "#1e293b" : "#ffffff",
            color: dark ? "#f1f5f9" : "#0f172a",
            marginBottom: 16,
          }}
        />

        {/* Toggle Theme Button */}
        <button
          onClick={() => {
            console.log("%c theme toggled", "color: #8b5cf6; font-weight: bold");
            setDark((d) => !d);
          }}
          style={{
            width: "100%",
            padding: "12px",
            fontSize: 14,
            fontWeight: 600,
            background: dark ? "#c4b5fd" : "#8b5cf6",
            color: dark ? "#0f172a" : "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            marginBottom: 20,
            transition: "background 0.2s",
          }}
        >
          Toggle Theme
        </button>

        {/* Two Column Layout: useCallback and useMemo */}
        <div
          style={{
            display: "flex",
            gap: 20,
            marginBottom: 20,
            flexWrap: "wrap",
          }}
        >
          {/* useCallback Section - Left */}
          <div
            style={{
              flex: 1,
              minWidth: 320,
              backgroundColor: dark ? "#1e1b4b" : "#ede9fe",
              border: `2px solid ${dark ? "#6d28d9" : "#c4b5fd"}`,
              borderRadius: 10,
              padding: "16px",
            }}
          >
            <h4
              style={{
                margin: "0 0 12px 0",
                fontSize: 15,
                fontWeight: 700,
                color: dark ? "#c4b5fd" : "#6d28d9",
              }}
            >
              useCallback (Returns Function)
            </h4>
            <p
              style={{
                fontSize: 13,
                color: dark ? "#a78bfa" : "#7c3aed",
                margin: "0 0 12px 0",
                lineHeight: 1.5,
              }}
            >
              Memoizes a <strong>FUNCTION</strong> that accepts <strong>parameters</strong>
            </p>
            <code
              style={{
                display: "block",
                backgroundColor: dark ? "#0f172a" : "#f5f3ff",
                padding: "8px 12px",
                borderRadius: 6,
                fontSize: 12,
                color: dark ? "#a78bfa" : "#6d28d9",
                marginBottom: 12,
                overflow: "auto",
              }}
            >
              {`const getItems = useCallback(\n  (incrementor) => [...],\n  [number]\n)`}
            </code>
            <AdvancedList
              getItems={getItemsWithCallback}
              label="useCallback + Parameters"
            />
            <p
              style={{
                fontSize: 12,
                color: dark ? "#9f7aea" : "#9333ea",
                margin: "12px 0 0 0",
                lineHeight: 1.5,
              }}
            >
              ✓ Function accepts incrementor parameter<br />
              ✓ Can pass different values to customize behavior<br />
              ✓ Useful for callbacks passed to child components
            </p>
          </div>

          {/* useMemo Section - Right */}
          <div
            style={{
              flex: 1,
              minWidth: 320,
              backgroundColor: dark ? "#0c2f4a" : "#cffafe",
              border: `2px solid ${dark ? "#0369a1" : "#06b6d4"}`,
              borderRadius: 10,
              padding: "16px",
            }}
          >
            <h4
              style={{
                margin: "0 0 12px 0",
                fontSize: 15,
                fontWeight: 700,
                color: dark ? "#06b6d4" : "#0369a1",
              }}
            >
              useMemo (Returns Value)
            </h4>
            <p
              style={{
                fontSize: 13,
                color: dark ? "#06b6d4" : "#0891b2",
                margin: "0 0 12px 0",
                lineHeight: 1.5,
              }}
            >
              Memoizes a <strong>VALUE</strong> (computed result, not a function)
            </p>
            <code
              style={{
                display: "block",
                backgroundColor: dark ? "#0f172a" : "#ecf7fe",
                padding: "8px 12px",
                borderRadius: 6,
                fontSize: 12,
                color: dark ? "#06b6d4" : "#0369a1",
                marginBottom: 12,
                overflow: "auto",
              }}
            >
              {`const items = useMemo(() => {\n  return [number+1, number+2, ...]\n}, [number])`}
            </code>
            <div
              style={{
                backgroundColor: "#f3f4f6",
                border: "2px solid #06b6d4",
                borderRadius: 10,
                padding: "16px",
                marginTop: 12,
              }}
            >
              <div style={{ fontSize: 12, color: "#666", marginBottom: 8 }}>
                <strong>useMemo Result</strong> • Items: {itemsWithMemo.length}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {itemsWithMemo.map((item, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: "#06b6d4",
                      color: "white",
                      padding: "6px 12px",
                      borderRadius: 6,
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <p
              style={{
                fontSize: 12,
                color: dark ? "#0891b2" : "#0891b2",
                margin: "12px 0 0 0",
                lineHeight: 1.5,
              }}
            >
              ✓ Returns computed VALUE directly<br />
              ✓ No parameters needed<br />
              ✓ Useful for expensive calculations
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div
          style={{
            backgroundColor: dark ? "#1e293b" : "#f3f4f6",
            border: `1px solid ${dark ? "#334155" : "#d1d5db"}`,
            borderRadius: 8,
            padding: "16px",
            marginTop: 20,
          }}
        >
          <h4 style={{ margin: "0 0 12px 0", fontSize: 14 }}>Key Difference</h4>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: 13,
            }}
          >
            <thead>
              <tr style={{ borderBottom: `1px solid ${dark ? "#475569" : "#d1d5db"}` }}>
                <th
                  style={{
                    padding: "8px",
                    textAlign: "left",
                    fontWeight: 700,
                    color: dark ? "#f1f5f9" : "#0f172a",
                  }}
                >
                  Feature
                </th>
                <th
                  style={{
                    padding: "8px",
                    textAlign: "left",
                    fontWeight: 700,
                    color: dark ? "#f1f5f9" : "#0f172a",
                  }}
                >
                  useCallback
                </th>
                <th
                  style={{
                    padding: "8px",
                    textAlign: "left",
                    fontWeight: 700,
                    color: dark ? "#f1f5f9" : "#0f172a",
                  }}
                >
                  useMemo
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: `1px solid ${dark ? "#475569" : "#d1d5db"}` }}>
                <td style={{ padding: "8px" }}>Memoizes</td>
                <td style={{ padding: "8px", color: "#8b5cf6", fontWeight: 600 }}>
                  Function
                </td>
                <td style={{ padding: "8px", color: "#06b6d4", fontWeight: 600 }}>
                  Value
                </td>
              </tr>
              <tr style={{ borderBottom: `1px solid ${dark ? "#475569" : "#d1d5db"}` }}>
                <td style={{ padding: "8px" }}>Can Accept Parameters</td>
                <td style={{ padding: "8px", color: "#10b981", fontWeight: 600 }}>
                  Yes
                </td>
                <td style={{ padding: "8px", color: "#ef4444", fontWeight: 600 }}>
                  No
                </td>
              </tr>
              <tr style={{ borderBottom: `1px solid ${dark ? "#475569" : "#d1d5db"}` }}>
                <td style={{ padding: "8px" }}>Returns</td>
                <td style={{ padding: "8px" }}>Function reference</td>
                <td style={{ padding: "8px" }}>Computed value</td>
              </tr>
              <tr>
                <td style={{ padding: "8px" }}>Use When</td>
                <td style={{ padding: "8px" }}>Passing callbacks to children</td>
                <td style={{ padding: "8px" }}>Heavy computations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


// Main Demo Component (Shows both approaches) 

export function UseCallbackDemo() {
  const [activeTab, setActiveTab] = useState<"with" | "without" | "advanced">(
    "without"
  );

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#0f172a",
        minHeight: "100vh",
        padding: "20px",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      {/* Main Title */}
      <div style={{ maxWidth: 900, margin: "0 auto", marginBottom: 20 }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 8,
            color: "#0f172a",
          }}
        >
          useCallback Demo
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: 14,
            marginBottom: 24,
          }}
        >
          Compare problem case (without useCallback) vs solution (with useCallback) vs useCallback vs useMemo
        </p>

        {/* Tab Buttons */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 24,
            borderBottom: `2px solid #e5e7eb`,
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setActiveTab("without")}
            style={{
              padding: "12px 20px",
              fontSize: 14,
              fontWeight: 600,
              background: activeTab === "without" ? "#ef4444" : "transparent",
              color: activeTab === "without" ? "white" : "#6b7280",
              border: "none",
              borderRadius: "8px 8px 0 0",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            Without useCallback
          </button>
          <button
            onClick={() => setActiveTab("with")}
            style={{
              padding: "12px 20px",
              fontSize: 14,
              fontWeight: 600,
              background: activeTab === "with" ? "#22c55e" : "transparent",
              color: activeTab === "with" ? "white" : "#6b7280",
              border: "none",
              borderRadius: "8px 8px 0 0",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            With useCallback
          </button>
          <button
            onClick={() => setActiveTab("advanced")}
            style={{
              padding: "12px 20px",
              fontSize: 14,
              fontWeight: 600,
              background: activeTab === "advanced" ? "#8b5cf6" : "transparent",
              color: activeTab === "advanced" ? "white" : "#6b7280",
              border: "none",
              borderRadius: "8px 8px 0 0",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            useCallback vs useMemo
          </button>
          <div style={{ flex: 1 }} />
        </div>

        {/* Content */}
        {activeTab === "without" && <WithoutUseCallbackApproach />}
        {activeTab === "with" && <WithUseCallbackApproach />}
        {activeTab === "advanced" && <UseCallbackVsUseMemoApproach />}

      </div>
    </div>
  );
}
