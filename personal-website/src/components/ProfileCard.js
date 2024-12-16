import React from 'react';
import { Card } from 'react-bootstrap';

const ProfileCard = () => {
  return (
    <Card style={{ width: '18rem' }} className="mx-auto">
      <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Profile" />
      <Card.Body>
        <Card.Title>Professor Name</Card.Title>
        <Card.Text>
          A brief introduction or biography of the professor goes here. This text can be customized.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
