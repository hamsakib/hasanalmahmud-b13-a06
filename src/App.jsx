import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
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
      <div style={{ padding: "30px 20px", textAlign: "center" }}>
  <button
    onClick={() => setView("products")}
    style={{
      padding: "12px 20px",
      marginRight: "10px",
      backgroundColor: view === "products" ? "black" : "#ddd",
      color: view === "products" ? "white" : "black",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
    Product
  </button>

  <button
    onClick={() => setView("cart")}
    style={{
      padding: "12px 20px",
      backgroundColor: view === "cart" ? "black" : "#ddd",
      color: view === "cart" ? "white" : "black",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
   Cart ({cart.length})
  </button>
</div>

  {view === "products" ? (
  <div style={{ padding: "60px 20px", backgroundColor: "#f8f8f8" }}>
    <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
      Our Products
    </h1>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          addedProductId={addedProductId}
        />
      ))}
    </div>
  </div>
) : (
  <Cart
  cart={cart}
  removeFromCart={removeFromCart}
  handleCheckout={handleCheckout}
/>
)}

<Steps />
<Pricing />
<Footer />
    </div>
  );
}

export default App;