import React from "react";
import { Container } from "react-bootstrap";
import TableUsers from "./TableUsers";
import "../components/styles/styles.css";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";

const ListUsers = () => {
  return (
    <Container className="mb-5">
      <TableUsers />
    </Container>
  );
};

export default ListUsers;
