import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";

import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

store.dispatch({
    type: 'ADD_ENGINEER',
    name: 'Kyle',
    id: 2,
})

store.dispatch({
    type: 'ADD_ENGINEER',
    name: 'Json',
    id: 3,
})