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
          <a href="/" className="login-link">Login</a>
          <button className="primary-btn">
            Cart <span className="cart-badge">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  );
}