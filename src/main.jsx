import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // ✅ Import the main App component
import "./index.css"; // ✅ Optional, for global styling

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
