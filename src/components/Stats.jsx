export default function Stats() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "40px 20px",
        backgroundColor: "#111",
        color: "white",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2 style={{ margin: 0, fontSize: "32px" }}>50K+</h2>
        <p style={{ marginTop: "8px" }}>Active Users</p>
      </div>

      <div style={{ textAlign: "center" }}>
        <h2 style={{ margin: 0, fontSize: "32px" }}>200+</h2>
        <p style={{ marginTop: "8px" }}>Premium Tools</p>
      </div>

      <div style={{ textAlign: "center" }}>
        <h2 style={{ margin: 0, fontSize: "32px" }}>4.9</h2>
        <p style={{ marginTop: "8px" }}>Average Rating</p>
      </div>
    </div>
  );
}