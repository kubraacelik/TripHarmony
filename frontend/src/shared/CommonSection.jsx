import React from "react";
import "./CommonSection.css";
import { Container, Row, Col } from "reactstrap";

const CommonSection = ({ title }) => {
  return (
    <section
      className="common__section"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url("/images/tour.jpg") no-repeat center center`,
        backgroundSize: "cover",
        height: "300px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
      }}
    >
      <Container>
        <Row>
          <Col lg="12">
            <h1>{title}</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CommonSection;
