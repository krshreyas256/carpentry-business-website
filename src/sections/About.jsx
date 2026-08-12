import { FaAward, FaClock, FaTools, FaHandshake } from "react-icons/fa";

import SectionTitle from "../components/ui/SectionTitle";

import "../styles/about.css";

function About() {
  const reasons = [
    {
      icon: <FaAward />,
      title: "Quality Workmanship",
      description:
        "Every project is crafted with precision and attention to detail.",
    },
    {
      icon: <FaClock />,
      title: "Timely Delivery",
      description:
        "We respect your time and work to deliver projects on schedule.",
    },
    {
      icon: <FaTools />,
      title: "Experienced Craftsmanship",
      description:
        "Years of hands-on experience in carpentry and interior woodwork.",
    },
    {
      icon: <FaHandshake />,
      title: "Reliable Service",
      description:
        "Trusted by homeowners, builders, businesses, and contractors.",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-card">

          <SectionTitle
            title="About SV Wood Works"
            subtitle="Crafting quality woodwork with skill, reliability, and attention to detail."
          />

          <div className="about-content">

            <div className="about-block">
              <h3>Who We Are</h3>
              <p>
                SV Wood Works & Wooden Plugs is a trusted carpentry and
                interior work business serving homes, businesses, and
                contractors across Karnataka. We specialize in custom
                furniture, modular interiors, and reliable wooden plug
                supply for electrical and carpentry fittings.
              </p>
            </div>

            <div className="about-block">
              <h3>Our Experience</h3>
              <p>
                With years of hands-on experience in carpentry and
                interior woodwork, our team brings skilled craftsmanship
                to every project. From single furniture pieces to
                complete kitchen and wardrobe installations, we have
                successfully delivered hundreds of projects for
                satisfied clients.
              </p>
            </div>

            <div className="about-block">
              <h3>Our Mission</h3>
              <p>
                Our mission is to provide high-quality carpentry and
                interior solutions that combine durability,
                functionality, and aesthetic appeal. We believe every
                space deserves well-crafted woodwork that stands the
                test of time.
              </p>
            </div>

            <div className="about-block">
              <h3>Commitment to Quality</h3>
              <p>
                We use premium materials and proven techniques to ensure
                every project meets our high standards. Whether it is a
                custom wardrobe, a modular kitchen, or bulk wooden plug
                orders, quality is never compromised.
              </p>
            </div>

            <div className="about-block">
              <h3>Service Locations</h3>
              <p>
                Based near NH 66 in Kambadakone, Karnataka, we serve
                clients across the region including nearby towns and
                cities. Contact us to discuss your project requirements
                and we will be happy to assist.
              </p>
            </div>

          </div>

          {/* Why Choose Us */}

          <div className="why-choose-us">

            <SectionTitle
              title="Why Choose Us"
            />

            <div className="why-choose-grid">

              {reasons.map((reason, index) => (
                <div
                  className="why-choose-card"
                  key={index}
                >
                  <div className="why-choose-icon">
                    {reason.icon}
                  </div>

                  <h3>{reason.title}</h3>

                  <p>{reason.description}</p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;