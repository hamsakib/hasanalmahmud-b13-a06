export default function Cart({ cart, removeFromCart }) {
  return (
    <div style={{ padding: "60px 20px", backgroundColor: "#ffffff" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>
          Your cart is empty
        </p>
      ) : (
        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {cart.map((item, index) => (
            <div
  key={index}
  style={{
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    gap: "20px",
    flexWrap: "wrap",
  }}
>
  <div>
    <h3 style={{ margin: 0 }}>{item.name}</h3>
    <p style={{ margin: "5px 0 0 0" }}>${item.price}</p>
  </div>

  <button
    onClick={() => removeFromCart(index)}
    style={{
      padding: "10px 16px",
      backgroundColor: "crimson",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
    Remove
  </button>
</div>
          ))}
        </div>
      )}
    </div>
  );
}