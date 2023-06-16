import React, { useContext } from "react";
import { Navbar } from "./pages/navbar/Navbar";
import { NavbarMobile } from "./pages/navbar/Navbar-mobile";
import { Outlet } from "react-router-dom";

import { Toast } from "./components/confirm-custom/Toast";
import confirmAlertContext from "./context/confirm-alert-context";

function App() {
  const { toastState } = useContext(confirmAlertContext);
  return (
    <div className="App">
      <Navbar />
      <NavbarMobile />
      <Outlet />
      {toastState && <Toast />}
    </div>
  );
}

export default App;
