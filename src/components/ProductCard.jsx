export default function ProductCard({ product, addToCart, addedProductId }) {
    const isAdded = addedProductId === product.id;
  return (
    <div
  style={{
    border: "1px solid #eee",
    borderRadius: "16px",
    padding: "24px",
    backgroundColor: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "10px",
    }}
  >
    <div style={{ fontSize: "32px" }}>
      {product.icon}
    </div>

    <p
      style={{
        padding: "6px 14px",
        backgroundColor: "#ede9fe",
        color: "#6d28d9",
        borderRadius: "999px",
        fontSize: "13px",
        fontWeight: "600",
        margin: 0,
      }}
    >
      {product.tagType}
    </p>
  </div>

  <h2
    style={{
      margin: "10px 0",
      fontSize: "20px",
      fontWeight: "600",
      color: "#111827",
    }}
  >
    {product.name}
  </h2>

  <p
    style={{
      color: "#666",
      lineHeight: "1.6",
      fontSize: "14px",
      marginBottom: "14px",
    }}
  >
    {product.description}
  </p>

  <h3
    style={{
      marginTop: "15px",
      fontSize: "22px",
      fontWeight: "700",
      color: "#111827",
    }}
  >
    ${product.price}{" "}
    <span style={{ fontSize: "14px", color: "#888", fontWeight: "400" }}>
      / {product.period}
    </span>
  </h3>

  <ul
    style={{
      marginTop: "15px",
      paddingLeft: "20px",
      color: "#444",
    }}
  >
    {product.features.map((feature, index) => (
      <li
        key={index}
        style={{
          marginBottom: "8px",
          fontSize: "14px",
          lineHeight: "1.5",
        }}
      >
        {feature}
      </li>
    ))}
  </ul>

  <button
  onClick={() => addToCart(product)}
  style={{
    marginTop: "20px",
    width: "100%",
    padding: "12px",
    background: isAdded
      ? "#16a34a"
      : "linear-gradient(to right, #7c3aed, #a855f7)",
    color: "white",
    border: "none",
    borderRadius: "999px", // 🔥 fully rounded (pill shape)
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "14px",
  }}
>
  {isAdded ? "Added to Cart" : "Buy Now"}
</button>
</div>
  );
}