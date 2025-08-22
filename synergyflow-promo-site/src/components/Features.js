
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Features = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="text-center">
          <Col md={4}>
            <Card className="p-3 mb-4">
              <Card.Body>
                <Card.Title>AI-Powered Insights</Card.Title>
                <Card.Text>
                  Automate your workflows and get smart suggestions to optimize your team's performance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3 mb-4">
              <Card.Body>
                <Card.Title>Seamless Collaboration</Card.Title>
                <Card.Text>
                  Share documents, track progress, and communicate with your team all in one place.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3 mb-4">
              <Card.Body>
                <Card.Title>Secure & Reliable</Card.Title>
                <Card.Text>
                  Your data is protected with enterprise-grade security and a 99.9% uptime guarantee.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Features;
