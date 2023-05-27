import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const navLinks = [
  {
    title: "All Items",
  },
  {
    title: "Dresses",
  },
  {
    title: "Seasonal",
  },
  {
    title: "Denims",
  },
  {
    title: "TShirts",
  },
  {
    title: "Tops",
  },
];

export default function HeaderLayout() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "purple" }}>
      <Container>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://radikadilanka.com/rdfashion/static/media/logo2.e5c0eee2.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              rgFashion
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{ color: 'white', textTransform: 'uppercase' }}>
            {navLinks.map((val, key) => {
              return <Nav.Link key={key} href="#features" style={{ color: 'white'}}>{val.title.toUpperCase()}</Nav.Link>;
            })}
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="#memes" style={{ color: 'white', textTransform: 'uppercase' }}>
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
