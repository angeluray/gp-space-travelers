import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup, Container } from 'react-bootstrap';

const MyProfile = () => {
  const missions = useSelector((state) => state.mission);
  const filteredMissions = missions.filter((mission) => mission.canceled === true);

  return (
    <Container className="d-flex justify-content-center mt-5">
      <ListGroup className="w-25 me-5">
        <h2>My Missions</h2>
        {filteredMissions.length === 0 ? (
          <p className="text-danger">Please would you like to join the mission with Favour?</p>
        ) : (
          filteredMissions.map((mission) => (
            <ListGroup.Item key={mission.id}>{mission.name}</ListGroup.Item>
          ))
        )}
      </ListGroup>
    </Container>
  );
};

export default MyProfile;
