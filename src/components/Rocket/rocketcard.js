import React from 'react';
import PropTypes from 'prop-types';
import { Button, Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rocketredux/rcktreducer';

const RocketCardItem = (props) => {
  const { rocket } = props;
  const {
    images, name, description, reserved, id,
  } = rocket;

  const dispatch = useDispatch();

  const reserveClickEvent = ({ target }) => {
    const { id } = target;
    dispatch(reserveRocket(id));
  };

  return (
    <li id={id} className="d-flex my-3">
      <img src={images} alt="Rocket SpaceX" className="rocket-img" />
      <div className="content px-3 py-5">
        <h3>{ name }</h3>

        {!reserved ? (
          <>
            <p>{description}</p>
            <Button id={id} type="button" variant="primary" onClick={reserveClickEvent}>Reserve Rocket</Button>
          </>
        ) : (
          <>
            <p>
              <Badge className="reserved">Reserved</Badge>
              {description}
            </p>
            <Button id={id} type="button" variant="outline-dark" onClick={reserveClickEvent}>Cancel Reservation</Button>
          </>
        )}
      </div>
    </li>
  );
};

RocketCardItem.defaultProps = {
  rocket: {},
  name: '',
  description: '',
  images: '',
};

RocketCardItem.propTypes = {
  rocket: PropTypes.instanceOf(Object),
  name: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.string,
};

export default RocketCardItem;
