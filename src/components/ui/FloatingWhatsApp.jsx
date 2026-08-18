import { FaWhatsapp } from "react-icons/fa";
import "../../styles/floating-whatsapp.css";

function FloatingWhatsApp() {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919880121352",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      type="button"
      className="floating-whatsapp"
      onClick={handleWhatsApp}
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp />

      <span>WhatsApp</span>
    </button>
  );
}

export default FloatingWhatsApp;