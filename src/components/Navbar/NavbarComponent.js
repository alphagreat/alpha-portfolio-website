import "./NavbarComponent.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/" className="linkText">
          alphaGreat
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              title="Operations"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1" className="linkText">
                Alpha Tech
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="linkText">
                Alpha Academia
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="linkText">
                Alpha Pi
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className="linkText">
                Alpha Home Tuition
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about-us" className="linkText">
              About Us
            </Nav.Link>
            <Nav.Link href="/contact-us" className="linkText">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
