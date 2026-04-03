export default function Steps() {
  return (
    <section className="section" id="features">
      <div className="container">
        <h2 className="section-title">Get Started In 3 Steps</h2>
        <p className="section-subtitle">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="steps-grid">
          <div className="step-card">
            <div className="step-icon">01</div>
            <h3>Create Account</h3>
            <p>Sign up for free and access your dashboard in a few clicks.</p>
          </div>

          <div className="step-card">
            <div className="step-icon">02</div>
            <h3>Choose Products</h3>
            <p>Browse our curated tools and select the ones that fit your needs.</p>
          </div>

          <div className="step-card">
            <div className="step-icon">03</div>
            <h3>Start Creating</h3>
            <p>Download and start using your premium tools immediately.</p>
          </div>
        </div>
      </div>
    </section>
  );
}