import React from "react";
import { Navbar } from "./pages/navbar/Navbar";
import { Description } from "./pages/description/Description";
import { ProductsPage } from "./pages/products/Products-page";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Description />
      <ProductsPage />
    </div>
  );
}

export default App;
