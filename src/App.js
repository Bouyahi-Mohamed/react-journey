
import './styles/shared/general.css'
import {Routes,Route} from "react-router-dom"
// Import pages
import Index from './pages/Index';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/checkout';
import Order from './pages/order';
function App() {
  return (
    // define routes
    <>
      <Routes>
        {/* all routes */}
        <Route path="/" element={<Index />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<Order />} />
        {/* 404 Not Found */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
