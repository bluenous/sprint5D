import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form, Button, Row } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";

const NewSales = () => {
  const history = useHistory();

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    qty: "",
    state: "",
    date: "",
    client: "",
    seller: "",
  });

  const handleChange = ({ target }) => {
    //console.log("Me estoy ejecutando");
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const URL = "https://sprint5f.herokuapp.com/sales";

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("Envié el form");
    const response = await axios.post(URL, data);
    //console.log(response);
    if (response.status === 201) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `El registro de ${response.data.name} ha sido guardado exitosamente!`,
        showConfirmButton: true,
        //timer: 1500,
      });
      history.push("/sales");
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title:
          "Tuvimos un problema y no pudimos guardar tu registro. Por favor intenta nuevamente",
        showConfirmButton: true,
      });
    }
  };

  return (
    <Container expand="md" fluid>
      <Row className="col-6 mx-4">
        <h2 className="text-center">Agregar nueva venta</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>CÓDIGO: </strong>
            </Form.Label>
            <Form.Control
              type="text"
              name="code"
              placeholder="Código de la venta"
              value={data.code}
              onChange={handleChange}
              required
            />
            <Form.Text className="text-muted">
              Escriba "V" seguido por el número del producto, v.gr. V006
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>NOMBRE PRODUCTO: </strong>
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Nombre del producto"
              value={data.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>DESCRIPCIÓN: </strong>
            </Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Descripción corta del producto"
              value={data.description}
              onChange={handleChange}
              required
            />
            <Form.Text className="text-muted">v.gr.: "PC WEBCAM"</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <strong>PRECIO: </strong>
            </Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="Precio"
              value={data.price}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>CANTIDAD: </strong>
            </Form.Label>
            <Form.Control
              type="number"
              name="qty"
              placeholder="Cantidad"
              value={data.qty}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <strong> ESTADO: </strong>
            </Form.Label>
            <Form.Control
              type="text"
              name="state"
              placeholder="Estado"
              value={data.state}
              onChange={handleChange}
              required
            />
            <Form.Text className="text-muted">
              v.gr.: "Entregada, Pendiente, Cancelada"
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>FECHA: </strong>
            </Form.Label>
            <Form.Control
              type="date"
              name="date"
              placeholder="Fecha"
              value={data.date}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>CLIENTE: </strong>
            </Form.Label>
            <Form.Control
              type="text"
              name="client"
              placeholder="Cliente"
              value={data.client}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>VENDEDOR: </strong>
            </Form.Label>
            <Form.Control
              type="text"
              name="seller"
              placeholder="Vendedor"
              value={data.seller}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button className="btn btn-primary" onClick={handleSubmit}>
            Guardar
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default NewSales;
