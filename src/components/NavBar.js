import React from "react";
import Login from "./Login";
import { Container, Nav, Navbar, Row } from "react-bootstrap"; //Componentes usados en la construcción de la barra de navegación
import { Link } from "react-router-dom"; //Este componente redigire en la barra de direcciones a una ruta en Router sin recargar la App como con href

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          LCD-V2
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/products" className="nav-link">
              Productos
            </Link>
            <Link to="/sales" className="nav-link">
              Ventas
            </Link>
            <Link to="/users" className="nav-link">
              Usuarios
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Row>
          <Login />
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
