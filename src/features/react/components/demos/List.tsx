// import React from "react";
import { memo, useEffect, useState } from "react";

// memo is the same as React.memo - it prevents unnecessary re-renders when props haven't changed
// Both are equivalent:
// - memo (direct import) - modern, cleaner syntax
// - React.memo (traditional way)

export interface ListProps {
  getItems: (offset?: number) => number[];
  label: string;
}

export const List = memo(({ getItems, label }: ListProps) => {
  const [items, setItems] = useState<number[]>([]);
  const [renderCount, setRenderCount] = useState(0);

  console.log(`%cList component rendered`, "color: #06b6d4; font-weight: bold");

  useEffect(() => {
    setItems(getItems());
    setRenderCount((prev) => prev + 1);
  }, [getItems, label]);

  return (
    <div
      style={{
        backgroundColor: "#f3f4f6",
        border: "2px solid #3b82f6",
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
              backgroundColor: "#3b82f6",
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

List.displayName = "List";
