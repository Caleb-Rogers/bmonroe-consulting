// Homepage.js

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero.js";
import Services from "./ServicesSection/ServicesSection";
import About from "./AboutSection/AboutSection";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";

function Homepage() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div className="wrapper">
      <Navbar visible={visible}/>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Homepage;
