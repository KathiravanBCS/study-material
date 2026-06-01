import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export function SideEffectsDemo() {
  const [activeTab, setActiveTab] = useState<"fetch" | "listeners" | "dom" | "timers">("fetch");
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("My App");
  const [logs, setLogs] = useState<string[]>([]);
  const [refetchTrigger, setRefetchTrigger] = useState(0);

  const addLog = (message: string) => {
    setLogs((prev) => [...prev.slice(-4), `[${new Date().toLocaleTimeString()}] ${message}`]);
  };

  // 1. Fetching Data
  useEffect(() => {
    if (activeTab !== "fetch") return;

    setLoading(true);
    addLog("Fetching data from JSONPlaceholder API...");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json() as Promise<User[]>;
      })
      .then((users) => {
        setData(users.slice(0, 5)); // Show first 5 users
        setLoading(false);
        addLog("Data fetched successfully! 5 users loaded");
      })
      .catch((error) => {
        addLog(`Error: ${error.message}`);
        setLoading(false);
      });
  }, [activeTab, refetchTrigger]);

  // 2. Event Listeners
  useEffect(() => {
    if (activeTab !== "listeners") return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      addLog(`Window resized to ${window.innerWidth}px`);
    };

    window.addEventListener("resize", handleResize);
    addLog("Event listener attached");

    return () => {
      window.removeEventListener("resize", handleResize);
      addLog("Event listener removed");
    };
  }, [activeTab]);

  // 3. DOM Manipulation
  useEffect(() => {
    if (activeTab !== "dom") return;

    addLog(`Before Assigning Value: "${document.title}"`);
    let originalTitle = document.title;
    document.title = `${title} - Count: ${count}`;
    addLog(`After Assigning value: "${document.title}"`);
    addLog(`original title: "${originalTitle}"`);



    return () => {
      document.title = originalTitle;
    };
  }, [activeTab, title, count]);

  // 4. Timers/Intervals
  useEffect(() => {
    if (activeTab !== "timers") return;

    const interval = setInterval(() => {
      setCount((prev) => {
        const newCount = prev + 1;
        addLog(`Counter incremented: ${newCount}`);
        return newCount;
      });
    }, 1000);

    addLog("Interval started (1s)");

    return () => {
      clearInterval(interval);
      addLog("Interval cleared");
    };
  }, [activeTab]);

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", marginTop: "20px" }}>
      <h3>Side Effects Demo - Real-time Examples</h3>

      {/* Tab Navigation */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
        {(["fetch", "listeners", "dom", "timers"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setLogs([]);
              setCount(0);
            }}
            style={{
              padding: "8px 16px",
              backgroundColor: activeTab === tab ? "#007bff" : "#f0f0f0",
              color: activeTab === tab ? "white" : "black",
              border: "1px solid #ddd",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: activeTab === tab ? "bold" : "normal",
              transition: "none",
              animation: "none",
            }}
          >
            {tab === "fetch" && "Fetch Data"}
            {tab === "listeners" && "Event Listeners"}
            {tab === "dom" && "DOM Manipulation"}
            {tab === "timers" && "Timers"}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ minHeight: "150px", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "4px" }}>
        {activeTab === "fetch" && (
          <div>
            <h4>Fetching Data from JSONPlaceholder API</h4>
            {loading ? (
              <p style={{ color: "#666", fontSize: "16px" }}>Loading users...</p>
            ) : data.length > 0 ? (
              <div style={{ backgroundColor: "#e8f4f8", padding: "10px", borderRadius: "4px" }}>
                <p><strong>Users Fetched ({data.length}):</strong></p>
                <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                  {data.map((user) => (
                    <div
                      key={user.id}
                      style={{
                        padding: "8px",
                        marginBottom: "8px",
                        backgroundColor: "white",
                        borderLeft: "3px solid #007bff",
                        borderRadius: "2px",
                        fontSize: "12px",
                      }}
                    >
                      <p style={{ margin: "0 0 4px 0" }}>
                        <strong>{user.name}</strong> ({user.username})
                      </p>
                      <p style={{ margin: "0 0 2px 0", color: "#666" }}>
                        Email: {user.email}
                      </p>
                      <p style={{ margin: "0", color: "#666" }}>
                        Phone: {user.phone}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p style={{ color: "#666" }}>Click to load users from the API</p>
            )}
            <button
              onClick={() => {
                setData([]);
                setRefetchTrigger((prev) => prev + 1);
              }}
              style={{ marginTop: "10px", padding: "8px 16px", cursor: "pointer", transition: "none", animation: "none" }}
            >
              Refetch Users
            </button>
          </div>
        )}

        {activeTab === "listeners" && (
          <div>
            <h4>Window Resize Listener</h4>
            <p style={{ fontSize: "18px", fontWeight: "bold", color: "#007bff" }}>
              Window Width: <span>{windowWidth}px</span>
            </p>
            <p style={{ fontSize: "12px", color: "#666" }}>
              Try resizing your browser window to see the listener in action
            </p>
          </div>
        )}

        {activeTab === "dom" && (
          <div>
            <h4>DOM Manipulation - Document Title</h4>
            <p style={{ fontSize: "12px", color: "#666" }}>Current page title: <code>{document.title}</code></p>
            <div style={{ marginTop: "15px" }}>
              <label style={{ display: "block", marginBottom: "8px" }}>
                App Title:
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ marginLeft: "8px", padding: "4px", width: "200px" }}
                />
              </label>
              <p>Count: <span style={{ fontSize: "18px", fontWeight: "bold", color: "#007bff" }}>{count}</span></p>
              <button onClick={() => setCount(count + 1)} style={{ padding: "8px 16px", transition: "none", animation: "none" }}>
                +1
              </button>
            </div>
          </div>
        )}

        {activeTab === "timers" && (
          <div>
            <h4>Auto-increment Timer with Cleanup</h4>
            <p style={{ fontSize: "24px", fontWeight: "bold", color: "#28a745" }}>
              {count.toString().padStart(2, "0")}
            </p>
            <p style={{ fontSize: "12px", color: "#666" }}>
              Increments every second. Cleanup stops the interval when tab changes.
            </p>
          </div>
        )}
      </div>

      {/* Logs */}
      <div style={{ marginTop: "20px" }}>
        <h4>Effect Execution Logs</h4>
        <div
          style={{
            backgroundColor: "#1e1e1e",
            color: "#0f0",
            padding: "10px",
            borderRadius: "4px",
            fontFamily: "monospace",
            fontSize: "12px",
            maxHeight: "120px",
            overflowY: "auto",
          }}
        >
          {logs.length === 0 ? (
            <p style={{ color: "#666" }}>Waiting for effects...</p>
          ) : (
            logs.map((log, idx) => (
              <div key={idx}>{log}</div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
