import { useState } from "react";

import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

import SectionTitle from "../components/ui/SectionTitle";

import "../styles/contact.css";

function Contact() {
  const [inquiryName, setInquiryName] = useState("");
  const [inquiryMobile, setInquiryMobile] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [inquiryRequirements, setInquiryRequirements] = useState("");
  const [inquiryError, setInquiryError] = useState("");

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

  const handleEmail = () => {
    window.location.href = "mailto:svwoodenplugs@gmail.com";
  };

  const handleInquirySubmit = () => {
    setInquiryError("");

    if (!inquiryName.trim()) {
      setInquiryError("Please enter your name.");
      return;
    }

    if (!inquiryMobile.trim()) {
      setInquiryError("Please enter your mobile number.");
      return;
    }

    if (!inquiryType) {
      setInquiryError("Please select the type of work required.");
      return;
    }

    const message = `Hello, I would like to make a work inquiry.

Name: ${inquiryName.trim()}
Mobile Number: ${inquiryMobile.trim()}

Work Required:
${inquiryType}

Requirements:
${inquiryRequirements.trim() || "Not specified"}`;

    const whatsappUrl = `https://wa.me/919880121352?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <SectionTitle
          title="Contact Us"
          subtitle="Get in touch with us for your carpentry, interior, and wooden plug requirements. We are happy to discuss your project requirements and help you find the right solution."
        />

        {/* =========================
            GET IN TOUCH
        ========================= */}

        <div className="contact-subsection contact-info-section">

          <div className="contact-subsection-title">
            <h3>Get in Touch</h3>
          </div>

          <div className="contact-info-grid">

            <button
              type="button"
              className="contact-info-card contact-action-card"
              onClick={handleCall}
            >
              <div className="contact-icon">
                <FaPhone />
              </div>

              <div className="contact-info-content">
                <h4>Phone Call</h4>
                <p>9880121352</p>
              </div>
            </button>


            <button
              type="button"
              className="contact-info-card contact-action-card"
              onClick={handleWhatsApp}
            >
              <div className="contact-icon">
                <FaWhatsapp />
              </div>

              <div className="contact-info-content">
                <h4>WhatsApp Chat</h4>
                <p>Chat with us</p>
              </div>
            </button>


            <button
              type="button"
              className="contact-info-card contact-action-card"
              onClick={handleEmail}
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div className="contact-info-content">
                <h4>Email Address</h4>
                <p>svwoodenplugs@gmail.com</p>
              </div>
            </button>


            <div className="contact-info-card">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div className="contact-info-content">
                <h4>Shop Address</h4>

                <p>
                  Near NH 66, Kambadakone,
                  Karnataka, India
                </p>
              </div>
            </div>


            <div className="contact-info-card">
              <div className="contact-icon">
                <FaClock />
              </div>

              <div className="contact-info-content">
                <h4>Working Hours</h4>

                <p>
                  Mon - Sat: 9:00 AM - 8:00 PM
                  <br />
                  Sunday by Appointment
                </p>
              </div>
            </div>

          </div>
        </div>


        {/* =========================
            LOWER CONTACT GRID
        ========================= */}

        <div className="contact-lower-grid">

          {/* SHOP LOCATION */}

          <div className="contact-subsection contact-location-section">

            <div className="contact-subsection-title">
              <h3>Shop Location</h3>
            </div>

            <div className="shop-map">
              <iframe
                title="SV Wood Works Shop Location"
                src="https://www.google.com/maps?q=13.8041389,74.6372778&z=17&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="shop-address">
              <FaMapMarkerAlt />

              <p>
                Near NH 66, Kambadakone,
                Karnataka, India
              </p>
            </div>

          </div>


          {/* QUICK WORK INQUIRY */}

          <div
            id="work-inquiry"
            className="contact-subsection contact-inquiry-section"
          >

            <div className="contact-subsection-title">
              <h3>Quick Work Inquiry</h3>
            </div>

            <div className="inquiry-form">

              <div className="inquiry-form-group">
                <label htmlFor="inquiry-name">
                  Name
                </label>

                <input
                  id="inquiry-name"
                  type="text"
                  placeholder="Enter your name"
                  value={inquiryName}
                  onChange={(e) => {
                    setInquiryName(e.target.value);
                    setInquiryError("");
                  }}
                />
              </div>


              <div className="inquiry-form-group">
                <label htmlFor="inquiry-mobile">
                  Mobile Number
                </label>

                <input
                  id="inquiry-mobile"
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={inquiryMobile}
                  onChange={(e) => {
                    setInquiryMobile(e.target.value);
                    setInquiryError("");
                  }}
                />
              </div>


              <div className="inquiry-form-group">
                <label htmlFor="inquiry-type">
                  Type of Work
                </label>

                <select
                  id="inquiry-type"
                  value={inquiryType}
                  onChange={(e) => {
                    setInquiryType(e.target.value);
                    setInquiryError("");
                  }}
                >
                  <option value="">
                    Select a service
                  </option>

                  <option value="Carpentry Services">
                    Carpentry Services
                  </option>

                  <option value="Interior Work (Kitchen, Wardrobes, TV Units)">
                    Interior Work (Kitchen, Wardrobes, TV Units)
                  </option>

                  <option value="Wooden Plugs Supply">
                    Wooden Plugs Supply
                  </option>

                  <option value="Other Woodwork Consultation">
                    Other Woodwork Consultation
                  </option>
                </select>
              </div>


              <div className="inquiry-form-group">
                <label htmlFor="inquiry-requirements">
                  Briefly Describe Your Requirements
                </label>

                <textarea
                  id="inquiry-requirements"
                  rows="5"
                  placeholder="Tell us briefly about your project or requirements..."
                  value={inquiryRequirements}
                  onChange={(e) =>
                    setInquiryRequirements(e.target.value)
                  }
                />
              </div>


              {inquiryError && (
                <p className="inquiry-error">
                  {inquiryError}
                </p>
              )}


              <button
                type="button"
                className="inquiry-whatsapp-button"
                onClick={handleInquirySubmit}
              >
                <FaWhatsapp />

                <span>
                  Send Inquiry on WhatsApp
                </span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;