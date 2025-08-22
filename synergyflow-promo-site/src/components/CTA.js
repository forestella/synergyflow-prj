
import React from 'react';
import { Container, Button } from 'react-bootstrap';

const CTA = () => {
  return (
    <section className="py-5 text-center">
      <Container>
        <h2>Ready to Boost Your Team's Productivity?</h2>
        <p className="lead">Join thousands of teams who are already shipping faster and collaborating better with SynergyFlow.</p>
        <Button variant="success" size="lg">Start Your Free Trial</Button>
      </Container>
    </section>
  );
}

export default CTA;
