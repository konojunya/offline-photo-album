import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createRouter } from "./route";

const supportsHistory = "pushState" in window.history;
const Routes = createRouter();

render(
  <BrowserRouter forceRefresh={!supportsHistory}>{Routes}</BrowserRouter>,
  document.getElementById("app")
);
