// src/App.js
import { h } from "preact";
import useCounterStore from "./store";

const App = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
