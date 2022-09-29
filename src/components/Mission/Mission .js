import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Container } from 'react-bootstrap';
import { getMissionsData, JoinMission } from '../../redux/mission/mission';

let savedMissions = false;
function MyMission() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (savedMissions === false) {
      savedMissions = true;
      dispatch(getMissionsData());
    }
  }, [dispatch, getMissionsData]);
  const missions = useSelector((state) => state.mission);

  const handleJoinMission = ({ target }) => {
    const { id } = target;
    dispatch(JoinMission(id));
  };

  return (
    <Container>
      <Table striped bordered hover size="lg" className="container my-5">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td>{mission.name}</td>
              <td>{mission.description}</td>
              <td className="myBtn">
                {!mission.canceled ? (
                  <div className="btns">
                    <tr className="d-flex">
                      <button
                        type="button"
                        className="btn btn-secondary text-white py-3"
                      >
                        NOT A MEMBER
                      </button>
                      <button
                        id={mission.id}
                        onClick={handleJoinMission}
                        type="button"
                        className="btn btn-outline-dark ms-3 py-3"
                      >
                        Join Mission
                      </button>
                    </tr>
                  </div>
                ) : (
                  <div className="btns">
                    <tr className="d-flex">
                      <button type="button" className="btn btn-info text-white py-3">
                        Active Member
                      </button>
                      <button
                        id={mission.id}
                        onClick={handleJoinMission}
                        type="button"
                        className="btn btn-outline-danger ms-3 px-3"
                      >
                        Leave Mission
                      </button>
                    </tr>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default MyMission;
