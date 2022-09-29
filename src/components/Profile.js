import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup, Container } from 'react-bootstrap';

const MyProfile = () => {
  const myRockets = useSelector((state) => state.rockets);
  const myMissions = useSelector((state) => state.mission);
  const myReservedRockets = myRockets.filter((rocket) => rocket.reserved === true);
  const myBookedMissions = myMissions.filter((mission) => mission.canceled === true);

  return (
    <Container className="d-flex justify-content-center mt-5">
      <ListGroup className="w-25 me-5">
        <h2>My Missions</h2>
        {!myBookedMissions.length ? (
          <p className="text-danger">You haven&apos;t select any mission yet</p>
        ) : (
          myBookedMissions.map((mission) => (
            <ListGroup.Item key={mission.id}>{mission.name}</ListGroup.Item>
          ))
        )}
      </ListGroup>
      <ListGroup className="w-25">
        <h2>My Rockets</h2>
        {!myReservedRockets.length ? (<p className="text-danger">You haven&apos;t select any rocket yet</p>
        ) : (
          myReservedRockets.map((rocket) => (
            <ListGroup.Item key={rocket.id}>{rocket.name}</ListGroup.Item>
          ))
        )}
      </ListGroup>
    </Container>
  );
};

export default MyProfile;
