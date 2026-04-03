export default function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <h2 className="section-title">Simple, Transparent Pricing</h2>
        <p className="section-subtitle">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Starter</h3>
            <div className="pricing-price">$0</div>
            <p>Perfect for getting started</p>
            <ul className="pricing-list">
              <li>Access to 10 free tools</li>
              <li>Basic templates</li>
              <li>Community support</li>
            </ul>
            <button className="buy-btn">Get Started Free</button>
          </div>

          <div className="pricing-card featured">
            <h3>Pro</h3>
            <div className="pricing-price">$29</div>
            <p>Best for professionals</p>
            <ul className="pricing-list">
              <li>Access to all premium tools</li>
              <li>Unlimited templates</li>
              <li>Priority support</li>
            </ul>
            <button className="secondary-btn">Start Pro Trial</button>
          </div>

          <div className="pricing-card">
            <h3>Enterprise</h3>
            <div className="pricing-price">$99</div>
            <p>Built for businesses</p>
            <ul className="pricing-list">
              <li>Everything in Pro</li>
              <li>Team collaboration</li>
              <li>Custom integration</li>
            </ul>
            <button className="buy-btn">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}