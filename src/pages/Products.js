import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListProducts from "../components/ListProducts";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Container fluid>
      <h2 className="text-center mt-3">Listado de Productos</h2>
      <hr />
      <Row>
        <Col md={4}>
          <Link to="/newproduct" className="btn btn-secondary mt-3 ms-3 mb-3">
            Nuevo producto
          </Link>
        </Col>

        <ListProducts />
      </Row>
    </Container>
  );
};

export default Products;
