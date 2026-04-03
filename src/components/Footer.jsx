export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#111",
        color: "white",
        padding: "50px 20px",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "30px",
        }}
      >
        <div>
          <h2>DigiTools</h2>
          <p style={{ color: "#bbb", lineHeight: "1.6" }}>
            A digital tools buying platform for creators, freelancers,
            students, and businesses who want smarter online solutions.
          </p>
        </div>

        <div>
          <h3>Product</h3>
          <p style={{ color: "#bbb" }}>Templates</p>
          <p style={{ color: "#bbb" }}>Automation</p>
          <p style={{ color: "#bbb" }}>Content Tools</p>
        </div>

        <div>
          <h3>Company</h3>
          <p style={{ color: "#bbb" }}>About</p>
          <p style={{ color: "#bbb" }}>Blog</p>
          <p style={{ color: "#bbb" }}>Careers</p>
        </div>

        <div>
          <h3>Support</h3>
          <p style={{ color: "#bbb" }}>Help Center</p>
          <p style={{ color: "#bbb" }}>Contact</p>
          <p style={{ color: "#bbb" }}>Terms & Privacy</p>
        </div>
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "30px",
          color: "#888",
          borderTop: "1px solid #333",
          paddingTop: "20px",
        }}
      >
        © 2026 DigiTools. All rights reserved.
      </p>
    </div>
  );
}