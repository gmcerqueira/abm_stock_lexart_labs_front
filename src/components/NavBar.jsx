import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Navbar bg="dark" variant="dark" sticky="top">
    <Container>
      <Link to="/" className="d-flex align-items-center navbar-brand">
        ABM
      </Link>
      <Nav className="d-flex align-items-center">
        <Nav.Link>
          <Link to="/stock" className="text-decoration-none text-white">
            Stock
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/" className="text-decoration-none btn btn-success">
            Register product
          </Link>
        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default NavBar;
