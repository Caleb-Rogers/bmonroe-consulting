import React from "react";

import Navbar from "../Navbar/Navbar";
import WhatWeDo from "../WhatWeDo.js/WhatWeDo";
import Hero from "../Hero/Hero.js";

function Homepage() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Monroe Consulting</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/contact">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Hero />
      <WhatWeDo />
    </div>
  );
}

export default Homepage;
