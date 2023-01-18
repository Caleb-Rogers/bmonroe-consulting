import React from "react";

import Navbar from "../Navbar/Navbar";
import WhatWeDo from "../WhatWeDo.js/WhatWeDo";
import Hero from "../Hero/Hero.js";
import Services from "../Services/Services";
function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Services />
    </div>
  );
}

export default Homepage;
