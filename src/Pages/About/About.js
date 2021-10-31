import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import about from '../../images/about.jpg';
const About = () => {

  return (
    <Row className="bg-light p-5">
      <h1 className="pb-5">About Niloy Tour Agency</h1>
      <Col lg={6} md={8} sm={8} xs={12} className="m-auto">
        <Card>
          <Card.Img className="img-fluid" variant="top" src={about} />
          <Card.Body>
            <Card.Title>Welcome to Niloy Tour Agency</Card.Title>
            <Card.Text>
              Niloy Dental Care is a valued private dentist in Dhaka serving patients at mirpur and uttara dentists. We are a dedicated Dhaka dentist, providing excellence in dentistry using professional and affordable treatments. As your local dentist in Dhaka, we combine general dentistry with cosmetic and specialist treatments. We have been named Best Dhaka Dental Practice and several of our Bangladesh dentists have been nominated and awarded Best Young BD Dentist by the industry standards.

              We offer everything from general dental treatments to complex full mouth rehabilitation including dental implants and orthodontics. We are also dental phobia certified for treating very nervous patients with care and compassion, making you feel as comfortable as possible. We offer a pleasant experience at our two leading Mirpur, Dhaka dentist locations.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default About;