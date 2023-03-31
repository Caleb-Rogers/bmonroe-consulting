import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Wrench,
  GearSix,
  Barricade,
  Prohibit,
  Recycle,
  TrafficCone,
  Warning,
  Lightning,
  Cube,
  Leaf,
  Mountains,
  PenNib,
} from "phosphor-react";
function Services() {
  const cardInfo = [
    {
      id: 1,
      image: "../public/research-icon.png",
      title: "Zoning, Land Use, & Research",
      text: "Zoning and land use research, Location analysis, Site plan approvals, Conditional use permits, Zoning ordinance appeals, Zoning ordinance variances, Zoning ordinance amending, Property re-zoning, Architectural review approvals, Public Works and Transportation Approvals, Zoning violations.",
    },
    {
      id: 2,
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Code Enforcement",
      text: "Demolition permits, Building Codes Analysis, Building Permits, Occupancy permits, Special Permits, Temporary Structures permits, Code violations",
    },
    {
      id: 3,
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Design",
      text: "Pre-design work to ensure compliance with the Code, Site plan design, Pre-design work for engineers and architects",
    },
    {
      id: 4,
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Environment Permitting & Meeting Representation",
      text: "Architectural Review Boards, Historic District Commissions, Planning Commissions, Town Boards, Zoning Board of Appeals, Building Code Board of Appeals, City and County Councils, State Regulatory Agencies",
    },
    {
      id: 5,
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Energy Analysis",
      text: "Certified BPI Infiltration and Duct Leakage(Blower Door Testing), Home efficiency analysis",
    },
    {
      id: 6,
      image: "https://i.insider.com/50f967f56bb3f7830a000019",
      title: "Land management",
      text: "Analyzing feasibility for the highest and best use for the asset or land, Researching property history and allowable uses, Coordinating permitting, Planning the scope, phasing, and project delivery method, Managing properties for absentee landowners",
    },
  ];
  const selectIcon = (index) => {
    let iconSize = 48;
    if (index === 1) {
      return <PenNib size={iconSize} color="#253d52" weight="fill" />;
    } else if (index === 2) {
      return <Barricade size={iconSize} color="#253d52" weight="fill" />;
    } else if (index === 3) {
      return <Cube size={iconSize} color="#253d52" weight="fill" />;
    } else if (index === 4) {
      return <Leaf size={iconSize} color="#253d52" weight="fill" />;
    } else if (index === 5) {
      return <Lightning size={iconSize} color="#253d52" weight="fill" />;
    } else if (index === 6) {
      return <Mountains size={iconSize} color="#253d52" weight="fill" />;
    } else {
      return (
        <Wrench className="" size={iconSize} color="#253d52" weight="fill" />
      );
    }
  };
  const renderCard = (card, index) => {
    return (
      <Col sm={3} className="mb-4 service-col p-3  ">
        <Card className="service-card h-100 w-100">
          <div className="px-5 pt-4">{selectIcon(card.id)}</div>

          <Card.Body>
            <Card.Title className="service-title px-4" key="{card.id}">
              {card.title}
            </Card.Title>
            <Card.Text className="service-desc lead px-5" key="{card.id}">
              {card.text}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container className="p-4">
      <h1 className="text-center section-heading-blue pt-4  ">Services</h1>
      <hr></hr>

      <Row md={3} className="p-8 w-100">
        {cardInfo.map(renderCard)}
      </Row>
    </Container>
  );
}

export default Services;
