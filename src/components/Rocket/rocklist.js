import React from 'react';
import PropTypes, { Object } from 'prop-types';
import RocketCardItem from './rocketcard';

const RocketItemsList = (props) => {
  const { rockets } = props;

  return (
    <ul>
      { rockets.map((rocket) => <RocketCardItem key={rocket.id} rocket={rocket} />)}
    </ul>
  );
};

RocketItemsList.defaultProps = {
  rockets: [],
};

RocketItemsList.propTypes = {
  rockets: PropTypes.instanceOf(Object),
};

export default RocketItemsList;
