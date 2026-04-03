export default function Footer() {
  return (
    <footer className="footer" id="faq">
      <div className="container footer-grid">
        <div className="footer-col">
          <h2 style={{ marginTop: 0 }}>DigiTools</h2>
          <p>
            Premium digital tools for creators, professionals, and businesses
            with a smarter workflow.
          </p>
        </div>

        <div className="footer-col">
          <h4>Product</h4>
          <a href="/">Features</a>
          <a href="/">Pricing</a>
          <a href="/">Templates</a>
          <a href="/">Integrations</a>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <a href="/">About</a>
          <a href="/">Blog</a>
          <a href="/">Careers</a>
          <a href="/">Press</a>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <a href="/">Documentation</a>
          <a href="/">Help Center</a>
          <a href="/">Community</a>
          <a href="/">Contact</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <div>© 2026 DigiTools. All rights reserved.</div>
        <div>Privacy Policy · Terms of Service · Cookies</div>
      </div>
    </footer>
  );
}