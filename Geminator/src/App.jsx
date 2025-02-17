// import "./App.css";
import React from "react";
import GameBody from "./components/GameBody.jsx";
import GameHeader from "./components/GameHeader.jsx"
import GameFooter from "./components/GameFooter.jsx"
import FloatingDots from "./components/FloatingDots.jsx"

function App() {
  return (
    <div className="flex flex-col min-h-screen relative justify-between">
      <FloatingDots/>
      <GameHeader/>
      <GameBody/>
      <GameFooter/>
    </div>
  )
}

export default App;
