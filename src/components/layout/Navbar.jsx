import "../../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="container navbar-container">

        <div className="logo">
          <h2>Shree Wood Works</h2>
        </div>

        <nav>

          <ul className="nav-links">

            <li><a href="#home">Home</a></li>

            <li><a href="#services">Services</a></li>

            <li><a href="#gallery">Gallery</a></li>

            <li><a href="#clients">Clients</a></li>

            <li><a href="#about">About</a></li>

            <li><a href="#contact">Contact</a></li>

          </ul>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;