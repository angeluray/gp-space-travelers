import React from 'react';
import { Table } from 'react-bootstrap';

const Mission = () => (
  <>
    <Table striped bordered hover size="lg" className="container my-5">
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <div className="btns">
            <tr>
              <button type="button" className="btn btn-secondary ms-3">
                NOT A MEMBER
              </button>
              <button type="button" className="btn btn-outline-dark ms-3">
                Join Mission
              </button>
            </tr>
          </div>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <div className="btns">
            <tr>
              <button type="button" className="btn btn-info ms-3">
                NOT A MEMBER
              </button>
              <button type="button" className="btn btn-outline-danger ms-3">
                Join Mission
              </button>
            </tr>
          </div>
        </tr>
      </tbody>
    </Table>
  </>
);

export default Mission;
