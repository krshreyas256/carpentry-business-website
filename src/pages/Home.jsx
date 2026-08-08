import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Gallery from "../components/sections/Gallery";
import Clients from "../components/sections/Clients";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

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