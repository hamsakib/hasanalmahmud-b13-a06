export default function Steps() {
  return (
    <section className="section steps-section" id="features">
      <div className="container">
        <h2 className="section-title">Get Started In 3 Steps</h2>
        <p className="section-subtitle">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-badge">01</div>
            <div className="step-icon-wrap">
              <div className="step-icon">👤</div>
            </div>
            <h3>Create Account</h3>
            <p>Sign up for free in seconds. No credit card required to get started.</p>
          </div>

          <div className="step-card">
            <div className="step-badge">02</div>
            <div className="step-icon-wrap">
              <div className="step-icon">📦</div>
            </div>
            <h3>Choose Products</h3>
            <p>Browse our curated tools and select the products that fit your needs.</p>
          </div>

          <div className="step-card">
            <div className="step-badge">03</div>
            <div className="step-icon-wrap">
              <div className="step-icon">🚀</div>
            </div>
            <h3>Start Creating</h3>
            <p>Download and start using your premium tools immediately after checkout.</p>
          </div>
        </div>
      </div>
    </section>
  );
}