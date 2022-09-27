import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Logo from './world.png';

function Navigation() {
  const activeLink = ({ isActive }) => ({
    color: isActive ? '#0d6efd' : '',
    paddingBottom: isActive ? '0.25rem' : '',
    borderBottom: isActive ? '3px solid #0d6efd' : '',
  });

  return (
    <Navbar bg="light" expand="lg" className="border-bottom py-3">
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <img src={Logo} alt="Logo" className="logo" />
          <h2 className="ps-3">Space-Travelers-Hub</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#rockets">
              <NavLink style={activeLink} className="text-primary link" to="/">Rockets</NavLink>
            </Nav.Link>
            <Nav.Link href="#missions">
              <NavLink style={activeLink} className="text-primary link" to="/mission">Missions</NavLink>
            </Nav.Link>
            <Nav.Link href="#myProfile">
              <NavLink style={activeLink} className="text-primary link" to="/myProfile">My Profile</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
