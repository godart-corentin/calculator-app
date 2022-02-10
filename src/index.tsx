import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBackspace,
  faDivide,
  faMoon,
  faMultiply,
  faPlus,
  faSubtract,
  faSun,
  faHand,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faSun,
  faMoon,
  faBackspace,
  faDivide,
  faMultiply,
  faSubtract,
  faPlus,
  faHand
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
