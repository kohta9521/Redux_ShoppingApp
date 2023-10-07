import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// redux
import { createStore } from "redux";

// actions -> increment, decrement
const increment = () => {
  return {
    type: "increment",
  };
};
const decrement = () => {
  return {
    type: "decrement",
  };
};

// reducer
const counterReducer = (state = 0, actions) => {
  switch (actions.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

// store
let store = createStore(counterReducer);

// console.log
store.subscribe(() => console.log(store.getState()));

// dispatch
store.dispatch(increment());
store.dispatch(increment());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
