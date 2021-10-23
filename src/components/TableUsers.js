import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, Button, Image, Row, Figure } from "react-bootstrap";
import "../components/styles/styles.css";
//import Swal from "sweetalert2";
import "@sweetalert2/theme-bootstrap-4/bootstrap-4.css";

const TableUsers = () => {
  const URL = "http://localhost:5000/users";

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
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr className="text-center">
            <th>Perfil</th>
            <th>Código</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Estado</th>
            <th>Ventas</th>
            <th>Rol</th>
          </tr>
        </thead>
        <tbody>
          {list.map((usuario, index) => (
            <tr key={index}>
              <td className="my text-center align-middle">
                <Figure className="mt-2 mx my-0">
                  <Figure.Image
                    width={40}
                    height={40}
                    alt="avatar"
                    src={usuario.perfil}
                    roundedCircle
                  />
                </Figure>
              </td>
              <td className="text-center align-middle">{usuario.code}</td>
              <td className="text-center align-middle">{usuario.name}</td>
              <td className="text-center align-middle">{usuario.mail}</td>
              <td className="text-center align-middle">{usuario.state}</td>
              <td className="text-center align-middle">{usuario.sales}</td>
              <td className="text-center align-middle">{usuario.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableUsers;
