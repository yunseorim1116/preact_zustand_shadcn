import { render } from "preact";
import useCounterStore from "./store";
import preactLogo from "./assets/preact.svg";
import "./style.css";

export function App() {
  const { count, increment, decrement } = useCounterStore();
  console.log(count);
  return (
    <div>
      <a href="https://preactjs.com" target="_blank">
        <img src={preactLogo} alt="Preact logo" height="160" width="160" />
      </a>
      <h1>Get Started building Vite-powered Preact Apps </h1>
      <section>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Counter: {count}</h1>
          <button onClick={increment} style={{ marginRight: "10px" }}>
            Increment
          </button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </section>
    </div>
  );
}

function Resource(props) {
  return (
    <a href={props.href} target="_blank" class="resource">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </a>
  );
}

render(<App />, document.getElementById("app"));
