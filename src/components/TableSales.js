import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, Button, Modal, Form } from "react-bootstrap";
import "../components/styles/styles.css";
import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";
import { useHistory } from "react-router-dom";

const TableSales = () => {
  const history = useHistory();
  const URL = "http://localhost:5000/sales";

  const getData = async () => {
    const response = await axios.get(URL);
    //const responseusers = axios.get(URLU);
    console.log(response);
    //console.log(responseusers);
    return response;
  };

  const [list, setList] = useState([]);
  //const [sale, setSale] = useState([]);

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
        title: `El registro ${response.data.name} ha sido actualizado exitosamente!`,
        showConfirmButton: true,
        //timer: 1500,
      });
      handleCloseModal();
      setUpdateList(!updateList);
      history.push("/sales");
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
      //setSale(response.data);
    });
  }, [updateList]);

  const handleDelete = async (seleccion) => {
    //console.log("eliminando", product.description);
    //console.log(response);

    Swal.fire({
      title: "¿Estás de acuerdo?",
      text: "Vas a eliminar un producto y no se puede deshacer.",
      icon: "question",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#0d6efd",
      cancelButtonColor: "#dc3545",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${URL}/${seleccion.venta.id}`).then((response) => {
          if (response.status === 200) {
            Swal.fire({
              position: "center",
              icon: "info",
              title: `El registro ${seleccion.venta.name} ha sido eliminado exitosamente!`,
              showConfirmButton: true,
              //timer: 1500,
            });
            setUpdateList(!updateList);
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Tuvimos un problema y no pudimos eliminar el producto",
              showConfirmButton: true,
            });
          }
        });
      }
    });
  };
  //Esta funcion edita luego de activar boton editar

  const handleEdit = (seleccion) => {
    console.log("Editando");
    handleOpenModal();
    setDataModal(seleccion.venta);
    //handleOpenModal();
  };

  return (
    <Container className="mt-4">
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr className="text-center">
            <th>Código</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Vendedor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {list.map((venta, index) => (
            <tr key={index}>
              <td className="text-center align-middle">{venta.code}</td>
              <td className="text-center align-middle">{venta.name}</td>
              <td className="text-center align-middle">{venta.description}</td>
              <td className="text-center align-middle">{venta.price}</td>
              <td className="text-center align-middle">{venta.qty}</td>
              <td className="text-center align-middle">
                {venta.qty * venta.price}
              </td>
              <td className="text-center align-middle">{venta.state}</td>
              <td className="text-center align-middle">{venta.date}</td>
              <td className="text-center align-middle">{venta.client}</td>
              <td className="text-center align-middle">{venta.seller}</td>
              <td className="text-center align-middle">
                <Button
                  variant="secondary me-2 mt-3"
                  size="sm"
                  onClick={() => handleEdit({ venta })}
                >
                  Editar
                </Button>
                <Button
                  variant="danger me-2 mt-3"
                  size="sm"
                  onClick={() => handleDelete({ venta })}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="text-center">
              Actualizar información de la venta
            </div>{" "}
            <div className="text-center">{dataModal.code}</div>
          </Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Producto:</Form.Label>
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
                name="quantity"
                placeholder="Cantidad"
                value={dataModal.qty}
                onChange={handleChangeModal}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Estado:</Form.Label>
              <Form.Control
                type="text"
                name="img"
                placeholder="Estado"
                value={dataModal.state}
                onChange={handleChangeModal}
                required
              />
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

export default TableSales;
