import React from "react";
import { Navbar } from "./pages/navbar/Navbar";
import { NavbarMobile } from "./pages/navbar/Navbar-mobile";
import { Outlet } from "react-router-dom";
import { Provider } from "./context/mouse-context";

function App() {
  return (
    <div className="App">
      <Provider>
        <Navbar />
        <NavbarMobile />
        <Outlet />
      </Provider>
    </div>
  );
}

export default App;
