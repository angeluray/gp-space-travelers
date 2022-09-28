import React from 'react';
import PropTypes, { Array } from 'prop-types';
import RocketCardItem from './rocketcard';

const RocketItemsList = ({ rockets }) => (
  <ul>
    {rockets.map((rocket) => <RocketCardItem key={rocket.id} rocket={rocket} />)}
  </ul>
);

RocketItemsList.propTypes = {
  rockets: PropTypes.instanceOf(Array).isRequired,
};

export default RocketItemsList;
