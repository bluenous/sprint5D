import React from "react";
import {
  Container,
  Form,
  FormControl,
  Button,
  Nav,
  Navbar,
} from "react-bootstrap"; //Componentes usados en la construcción de la barra de navegación
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
            <Link to="/new" className="nav-link">
              Agregar
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Buscar"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-secondary">Buscar</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavBar;
