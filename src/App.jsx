import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

import { products } from "./data/products";


function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");
  const [addedProductId, setAddedProductId] = useState(null);
  const addToCart = (product) => {
  setCart([...cart, product]);
  setAddedProductId(product.id);
  toast.success(`${product.name} added to cart`);

  setTimeout(() => {
    setAddedProductId(null);
  }, 1500);
  };
  const removeFromCart = (indexToRemove) => {
  const removedItem = cart[indexToRemove];
  const updatedCart = cart.filter((item, index) => index !== indexToRemove);
  setCart(updatedCart);
  toast.info(`${removedItem.name} removed from cart`);
  };
  const handleCheckout = () => {
  if (cart.length === 0) {
    toast.error("Your cart is already empty");
    return;
  }

  setCart([]);
  toast.success("Checkout complete");
};
  return (
    <div>
      <ToastContainer />
      <Navbar cartCount={cart.length} />
      <Hero />
      <Stats />
      <section className="products-section" id="products">
  <div className="container">
    <h2 className="section-title">Premium Digital Tools</h2>
    <p className="section-subtitle">
      Choose from our curated collection of premium digital products designed to
      boost your productivity and creativity.
    </p>

    <div className="toggle-area">
      <div className="toggle-wrap">
        <button
          onClick={() => setView("products")}
          className={`toggle-btn ${view === "products" ? "active" : ""}`}
        >
          Product
        </button>

        <button
          onClick={() => setView("cart")}
          className={`toggle-btn ${view === "cart" ? "active" : ""}`}
        >
          Cart ({cart.length})
        </button>
      </div>
    </div>

    {view === "products" ? (
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            addedProductId={addedProductId}
          />
        ))}
      </div>
    ) : (
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        handleCheckout={handleCheckout}
      />
    )}
  </div>
</section>
<Steps/>
<Pricing />
<Cta/>
<Footer />
    </div>
  );
}

export default App;