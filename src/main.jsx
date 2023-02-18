import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Loading from "./Loading";
import store from "./features/store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import NoInternetConnection from "./features/NoInternetConnection";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <NoInternetConnection>
          <App />
        </NoInternetConnection>
      </Provider>
    </Router>
  </React.StrictMode>
);
