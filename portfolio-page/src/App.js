import React from "react";
import Routing from "./Components/Routing";
import Navbar from "./Components/Navbar";
import "./Styling/reset.css";
import "./Styling/test.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
