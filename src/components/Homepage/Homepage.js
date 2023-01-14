import React from "react";

import Navbar from "../Navbar/Navbar";
import WhatWeDo from "../WhatWeDo.js/WhatWeDo";
import Hero from "../Hero/Hero.js";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhatWeDo />
    </div>
  );
}

export default Homepage;
