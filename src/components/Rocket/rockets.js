import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import RocketItemsList from './rocklist';
import rocketimg from '../images/rockets-image.jpg';

const MyRockets = () => {
  const [rockets] = useState([
    {
      id: 1,
      name: 'Falcon 1',
      description: 'This is the largest rocket.',
      images: rocketimg,
    },
    {
      id: 2,
      name: 'Falcon 2',
      description: 'This is the largest rocket.',
      images: rocketimg,
    },
    {
      id: 3,
      name: 'Falcon 3',
      description: 'This is the faster rocket.',
      images: rocketimg,
    },
  ]);

  return (
    <Container>
      <RocketItemsList rockets={rockets} />
    </Container>
  );
};

export default MyRockets;
