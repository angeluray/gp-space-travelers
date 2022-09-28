import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import RocketItemsList from './rocklist';
import { fetchingRocketsInfo } from '../../redux/rocketredux/rcktreducer';
import './Rocket.css';

const MyRockets = () => {
  const rockets = useSelector((state) => state.rockets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchingRocketsInfo());
  }, []);

  return (
    <Container>
      <RocketItemsList rockets={rockets} />
    </Container>
  );
};

export default MyRockets;
