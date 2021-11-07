import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Navbar bg="dark" variant="dark" fixed="top">
    <Link to="/">
      <Navbar.Brand>
        ABM
      </Navbar.Brand>
    </Link>
  </Navbar>
);

export default NavBar;
