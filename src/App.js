import React from "react";
import DnD from "./components/DnD";
import "./App.css"

function App() {
  return (
    <div className="App">
      <DnD />
      <div className="title-container">
        <h1 className="title">Lost at Sea</h1>
        <img src="/images/LifeAtSea.jpg" alt="Lost at Sea" className="splash-image" />
      </div>
    </div>
  );
}

export default App;
