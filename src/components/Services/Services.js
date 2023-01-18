import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Services() {
  const cardInfo = [
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James1",
      text: "THE GOAT",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James2",
      text: "THE GOAT",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James3",
      text: "THE GOAT",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James4",
      text: "THE GOAT",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James5",
      text: "THE GOAT",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James6",
      text: "THE GOAT",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <Col className="mb-4 ">
        <Card className="serviceCard">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };
  return (
    <Container>
      <h1 className="text-center sectionHeadingBlue pt-4  ">Services</h1>
      <hr></hr>
      <Row md={3} className="p-5">
        {cardInfo.map(renderCard)}
      </Row>
    </Container>
  );
}

export default Services;
