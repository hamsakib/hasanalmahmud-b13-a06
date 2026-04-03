export default function Cta() {
  return (
    <section className="section cta" id="testimonials">
      <div className="container">
        <h2 className="cta-title">Ready To Transform Your Workflow?</h2>
        <p className="cta-text">
          Join thousands of professionals who are already using DigiTools to
          work smarter and faster.
        </p>

        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <button className="secondary-btn">Explore Products</button>
          <button
            className="outline-btn"
            style={{ color: "white", borderColor: "rgba(255,255,255,0.35)" }}
          >
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
}