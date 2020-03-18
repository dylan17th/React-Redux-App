import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import App from "./App";
import {BrowserRouter as Router} from 'react-router-dom';


const store = createStore(reducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);


