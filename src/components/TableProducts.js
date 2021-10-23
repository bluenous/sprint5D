import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, Button, Image, Row, Figure } from "react-bootstrap";
import "../components/styles/styles.css";
//import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";

const TableProducts = () => {
  const URL = "http://sprint5f.herokuapp.com/products";

  const getData = async () => {
    const response = axios.get(URL);
    //const responseusers = axios.get(URLU);
    console.log(response);
    //console.log(responseusers);
    return response;
  };

  const [list, setList] = useState([]);

  useEffect(() => {
    getData().then((response) => {
      //    console.log(response); //para verificar que si está trayendo los datos de mi endpoint

      setList(response.data);
    });
    console.log(list);
  }, []);
  return (
    <Container className="mt-4">
      <Table striped bordered hover variant="dark" fluid>
        <thead>
          <tr className="text-center">
            <th>Código</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Especificaciones</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Imagen</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((producto, index) => (
            <tr key={index}>
              <td className="text-center align-middle">{producto.code}</td>
              <td className="text-center align-middle">{producto.name}</td>
              <td className="text-center align-middle">
                {producto.description}
              </td>
              <td className="text-center align-middle">{producto.detalles}</td>
              <td className="text-center align-middle">{producto.price}</td>
              <td className="text-center align-middle">{producto.qty}</td>
              <td className="my">
                <Figure className="mt-2 mx my-0">
                  <Figure.Image
                    width={40}
                    height={40}
                    alt="avatar"
                    src={producto.img}
                    roundedCircle
                  />
                </Figure>
              </td>
              <td className="text-center align-middle">
                <Button
                  variant="secondary me-md-1 "
                  size="sm"
                  onClick={() => console.log("handleEdit")}
                >
                  Editar
                </Button>
              </td>
              <td className="text-center align-middle">
                <Button
                  variant="danger me-md-1 "
                  size="sm"
                  onClick={() => console.log("handleDelete")}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableProducts;
