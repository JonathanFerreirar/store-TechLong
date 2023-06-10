import React from "react";
import { Navbar } from "./pages/navbar/Navbar";
import { NavbarMobile } from "./pages/navbar/Navbar-mobile";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <NavbarMobile />
      <Outlet />
    </div>
  );
}

export default App;
