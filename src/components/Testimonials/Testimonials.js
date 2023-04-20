import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Testimonials() {
  return (
    <div className="testimonials">
      <Container className="pt-4">
        <h1 className="text-center section-heading-blue pt-4">Testimonials</h1>
        <hr></hr>
        <Row md={3}>
          <Col>
            <div className="container">
              <blockquote className="quote-box">
                <p className="quotation-mark px-5">“</p>
                <p className="quote-text px-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit es
                </p>
                <hr></hr>
                <div className="blog-post-actions">
                  <p className="blog-post-bottom pull-left">Abraham Lincoln</p>
                  <p className="blog-post-bottom pull-right">
                    <span className="badge quote-badge">743</span>  
                  </p>
                </div>
              </blockquote>
            </div>
          </Col>
          <Col>
            <div className="container">
              <blockquote className="quote-box">
                <p className="quotation-mark px-5">“</p>
                <p className="quote-text px-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit es
                </p>
                <hr></hr>
                <div className="blog-post-actions">
                  <p className="blog-post-bottom pull-left">Abraham Lincoln</p>
                  <p className="blog-post-bottom pull-right">
                    <span className="badge quote-badge">743</span>  
                  </p>
                </div>
              </blockquote>
            </div>
          </Col>
          <Col>
            <div className="container">
              <blockquote className="quote-box">
                <p className="quotation-mark px-5">“</p>
                <p className="quote-text px-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit es
                </p>
                <hr></hr>
                <div className="blog-post-actions">
                  <p className="blog-post-bottom pull-left">Abraham Lincoln</p>
                  <p className="blog-post-bottom pull-right">
                    <span className="badge quote-badge">743</span>  
                  </p>
                </div>
              </blockquote>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonials;
