export default function Navbar({ cartCount }) {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="logo">DigiTools</div>

        <nav className="nav-links">
          <a href="#products">Products</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="nav-right">
          <div className="nav-cart-icon-wrap">
            <span className="nav-cart-icon">🛒</span>
            {cartCount > 0 && <span className="nav-cart-count">{cartCount}</span>}
          </div>

          <a href="/" className="login-link">Login</a>

          <a href="#pricing" className="primary-btn nav-start-btn">
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}