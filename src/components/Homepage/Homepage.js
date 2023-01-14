import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import WhatWeDo from "./WhatWeDo";

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
      <WhatWeDo />
    </div>
  );
}

export default Homepage;
