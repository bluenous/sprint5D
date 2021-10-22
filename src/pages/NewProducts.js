import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";

const NewProduct = () => {
  const history = useHistory();

  const [data, setData] = useState({
    code: "",
    name: "",
    description: "",
    detalles: "",
    price: "",
    qty: "",
    img: "",
  });

  const handleChange = ({ target }) => {
    //console.log("Me estoy ejecutando");
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const URL = "https://sprint5f.herokuapp.com/products";

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
      history.push("/");
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
      <h2 className="text-center">Agregar nuevo producto</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>
            <strong>CÓDIGO: </strong>
          </Form.Label>
          <Form.Control
            type="text"
            name="code"
            placeholder="Código del producto"
            value={data.code}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted">
            Escriba "P" seguido por el número del producto, v.gr. P006
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            <strong>NOMBRE: </strong>
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
            <strong>CARACTERÍSTICAS: </strong>
          </Form.Label>
          <Form.Control
            type="text"
            name="detalles"
            placeholder="Características específicas del producto"
            value={data.detalles}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted">
            v.gr.: INTEL CORE I5, RAM 12 GB, 512 GB SSD
          </Form.Text>
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
            <strong>IMAGEN: </strong>
          </Form.Label>
          <Form.Control
            type="text"
            name="img"
            placeholder="URL de la imagen"
            value={data.img}
            onChange={handleChange}
            required
          />
          <Form.Text className="text-muted">
            v.gr.: https://source.unsplash.com/400x400/?laptop
          </Form.Text>
        </Form.Group>
        <Button className="btn btn-primary" onClick={handleSubmit}>
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default NewProduct;
