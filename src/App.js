import React from "react";
import "./css/main.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div id="body">
      <div id="bg-img">
        <div className="overlay"></div>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
