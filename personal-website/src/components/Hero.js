import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="hero-section bg-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpojJtzn6a3y_MQ5G05vrswrQ259T0FcTfg&s/200"
              roundedCircle
              alt="Profile Picture"
              style={{ width: '200px', height: '200px' }}  
            />
          </Col>
          <Col md={8}>
            <h1 className="hero-title">Assistant Professor Saltuk Buğra Selçuklu</h1>
            <p className="text-muted">
              I am an Assistant Professor at the Energy Systems Engineering Department with a Ph.D. in Industrial and Systems Engineering. 
              My research and teaching interests include Electricity Markets, Machine Learning, Energy Systems, Energy Planning and Management, Operations Research, Simulation modeling, and Optimization under Uncertainty.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
