import { useState, useContext, createContext } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
}

// Step 1: Create the context
const ThemeContext1 = createContext<ThemeContextValue | undefined>(undefined);

function useThemeContext() {
  const context = useContext(ThemeContext1);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeContext.Provider");
  }
  return context;
}

// Step 2: Any child reads the context directly — no props needed
//Extracted the object using destructuring 
function ThemeDisplay() {
  const { theme } = useThemeContext(); // grab only what you need
  return <p>Current theme: {theme}</p>;
}

function ThemeButton() {
  const { toggle } = useThemeContext(); // grab only what you need
  return <button onClick={toggle}>Toggle theme</button>;
}

// Step 3: Provider lives at the top — holds the state
export function UseContextDemo() {
  const [theme, setTheme] = useState<Theme>("light");

  const toggle = () => setTheme(t => t === "light" ? "dark" : "light");

  return (
    <ThemeContext1.Provider value={{ theme, toggle }}>
      <div style={{ background: theme === "light" ? "#fff" : "#333", padding: 20 }}>
        <ThemeDisplay />
        <ThemeButton />
      </div>
    </ThemeContext1.Provider>
  );
}

