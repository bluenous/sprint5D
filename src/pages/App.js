import React from "react";
import { Container } from "react-bootstrap";
import ListProducts from "../components/ListProducts";

const App = () => {
  return (
    <Container fluid>
      <h2 className="text-center mt-3">Listado de Productos</h2>
      <hr />
      <ListProducts />
    </Container>
  );
};

export default App;
