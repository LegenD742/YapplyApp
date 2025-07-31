

import React from "react";
import ReactDOM from "react-dom/client"; // Correct import
import App from "./App";
import "./index.css";

// ✅ New React 18 rendering method
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
