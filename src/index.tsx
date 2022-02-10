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

import { ThemeProvider } from "./context/ThemeContext";

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
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
