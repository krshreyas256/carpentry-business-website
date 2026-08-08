import "../styles/hero.css";
import heroImage from "../assets/images/hero.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-tag">
            Trusted Carpentry & Interior Experts
          </span>

          <h1>
            Transforming Wood
            <br />
            Into Beautiful Spaces
          </h1>

          <p>
            We specialize in custom furniture, modular kitchens,
            wardrobes, TV units, wooden fittings, and premium
            wooden plug manufacturing with quality craftsmanship
            and reliable service.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn">
              Contact Us
            </a>

            <a href="#gallery" className="btn btn-secondary">
              View Gallery
            </a>
          </div>

        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Carpentry Work" />
        </div>

      </div>
    </section>
  );
}

export default Hero;