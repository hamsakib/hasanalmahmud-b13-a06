import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
  setCart([...cart, product]);
  };
  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Hero />
      <Stats />

      <div style={{ padding: "60px 20px", backgroundColor: "#f8f8f8" }}>
        <p style={{ textAlign: "center", marginBottom: "10px" }}>
          Cart Items: {cart.length}
        </p>
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;