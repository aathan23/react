import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Import the Provider
import { store } from "./store"; // Import the Redux store
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    
    <App />
  </Provider>
);
