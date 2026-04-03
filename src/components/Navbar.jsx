export default function Navbar({ cartCount }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      borderBottom: "1px solid #ddd"
    }}>
      <h2>DigiTools</h2>

      <div>
        <span style={{ marginRight: "20px" }}>Products</span>
        <span style={{ marginRight: "20px" }}>Pricing</span>
        <span>Cart ({cartCount})</span>
      </div>
    </div>
  );
}