import React from "react";

import Navbar from "../Navbar/Navbar";
import WhatWeDo from "../WhatWeDo.js/WhatWeDo";
import Hero from "../Hero/Hero.js";
import AboutMe from "../AboutMe/AboutMe";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <AboutMe />
    </div>
  );
}

export default Homepage;
