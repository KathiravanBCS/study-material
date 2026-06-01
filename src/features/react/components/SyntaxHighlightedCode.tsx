import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Copy, Check } from "tabler-icons-react";
import "../styles/CodeBlock.css";

interface SyntaxHighlightedCodeProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  theme?: "dark" | "light";
}

export default function SyntaxHighlightedCode({
  code,
  language = "javascript",
  showLineNumbers = true,
  theme = "light",
}: SyntaxHighlightedCodeProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlighterTheme = theme === "dark" ? atomOneDark : atomOneLight;

  return (
    <div className="syntax-code-container">
      <div className="code-header">
        <span className="language-label">{language}</span>
        <button
          className={`copy-button ${copied ? "copied" : ""}`}
          onClick={handleCopy}
          title="Copy code"
        >
          {copied ? (
            <>
              <Check size={16} /> Copied
            </>
          ) : (
            <>
              <Copy size={16} /> Copy
            </>
          )}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={highlighterTheme}
        showLineNumbers={showLineNumbers}
        className="syntax-highlighter-code"
        customStyle={{
          margin: 0,
          borderRadius: "0 0 8px 8px",
          padding: "20px",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
