import { DocumentationBox } from "../components/DocumentationBox";
import { UseContextDemo } from "../components/demos/UseContextDemo";

export function UseContextGuide() {
  return (
    <>
      <DocumentationBox
        title="useContext Hook"
        concept="useContext accesses context values without prop drilling. It avoids passing props through many intermediate components. Perfect for global state like theme, authentication, and language settings."
        syntax={`const value = useContext(MyContext);`}
        hookSyntaxExplanation={[
          {
            label: "Context object",
            description: "The context created with createContext()",
          },
          {
            label: "Return value",
            description:
              "Returns the value passed to the nearest Provider component",
          },
        ]}
        keyPoints={[
          {
            label: "Eliminates Prop Drilling",
            description:
              "Access global values directly without passing through intermediate components",
          },
          {
            label: "Global State",
            description:
              "Ideal for theme, user auth, language, notifications",
          },
          {
            label: "Context Creation",
            description:
              "Create context with createContext(), then wrap app with Provider",
          },
          {
            label: "Hook Usage",
            description:
              "Call useContext(YourContext) in any child component",
          },
          {
            label: "Performance Note",
            description:
              "Avoid for frequently changing state; works best for stable values",
          },
        ]}
        codeExample={`import { useState, useContext, createContext } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
}

// Step 1: Create the context
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeContext.Provider");
  }
  return context;
}

// Step 2: Provider lives at the top — holds the state
export function UseContextDemo() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div style={{ background: theme === "light" ? "#fff" : "#333", padding: 20 }}>
        <ThemeDisplay />
        <ThemeButton />
      </div>
    </ThemeContext.Provider>
  );
}

// Step 3: Any child reads the context directly — no props needed
function ThemeDisplay() {
  const { theme } = useThemeContext();
  return <p>Current theme: {theme}</p>;
}

function ThemeButton() {
  const { toggle } = useThemeContext();
  return <button onClick={toggle}>Toggle theme</button>;
}

// Check in console
// document.documentElement.getAttribute("data-theme")
`}
        additionalSections={[
          {
            title: "How Context Works",
            content:
              "1. createContext() - creates an empty \"bucket\" that will hold shared data. 2. <ThemeContext.Provider value={...}> - fills that bucket. Any component wrapped inside this can access the value. 3. useContext(ThemeContext) - lets a child reach directly into the bucket and pull out what it needs. No prop drilling - ThemeDisplay and ThemeButton never receive props from App.",
          },
          {
            title: "When to Use useContext",
            content:
              "✓ Global state like theme, user info, language ✓ Avoiding prop drilling through many levels ✓ Stable values that don't change frequently ✗ Frequently changing state (causes unnecessary re-renders) ✗ Complex state logic (use Redux or Zustand instead)",
          },
          {
            title: "Best Practices",
            content:
              "1. Create custom hooks to expose context (e.g., useTheme, useAuth) 2. Add error checking if context is used outside provider 3. Split contexts by domain (Auth, Theme, Notifications) 4. Don't use for frequently changing state 5. Use useMemo to wrap context value to prevent unnecessary re-renders",
          },
        ]}
      />
      <div className="live-demo">
        <UseContextDemo />
      </div>
    </>
  );
}
