import { render } from "preact";

import "./index.css";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
export function App() {
  return (
    <div>
      gd
      <Button variant="outline">Hover</Button>
      <Badge variant="outline">Badge</Badge>
      gd
      {/* <a href="https://preactjs.com" target="_blank">
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
      </section> */}
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
