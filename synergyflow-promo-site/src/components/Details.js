
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Details = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src="https://placehold.co/500x300?text=Feature+Image+1" className="img-fluid rounded mb-4" alt="Feature 1" />
          </Col>
          <Col md={6}>
            <h3>Visualize Your Workflow</h3>
            <p>
              Our intuitive drag-and-drop interface makes it easy to map out your projects and see progress at a glance. Customize your boards to fit your team's unique style.
            </p>
          </Col>
        </Row>
        <Row className="align-items-center mt-5">
          <Col md={6} className="order-md-2">
            <img src="https://placehold.co/500x300?text=Feature+Image+2" className="img-fluid rounded mb-4" alt="Feature 2" />
          </Col>
          <Col md={6} className="order-md-1">
            <h3>Integrate Your Favorite Tools</h3>
            <p>
              SynergyFlow connects with over 100+ popular apps like Slack, Google Drive, and GitHub, so you can keep your entire workflow in one centralized hub.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Details;
