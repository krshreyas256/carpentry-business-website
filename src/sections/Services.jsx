import "../styles/services.css";
import { FaHammer, FaCouch } from "react-icons/fa";
import WoodenPlugIcon from "../components/ui/WoodenPlugIcon";
import SectionTitle from "../components/ui/SectionTitle";

function Services() {
  const services = [
    {
      icon: <FaHammer />,
      title: "Carpentry Services",
      description:
        "Custom furniture, repairs, fittings, and practical woodwork for homes, offices, and commercial spaces.",
    },
    {
      icon: <FaCouch />,
      title: "Interior Work",
      description:
        "Kitchen setups, wardrobes, TV units, partitions, and smart interior wood solutions designed to suit your space.",
    },
    {
      icon: <WoodenPlugIcon />,
      title: "Wooden Plug Supply",
      description:
        "Durable wooden plugs trusted by electricians and carpenters for reliable fittings and long-lasting performance.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <SectionTitle
          title="Our Services"
          subtitle="We provide high-quality carpentry and interior solutions with precision, durability, and attention to detail."
        />

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <h3>Need a Custom Solution?</h3>

          <p>
            We handle projects of all sizes — from single furniture pieces to
            complete interior setups.
          </p>

          <a href="#work-inquiry" className="services-cta-button">
            Request a Quote
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;