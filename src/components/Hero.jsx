import heroImage from "../assets/hero-image.png";
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="hero-pill">✨ New AI Powered Tools Available</div>

          <h1 className="hero-title">Supercharge Your Digital Workflow</h1>

          <p className="hero-text">
            Access premium AI tools, design assets, templates, and productivity
            software all in one place. Start creating faster today.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">Explore Products</button>
            <button className="secondary-btn">Watch Demo</button>
          </div>
        </div>

        <div className="hero-image-wrap">
          <img src={heroImage} alt="Digital workflow" className="hero-image" />
        </div>
      </div>
    </section>
  );
}