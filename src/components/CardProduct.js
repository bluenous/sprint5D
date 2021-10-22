import React from "react";
import axios from "axios";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import "./styles/styles.css";
import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";

const CardProduct = ({
  product,
  setUpdateList,
  updateList,
  handleCloseModal,
  handleOpenModal,
  setDataModal,
}) => {
  const URL = "http://localhost:5000/products";

  const handleDelete = async () => {
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
        axios.delete(`${URL}/${product.id}`).then((response) => {
          if (response.status === 200) {
            Swal.fire({
              position: "center",
              icon: "info",
              title: `El registro ${product.name} ha sido eliminado exitosamente!`,
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

  const handleEdit = () => {
    console.log("Editando");
    handleOpenModal();
    setDataModal(product);
    //handleOpenModal();
  };

  return (
    <div className="col-4 mb-4">
      <Card className="mb-2">
        <Card.Title className="text-center mt-2">
          {product.name}
          <br />
          <strong>Código: </strong>
          {product.code}
        </Card.Title>
        <img
          src={product.img}
          alt={product.description}
          className="card-img-top image-card"
        />

        <Card.Body>
          <ListGroup className="mb-2">
            <ListGroupItem className="text"></ListGroupItem>
            <ListGroupItem className="number">
              <strong>Precio: </strong>
              {product.price}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Referencia: </strong>
              {product.description}
            </ListGroupItem>
            <ListGroupItem>
              <Card.Text>{product.detalles}</Card.Text>
            </ListGroupItem>
          </ListGroup>
          <Button
            variant="outline-secondary me-2 mt-3"
            size="lg"
            onClick={handleEdit}
          >
            Editar
          </Button>
          <Button
            variant="outline-danger me-2 mt-3"
            size="lg"
            onClick={handleDelete}
          >
            Eliminar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduct;
