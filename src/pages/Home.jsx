import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Gallery from "../sections/Gallery";
import Clients from "../sections/Clients";
import About from "../sections/About";
import Contact from "../sections/Contact";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Gallery />
        <Clients />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;