export default function Cart({ cart, removeFromCart, handleCheckout }) {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div style={{ padding: "60px 20px", backgroundColor: "#ffffff" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Your Cart
      </h1>
      <p style={{ textAlign: "center", color: "#666", marginBottom: "30px" }}>
  Selected Items: {cart.length}
</p>

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

    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#f3f3f3",
      }}
    >
      <h2 style={{ marginTop: 0 }}>Total: ${totalPrice}</h2>

      <button
        onClick={handleCheckout}
        style={{
          padding: "12px 20px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  </div>
)}
    </div>
  );
}