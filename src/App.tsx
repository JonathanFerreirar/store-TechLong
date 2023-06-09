import React from "react";
import { Navbar } from "./pages/navbar/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
