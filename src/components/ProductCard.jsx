export default function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        backgroundColor: "white",
      }}
    >
      <p
        style={{
          display: "inline-block",
          padding: "6px 12px",
          backgroundColor: "#f3f3f3",
          borderRadius: "20px",
          fontSize: "14px",
          marginBottom: "10px",
        }}
      >
        {product.tagType}
      </p>

      <h2 style={{ margin: "10px 0" }}>{product.name}</h2>

      <p style={{ color: "#555", lineHeight: "1.6" }}>{product.description}</p>

      <h3 style={{ marginTop: "15px" }}>
        ${product.price} / {product.period}
      </h3>

      <ul style={{ marginTop: "15px", paddingLeft: "20px" }}>
        {product.features.map((feature, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {feature}
          </li>
        ))}
      </ul>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 18px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Buy Now
      </button>
    </div>
  );
}