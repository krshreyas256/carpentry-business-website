import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-container">

        <a href="#home" className="logo" onClick={closeMenu}>
          <h2>SV Wood Works & Wooden Plugs</h2>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-links">

            <li>
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>

            <li>
              <a href="#services" onClick={closeMenu}>Services</a>
            </li>

            <li>
              <a href="#gallery" onClick={closeMenu}>Gallery</a>
            </li>

            <li>
              <a href="#clients" onClick={closeMenu}>Clients</a>
            </li>

            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>

            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;