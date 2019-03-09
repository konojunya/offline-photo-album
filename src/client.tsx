import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createRouter } from "./route";
import { configureStore } from "./context";
import { createBrowserHistory } from "history";

const supportsHistory = "pushState" in window.history;
const Routes = createRouter();

const history = createBrowserHistory();
const store = configureStore(history, {});

/**
 * ServiceWorker
 */
// navigator.serviceWorker.register("./sw.js", { scope: "./" }).then((reg) => {
//   reg.update();
// });

render(
  <Provider store={store}>
    <BrowserRouter forceRefresh={!supportsHistory}>{Routes}</BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
