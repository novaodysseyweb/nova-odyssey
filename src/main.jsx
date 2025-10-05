import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Bootstrap base + your future SCSS overrides
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/custom.scss";

// i18n setup
import "./i18n/i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
