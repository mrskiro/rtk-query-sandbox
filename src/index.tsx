import React from "react";
import ReactDOM from "react-dom";
import * as ReactRedux from "react-redux";
import "./index.css";
import App from "./App";

import * as Store from "~/store";

ReactDOM.render(
  <React.StrictMode>
    <ReactRedux.Provider store={Store.store}>
      <App />
    </ReactRedux.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
