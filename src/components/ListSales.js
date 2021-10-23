import React from "react";
import { Container, Button, NavLink } from "react-bootstrap";
import TableSales from "./TableSales";
import { Link } from "react-router-dom";

const ListSales = () => {
  return (
    <Container className="mb-5">
      <h2 className="text-center mt-3">Listado de Ventas</h2>
      <hr />
      <Link to="/newsale" className="btn btn-secondary mt-3 ms-3">
        Nueva venta
      </Link>
      <TableSales />
    </Container>
  );
};

export default ListSales;
