import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const RocketCardItem = (props) => {
  const { rocket } = props;
  const {
    images, name, description,
  } = rocket;

  return (
    <li className="d-flex my-3">
      <img src={images} alt="Rocket SpaceX" className="rocket-img" />
      <div className="content px-3 py-5">
        <h3>{ name }</h3>
        <p>{description}</p>
        <Button type="button" variant="primary">Reserve Rocket</Button>
      </div>
    </li>
  );
};

RocketCardItem.propTypes = {
  rocket: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
  }).isRequired,
};

export default RocketCardItem;
