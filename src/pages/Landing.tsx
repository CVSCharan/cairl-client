import Header from "../components/Header";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Transformation from "../components/landing/Transformation";
import Events from "../components/landing/Events";
import CTA from "../components/CTA";
import Contact from "../components/landing/Contact";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <main className="min-h-screen bg-[#F6F6F6] flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="container mx-auto">
          <Hero />
          <About />
          <Transformation />
          <Events />
          <CTA />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Landing;
