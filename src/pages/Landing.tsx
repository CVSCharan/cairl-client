import Header from "../components/Header";
import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import Transformation from "../components/landing/Transformation";
import Events from "../components/landing/Events";
import CTA from "../components/CTA";
import Contact from "../components/landing/Contact";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    // Force scroll to top on component mount
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // "smooth" for animation
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

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
