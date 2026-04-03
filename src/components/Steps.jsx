export default function Steps() {
  return (
    <div style={{ padding: "60px 20px", backgroundColor: "#f8f8f8" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        How It Works
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            textAlign: "center",
          }}
        >
          <h2>Step 1</h2>
          <h3>Create Account</h3>
          <p>Sign up and get access to premium digital tools and resources.</p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            textAlign: "center",
          }}
        >
          <h2>Step 2</h2>
          <h3>Choose Product</h3>
          <p>Browse products and add the tools you need to your cart.</p>
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "12px",
            border: "1px solid #ddd",
            textAlign: "center",
          }}
        >
          <h2>Step 3</h2>
          <h3>Checkout & Use</h3>
          <p>Complete checkout and start using your selected digital tools.</p>
        </div>
      </div>
    </div>
  );
}