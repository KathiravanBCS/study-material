import { useState } from "react";

export function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}
    >
      <div>
        <h4>Counter State</h4>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h4>String State</h4>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <p>Hello, {name || "Guest"}!</p>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h4>Array State</h4>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add item"
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button onClick={addItem}>Add</button>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
