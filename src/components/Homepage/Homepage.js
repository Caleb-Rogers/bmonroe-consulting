import React from "react";

import Navbar from "../Navbar/Navbar";
import WhatWeDo from "../WhatWeDo.js/WhatWeDo";
import Hero from "../Hero/Hero.js";
import Services from "../Services/Services";
import AboutMe from "../AboutMe/AboutMe";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Services />
      <AboutMe />
    </div>
  );
}

export default Homepage;
