import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { DarkMode } from '../context/DarkMode';
import { FaSun, FaMoon } from "react-icons/fa";

const NavbarComponent = () => {
  //darkmode
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <Navbar
      expand="lg"
      className={`shadow-sm fixed-top ${
        isDarkMode ? "bg-warning text-white" : "bg-primary text-primary"
      }`}
    >
      <Container fluid>
        <Navbar.Brand href="#home" className={isDarkMode ? "text-white" : "text-white"}>
          Kasir
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={isDarkMode ? "text-white" : "text-white"}>
              Home
            </Nav.Link>
            {/* <NavDropdown
              title="Master"
              id="basic-nav-dropdown"
              className={isDarkMode ? "text-white" : "text-white"}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <button
            className="p-2 rounded"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? (
              <FaSun size={24} className="text-warning" />
            ) : (
              <FaMoon size={24} className="text-primary" />
            )}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
