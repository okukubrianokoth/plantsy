import React from "react";
import ReactDOM from "react-dom/client"; // ← Note the "/client"
import App from "./components/App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
