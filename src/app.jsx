import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import Navbar from "./components/JSX/Navbar";
import Footer from "./components/JSX/footer";
import Button from "./components/JSX/Button";
import Cart from "./components/JSX/Cart";
import { CartProvider } from "./context/CartContext";
import { useCart } from "./context/CartContext";

function AppContent() {
  const { cartOpen } = useCart();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
      <Button />
      {cartOpen && <Cart />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
