import { type ReactNode } from "react";
import SyntaxHighlightedCode from "./SyntaxHighlightedCode";

export interface DocSection {
  title: string;
  content: string;
}

export interface KeyPoint {
  label: string;
  description: string;
}

export interface DocComponentProps {
  title: string;
  concept?: string;
  usage?: KeyPoint[];
  syntax?: string;
  hookSyntaxExplanation?: KeyPoint[];
  keyPoints?: KeyPoint[];
  codeExample?: string;
  practicalExamples?: string[];
  additionalSections?: DocSection[];
  children?: ReactNode;
}

const KeyPointsToggle: React.FC<{ points: KeyPoint[]; title?: string }> = ({
  points,
  title = "Key Points",
}) => {
  return (
    <div className="doc-section">
      <h3 className="section-title">{title}</h3>
      <ul className="key-points-list-styled">
        {points.map((point, idx) => (
          <li key={idx}>
            <span className="point-label">{point.label}:</span>
            <span className="point-description"> {point.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const DocumentationBox: React.FC<DocComponentProps> = ({
  title,
  concept,
  usage,
  syntax,
  hookSyntaxExplanation,
  keyPoints,
  codeExample,
  practicalExamples,
  additionalSections,
  children,
}) => (
  <div className="doc-container">
    <div className="doc-header">
      <h2>{title}</h2>
      <div className="header-divider"></div>
    </div>

    {concept && (
      <div className="doc-section">
        <h3 className="section-title">Concept</h3>
        <p className="concept-text">{concept}</p>
      </div>
    )}

    {syntax && (
      <div className="doc-section">
        <h3 className="section-title">Syntax</h3>
        <SyntaxHighlightedCode
          code={syntax}
          language="javascript"
          theme="light"
        />
      </div>
    )}

    {hookSyntaxExplanation && hookSyntaxExplanation.length > 0 && (
      <div className="doc-section">
        <div className="hook-syntax-explanation">
          <ul className="syntax-explanation-list">
            {hookSyntaxExplanation.map((point, idx) => (
              <li key={idx}>
                <strong>{point.label}:</strong> {point.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}

    {usage && usage.length > 0 && (
      <KeyPointsToggle points={usage} title="Use Case" />
    )}

    {keyPoints && keyPoints.length > 0 && (
      <KeyPointsToggle points={keyPoints} />
    )}

    {codeExample && (
      <div className="doc-section">
        <h3 className="section-title">Code Example</h3>
        <SyntaxHighlightedCode
          code={codeExample}
          language="javascript"
          theme="light"
        />
      </div>
    )}

    {practicalExamples && practicalExamples.length > 0 && (
      <div className="doc-section">
        <h3 className="section-title">Practical Examples</h3>
        <SyntaxHighlightedCode
          code={practicalExamples.join("\n\n")}
          language="javascript"
          theme="light"
        />
      </div>
    )}

    {additionalSections &&
      additionalSections.map((section, idx) => {
        // Parse content to separate bullet points or newlines
        const points = section.content
          .split(/(?=✓|✗|•|[0-9]+\.|\n)/g)
          .filter((p) => p.trim());

        return (
          <div key={idx} className="doc-section additional-section">
            <h3 className="section-title">{section.title}</h3>
            {points.length > 1 ? (
              <ul className="additional-points-list">
                {points.map((point, pidx) => (
                  <li key={pidx} className="additional-point-item">
                    {point.trim()}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="additional-content" style={{ whiteSpace: "pre-wrap" }}>
                {section.content}
              </p>
            )}
          </div>
        );
      })}

    {children}
  </div>
);
