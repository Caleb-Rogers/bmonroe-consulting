import React from "react";

import Navbar from "../Navbar/Navbar";
import WhatWeDo from "../WhatWeDo.js/WhatWeDo";
import Hero from "../Hero/Hero.js";
import Services from "../Services/Services";
import AboutMe from "../AboutMe/AboutMe";
import Testimonials from "../Testimonials/Testimonials";
function Homepage() {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Services />
      <AboutMe />
      <Testimonials />
    </div>
  );
}

export default Homepage;
