import "../styles/hero.css";
import heroImage from "../assets/images/hero.png";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

function Hero() {
  const handleCall = () => {
    window.location.href = "tel:+919880121352";
  };

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919880121352",
      "_blank",
      "noopener,noreferrer"
    );
  };

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

            <button
              type="button"
              className="btn hero-call-button"
              onClick={handleCall}
            >
              <FaPhone />
              <span>Call Now</span>
            </button>

            <button
              type="button"
              className="btn hero-whatsapp-button"
              onClick={handleWhatsApp}
            >
              <FaWhatsapp />
              <span>WhatsApp Us</span>
            </button>

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