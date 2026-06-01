import { useState } from "react";
import "../styles/ReactHooks.css";
import "../styles/CodeBlock.css";
import { DocumentationBox } from "../components/DocumentationBox";
import { UseStateGuide } from "./UseStateGuide";
import { UseEffectGuide } from "./UseEffectGuide";
import { UseContextGuide } from "./UseContextGuide";
import { UseReducerGuide } from "./UseReducerGuide";
import { UseCallbackGuide } from "./UseCallbackGuide";
import { UseMemoGuide } from "./UseMemoGuide";
import { UseRefGuide } from "./UseRefGuide";

export default function ComprehensiveReactHooks() {
  const [activeExample, setActiveExample] = useState<string | null>(null);

  return (
    <div className="hooks-container">
      <div className="hooks-header">
        <h1>React Hooks Comprehensive Guide</h1>
        <p>Learn React Hooks with detailed documentation and live examples</p>
      </div>

      <div className="example-buttons">
        <button
          className={activeExample === "useState" ? "active" : ""}
          onClick={() => setActiveExample("useState")}
        >
          useState
        </button>
        <button
          className={activeExample === "useEffect" ? "active" : ""}
          onClick={() => setActiveExample("useEffect")}
        >
          useEffect
        </button>
        <button
          className={activeExample === "useContext" ? "active" : ""}
          onClick={() => setActiveExample("useContext")}
        >
          useContext
        </button>
        <button
          className={activeExample === "useReducer" ? "active" : ""}
          onClick={() => setActiveExample("useReducer")}
        >
          useReducer
        </button>
        <button
          className={activeExample === "useMemo" ? "active" : ""}
          onClick={() => setActiveExample("useMemo")}
        >
          useMemo
        </button>
        <button
          className={activeExample === "useCallback" ? "active" : ""}
          onClick={() => setActiveExample("useCallback")}
        >
          useCallback
        </button>
        <button
          className={activeExample === "useRef" ? "active" : ""}
          onClick={() => setActiveExample("useRef")}
        >
          useRef
        </button>

        <button
          className={activeExample === "comparison" ? "active" : ""}
          onClick={() => setActiveExample("comparison")}
        >
          Comparison Guide
        </button>
      </div>

      <div className="example-content">
        {activeExample === "useState" && <UseStateGuide />}
        {activeExample === "useEffect" && <UseEffectGuide />}
        {activeExample === "useContext" && <UseContextGuide />}
        {activeExample === "useReducer" && <UseReducerGuide />}
        {activeExample === "useMemo" && <UseMemoGuide />}
        {activeExample === "useCallback" && <UseCallbackGuide />}
        {activeExample === "useRef" && <UseRefGuide />}

        {activeExample === "comparison" && (
          <DocumentationBox
            title="Hooks Comparison & Decision Guide"
            concept="React provides several hooks for different purposes. Understanding when to use each hook is crucial for writing efficient, maintainable components. This guide helps you choose the right hook for your use case."
            additionalSections={[
              {
                title: "useState - Simple State",
                content:
                  "Use for: Simple state management, form inputs, toggles, counters.\nKey: Multiple calls for different state values.\nWhen: Your state is a single value or independent values.",
              },
              {
                title: "useEffect - Side Effects",
                content:
                  "Use for: Side effects after render, API calls, DOM updates.\nKey: Dependency array controls when it runs.\nWhen: You need to perform actions outside component render.",
              },
              {
                title: "useContext - Global State",
                content:
                  "Use for: Global state without prop drilling, theme, user, language, auth.\nKey: Combine with useState in provider.\nWhen: You want to avoid passing props through many levels.",
              },
              {
                title: "useReducer - Complex State",
                content:
                  "Use for: Complex state with multiple actions, form state, game logic.\nKey: Better than useState for related state values.\nWhen: You have complex state transitions or multiple interdependent values.",
              },
              {
                title: "useCallback - Function Memoization",
                content:
                  "Use for: Memoizing callback functions, passing to React.memo components.\nKey: Prevents unnecessary re-renders of children.\nWhen: Passing callbacks to expensive child components.",
              },
              {
                title: "useMemo - Value Memoization",
                content:
                  "Use for: Memoizing computed values, expensive filters/sorts.\nKey: Prevents expensive recalculations.\nWhen: Computation is expensive and dependencies don't change often.",
              },
              {
                title: "Common Patterns",
                content:
                  "Pattern 1 (Form): useReducer for form state with multiple fields.\nPattern 2 (Global): Context + useReducer for app-wide state.\nPattern 3 (Fetching): useEffect for data fetching with cleanup.\nPattern 4 (Performance): useCallback + React.memo for expensive children.",
              },
              {
                title: "Performance Tips",
                content:
                  "1. Use dependency arrays correctly in useEffect\n2. Only memoize expensive computations\n3. Avoid creating objects in render without useMemo\n4. Pass callbacks with useCallback to memoized children\n5. Use useContext for truly global state\n7. Profile before optimizing with DevTools",
              },
              {
                title: "Rules of Hooks",
                content:
                  "✓ Only call hooks at top level of component\n✓ Never call hooks inside loops or conditions\n✓ Only call hooks from React components or custom hooks\n✓ Custom hooks can call other hooks",
              },
            ]}
          />
        )}
      </div>
    </div>
  );
}
