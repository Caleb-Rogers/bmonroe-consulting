import React from "react";

import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero.js";
import Services from "./Services/Services";
import AboutMe from "./AboutMe/AboutMe";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";
function Homepage() {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Homepage;
