export default function Hero() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "60px 20px",
        gap: "40px",
        flexWrap: "wrap",
      }}
    >
      <div style={{ flex: "1", minWidth: "280px" }}>
        <h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
          Buy Smart Digital Tools For Modern Work
        </h1>

        <p style={{ fontSize: "18px", color: "#555", marginBottom: "25px", lineHeight: "1.6" }}>
          Explore premium templates, AI tools, automation kits, and digital assets
          that help creators, freelancers, and businesses work faster and better.
        </p>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <button
            style={{
              padding: "12px 20px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Explore Products
          </button>

          <button
            style={{
              padding: "12px 20px",
              backgroundColor: "white",
              color: "black",
              border: "1px solid #ccc",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            View Pricing
          </button>
        </div>
      </div>

      <div
        style={{
          flex: "1",
          minWidth: "280px",
          height: "300px",
          backgroundColor: "#f3f3f3",
          borderRadius: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          color: "#777",
        }}
      >
        Banner Image / Visual
      </div>
    </div>
  );
}