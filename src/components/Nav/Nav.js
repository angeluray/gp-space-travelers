import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Logo from '../images/world.png';

function Navigation() {
  const myNavLinksEffect = ({ isActive }) => ({
    textDecoration: isActive ? 'underline solid #0d8efd' : 'none',
    color: isActive ? '#0d8efd' : '#0d8dfd98',
  });

  const links = [
    {
      id: 1,
      path: '/',
      Text: 'Rockets',
      href: '#rockets',
    },
    {
      id: 2,
      path: '/mission',
      Text: 'Missions',
      href: '#missions',
    },
    {
      id: 3,
      path: '/myProfile',
      Text: 'My Profile',
      href: '#profile',
    },
  ];

  return (
    <Navbar bg="light" expand="lg" className="border-bottom py-3">
      <Container>
        <Navbar.Brand href="#home" className="d-flex">
          <img src={Logo} alt="Logo" className="logo" />
          <h2 className="ps-3">Space Travelers&apos; Hub</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map((nlink) => (
            // eslint-disable-next-line
           <Nav.Link>
             <NavLink style={myNavLinksEffect} id={`mylink${nlink.id}`} className="text-primary link" to={nlink.path} end>{nlink.Text}</NavLink>
           </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
