import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import reportWebVitals from "./reportWebVitals";
import App from "./containers/App";
import "tachyons";
import { Provider, connect } from "react-redux";
import { searchRobotsReducer } from "./reducers";

const store = createStore(searchRobotsReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
