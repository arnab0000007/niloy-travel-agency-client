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

              Tourism is travel for pleasure or business; also the theory and practice of touring, the business of attracting, accommodating, and entertaining tourists, and the business of operating tours. The World Tourism Organization defines tourism more generally, in terms which go "beyond the common perception of tourism as being limited to holiday activity only", as people "traveling to and staying in places outside their usual environment for not more than one consecutive year for leisure and not less than 24 hours, business and other purposes". Tourism can be domestic (within the traveller's own country) or international, and international tourism has both incoming and outgoing implications on a country's balance of payments.

            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default About;