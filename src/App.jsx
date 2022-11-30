import React from "react";
import ReactDOM from "react-dom";
import { Counter, counter } from "./components/Counter";

import "./index.css";

const App = () => (
  <div className="container">
    <h2>ciao</h2>
     <Counter/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
