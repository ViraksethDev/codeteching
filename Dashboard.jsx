import { useState } from "react";
import { createStore } from "redux";

// ============================================================
// STEP 1: REDUCER
// A pure function that takes current state + action,
// and returns the NEW state. Never mutates state directly.
// ============================================================
function counterReducer(state = { count: 0, history: [] }, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + (action.payload || 1),
        history: [...state.history, `+${action.payload || 1}`],
      };
    case "DECREMENT":
      return {
        count: state.count - (action.payload || 1),
        history: [...state.history, `-${action.payload || 1}`],
      };
    case "RESET":
      return { count: 0, history: [...state.history, "reset"] };
    default:
      return state; // Always return state for unknown actions
  }
}

// ============================================================
// STEP 2: STORE
// The single source of truth. Holds the entire app state.
// ============================================================
const store = createStore(counterReducer);

// ============================================================
// STEP 3: ACTION CREATORS
// Functions that return action objects { type, payload }
// ============================================================
const increment = (amount = 1) => ({ type: "INCREMENT", payload: amount });
const decrement = (amount = 1) => ({ type: "DECREMENT", payload: amount });
const reset = () => ({ type: "RESET" });

// ============================================================
// STEP 4: REACT COMPONENT
// We subscribe to the store and re-render on state changes.
// In real apps, use react-redux hooks (useSelector/useDispatch)
// ============================================================
export default function ReduxCounter() {
  // Mirror Redux store state into React state for re-renders
  const [reduxState, setReduxState] = useState(store.getState());

  // Subscribe: whenever the store updates, sync to React state
  store.subscribe(() => {
    setReduxState({ ...store.getState() });
  });

  const { count, history } = reduxState;

  // dispatch() sends an action to the store → reducer processes it
  const handleIncrement = () => store.dispatch(increment(1));
  const handleDecrement = () => store.dispatch(decrement(1));
  const handleBigIncrement = () => store.dispatch(increment(10));
  const handleReset = () => store.dispatch(reset());

  const countColor =
    count > 0 ? "#22c55e" : count < 0 ? "#ef4444" : "#94a3b8";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Georgia', serif",
        padding: "20px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "480px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div
            style={{
              display: "inline-block",
              background: "#1e1b4b",
              border: "1px solid #4f46e5",
              borderRadius: "20px",
              padding: "4px 14px",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "#818cf8",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            React Redux • First App
          </div>
          <h1
            style={{
              color: "#f1f5f9",
              fontSize: "28px",
              fontWeight: "normal",
              margin: "0 0 8px 0",
              letterSpacing: "-0.5px",
            }}
          >
            Redux Counter
          </h1>
          <p style={{ color: "#64748b", fontSize: "14px", margin: 0 }}>
            Store → Dispatch → Reducer → New State
          </p>
        </div>

        {/* Main Counter Card */}
        <div
          style={{
            background: "#13131a",
            border: "1px solid #1e293b",
            borderRadius: "16px",
            padding: "40px",
            marginBottom: "16px",
          }}
        >
          {/* Count Display */}
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <div
              style={{
                fontSize: "80px",
                fontWeight: "bold",
                color: countColor,
                lineHeight: 1,
                transition: "color 0.3s ease",
                fontFamily: "monospace",
              }}
            >
              {count}
            </div>
            <div style={{ color: "#475569", fontSize: "13px", marginTop: "8px" }}>
              current state
            </div>
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              marginBottom: "12px",
            }}
          >
            <button
              onClick={handleDecrement}
              style={btnStyle("#7f1d1d", "#ef4444", "#fca5a5")}
            >
              − 1
            </button>
            <button
              onClick={handleIncrement}
              style={btnStyle("#14532d", "#22c55e", "#86efac")}
            >
              + 1
            </button>
          </div>

          <button
            onClick={handleBigIncrement}
            style={{
              ...btnStyle("#1e3a5f", "#3b82f6", "#93c5fd"),
              width: "100%",
              marginBottom: "10px",
            }}
          >
            + 10 (with payload)
          </button>

          <button
            onClick={handleReset}
            style={{
              ...btnStyle("#1e1e2e", "#475569", "#94a3b8"),
              width: "100%",
            }}
          >
            ↺ Reset
          </button>
        </div>

        {/* Redux Flow Explainer */}
        <div
          style={{
            background: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              color: "#64748b",
              fontSize: "11px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Redux Data Flow
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {["UI Event", "→", "dispatch()", "→", "Reducer", "→", "New State"].map(
              (item, i) => (
                <div
                  key={i}
                  style={{
                    color: item === "→" ? "#334155" : "#94a3b8",
                    fontSize: item === "→" ? "18px" : "12px",
                    background: item === "→" ? "transparent" : "#1e293b",
                    padding: item === "→" ? "0" : "4px 10px",
                    borderRadius: "6px",
                    fontFamily: item.includes("(") ? "monospace" : "inherit",
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* Action History */}
        <div
          style={{
            background: "#0f172a",
            border: "1px solid #1e293b",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <div
            style={{
              color: "#64748b",
              fontSize: "11px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Dispatched Actions ({history.length})
          </div>
          {history.length === 0 ? (
            <div style={{ color: "#334155", fontSize: "13px", fontStyle: "italic" }}>
              No actions dispatched yet...
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                maxHeight: "80px",
                overflowY: "auto",
              }}
            >
              {history.map((entry, i) => (
                <span
                  key={i}
                  style={{
                    background:
                      entry.startsWith("+")
                        ? "#14532d"
                        : entry.startsWith("-")
                        ? "#7f1d1d"
                        : "#1e1b4b",
                    color:
                      entry.startsWith("+")
                        ? "#86efac"
                        : entry.startsWith("-")
                        ? "#fca5a5"
                        : "#a5b4fc",
                    padding: "2px 10px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontFamily: "monospace",
                  }}
                >
                  {entry}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer note */}
        <p
          style={{
            textAlign: "center",
            color: "#334155",
            fontSize: "12px",
            marginTop: "24px",
          }}
        >
          In real apps, use{" "}
          <span style={{ color: "#4f46e5", fontFamily: "monospace" }}>
            react-redux
          </span>{" "}
          with{" "}
          <span style={{ color: "#4f46e5", fontFamily: "monospace" }}>
            useSelector
          </span>{" "}
          +{" "}
          <span style={{ color: "#4f46e5", fontFamily: "monospace" }}>
            useDispatch
          </span>
        </p>
      </div>
    </div>
  );
}

// Reusable button style helper
function btnStyle(bg, border, color) {
  return {
    background: bg,
    border: `1px solid ${border}`,
    color: color,
    padding: "14px",
    borderRadius: "10px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "opacity 0.15s",
    fontFamily: "monospace",
  };
}