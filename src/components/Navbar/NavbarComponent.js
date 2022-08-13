import "./NavbarComponent.css";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">alphaGreat</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto mr-10">
            <NavDropdown title="Operations" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Alpha Tech</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Alpha Academia
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Alpha Pi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Alpha Home Tuition
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about-us">About Us</Nav.Link>
            <Nav.Link href="/contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
