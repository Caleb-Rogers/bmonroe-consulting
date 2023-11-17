import React from "react";

import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero.js";
import Services from "./Services/Services";
import About from "./AboutSection/AboutSection";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";
function Homepage() {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Homepage;
