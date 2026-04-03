export default function Pricing() {
  return (
    <div style={{ padding: "60px 20px", backgroundColor: "#ffffff" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Pricing Plans
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "25px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>Starter</h2>
          <h1>$0</h1>
          <p>Perfect for trying basic tools</p>
          <ul>
            <li>Basic templates</li>
            <li>Free access</li>
            <li>Limited tools</li>
          </ul>
          <button
            style={{
              marginTop: "15px",
              padding: "12px 18px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "25px",
            backgroundColor: "#f3f3f3",
          }}
        >
          <h2>Pro</h2>
          <h1>$29/month</h1>
          <p>Best for creators and freelancers</p>
          <ul>
            <li>All premium tools</li>
            <li>Priority support</li>
            <li>Advanced features</li>
          </ul>
          <button
            style={{
              marginTop: "15px",
              padding: "12px 18px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Start Pro
          </button>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "25px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>Enterprise</h2>
          <h1>$99/month</h1>
          <p>Best for growing teams and businesses</p>
          <ul>
            <li>Team collaboration</li>
            <li>Custom support</li>
            <li>Full access</li>
          </ul>
          <button
            style={{
              marginTop: "15px",
              padding: "12px 18px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}