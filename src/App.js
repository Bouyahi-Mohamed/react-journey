import "./styles/shared/general.css";
import { Routes, Route } from "react-router-dom";
// Import pages
import Index from "./pages/Index";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/checkout";
import Order from "./pages/order";
import { useContext, useState } from "react";
import nbCartContext from "./context/contextProduit";
function App() {

const [nbCart, setNbCart] = useState(0);

  return (
    // define routes
    <>
    <nbCartContext.Provider value={{ nbCart, setNbCart }}>
      <Routes>
        {/* all routes */}
        <Route path="/" element={<Index />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<Order />} />
        {/* 404 Not Found */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </nbCartContext.Provider>
    </>
  );
}

export default App;
