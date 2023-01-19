import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

function WhatWeDo() {
  return (
    <Container className="whatWeDo">
      <h1 className="text-center section-heading-white pt-4  ">What We Do</h1>
      <hr></hr>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src="lol.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="caption-font">First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src="constr.png"
            alt="Second slide"
          />

          <Carousel.Caption className="carousel-caption">
            <h1 className="caption-font">Second slide label</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel"
            src="lol.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1 className="caption-font">Third slide label</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default WhatWeDo;
