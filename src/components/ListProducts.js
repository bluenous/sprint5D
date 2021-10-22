import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import CardProduct from "./CardProduct";
import { Container, Row, Modal, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";

//Este componente ListProducts importará los productos desde mi servidor con la base de datos

const ListProducts = () => {
  const history = useHistory();
  const URL = "https://sprint5f.herokuapp.com/"; //almaceno en URL la dirección de mi endpoint para traer la data de los productos

  //escribo una función (getData) para traer los datos de manera asincrona con axios, y serán almacenados en una variable (response)
  const getData = async () => {
    const response = axios.get(URL);

    return response;
  };

  //con el hook useState podré tener la lista de productos  y cambiar su estado cuando haga falta, o asignar nuevos datos con setList

  const [list, setList] = useState([]);

  //uso el hook useEffect que se ejecuta en el render de mi app y puede contener const o states

  const [updateList, setUpdateList] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [dataModal, setDataModal] = useState([]);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };

  //const [dataForm, setDataForm] = useState(initialState);
  const handleChangeModal = ({ target }) => {
    setDataModal({
      ...dataModal,
      [target.name]: target.value,
    });
  };

  const handleSubmitModal = async (e) => {
    e.preventDefault();
    const response = await axios.put(`${URL}/${dataModal.id}`, dataModal);
    //console.log(response);
    if (response.status === 200) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `El registro ${response.data.name} ha sido actualziado exitosamente!`,
        showConfirmButton: true,
        //timer: 1500,
      });
      handleCloseModal();
      setUpdateList(!updateList);
      history.push("/");
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Tuvimos un problema y no pudimos actualizar el producto",
        showConfirmButton: true,
      });
    }
  };
  useEffect(() => {
    getData().then((response) => {
      //    console.log(response); //para verificar que si está trayendo los datos de mi endpoint

      setList(response.data);
    });
  }, [updateList]); //si está vacío este arreglo solo se ejecuta la primera vez, sino cada vez que cambie lo que contenga

  //console.log(list);

  //esto devuelve ListProducts luego de usar useState y useEffect

  return (
    <Container className="mb-5">
      <Row>
        {list.map((producto, index) => (
          <CardProduct
            product={producto}
            key={index}
            setUpdateList={setUpdateList}
            updateList={updateList}
            handleCloseModal={handleCloseModal}
            handleOpenModal={handleOpenModal}
            setDataModal={setDataModal}
          />
        ))}
      </Row>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="text-center">
              Actualizar información del producto
            </div>{" "}
            <div className="text-center">{dataModal.code}</div>
          </Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Nombre:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Nombre del producto"
                value={dataModal.name}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripción:</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Descripción corta del producto"
                value={dataModal.description}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Características:</Form.Label>
              <Form.Control
                type="text"
                name="detalles"
                placeholder="Características específicas del producto"
                value={dataModal.detalles}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio:</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Precio"
                value={dataModal.price}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Cantidad:</Form.Label>
              <Form.Control
                type="number"
                name="qty"
                placeholder="Cantidad"
                value={dataModal.qty}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imagen:</Form.Label>
              <Form.Control
                type="text"
                name="img"
                placeholder="URL de la imagen"
                value={dataModal.img}
                onChange={handleChangeModal}
                required
              />
              <Form.Text className="text-muted">
                v.gr.: https://source.unsplash.com/400x400/?laptop
              </Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleSubmitModal}>
              Grabar cambios
            </Button>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar sin editar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
};

export default ListProducts;
