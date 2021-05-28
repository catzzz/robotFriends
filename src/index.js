import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore , applyMiddleware, combineReducers} from "redux";
import reportWebVitals from "./reportWebVitals";
import App from "./containers/App";
import "tachyons";
import { Provider,  } from "react-redux";
import { searchRobots , requestRobots} from "./reducers";
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const logger = createLogger();
const rootReducers = combineReducers({searchRobots, requestRobots})
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//  registerServiceWorker();
