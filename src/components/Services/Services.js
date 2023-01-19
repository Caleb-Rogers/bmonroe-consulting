import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Wrench } from "phosphor-react";
function Services() {
  const cardInfo = [
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Zoning, Land Use, & Research",
      text: "Lorem ipsum dolor sit ametincididvenexin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James2",
      text: "Lorem ipsum dolor sit ametincididvenexin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James3",
      text: "Lorem ipsum dolor sit ametincididvenexin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James4",
      text: "Lorem ipsum dolor sit ametincididvenexin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James5",
      text: "Lorem ipsum dolor sit ametincididvenexin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Lebron James6",
      text: "Lorem ipsum dolor sit ametincididvenexin reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <Col sm={3} className="mb-4 service-col p-3  ">
        <Card className="service-card h-100 w-100">
          <div className="px-4 pt-4">
            <Wrench className="" size={52} color="#253d52" weight="fill" />
          </div>

          <Card.Body>
            <Card.Title className="service-title" key="{card.name}">
              {card.title}
            </Card.Title>
            <Card.Text className="service-desc lead" key="{card.name}">
              {card.text}
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

      <Row md={3} className="p-8 w-100">
        {cardInfo.map(renderCard)}
      </Row>
    </Container>
  );
}

export default Services;
