import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  Card,
  Container,
  Button,
  Image,
  Row,
  Col,
  Dropdown,
} from "react-bootstrap";
import ListProductos from "./ListProductos";
const NotifyCard = ({ item }) => {
  const { nombreCompleto, telefono, email, direccion, total, productos } = item;

  const manejarEliminar = async () => {
    const accionUsuario = await Swal.fire({
        icon: "warning",
        title: "Desea eliminar este Pedido?",
        text: "Esta accion es irreversible",
        showConfirmButton: true,
        showCancelButton: true,
    });

    if (accionUsuario.isConfirmed) {
      Swal.fire(
        ' Eliminado exitosamente!',
        'Este pedido fue eliminado.',
        'success'
      )
    }
};




  return (
    <>
      
        <Row> 
          <Col xs={12} sm={12} lg={3}  className=" d-grid ">
            <div className="d-flex flex-column m-auto  d-grid  ">
              <button className=" btn   btn-danger " onClick={manejarEliminar}>Eliminar</button>
              <Dropdown>
                <Dropdown.Toggle  
                
                  variant="outline-dark "
                  className="   mt-1 "
                >
                 Lista de Pedido
                </Dropdown.Toggle>

                <Dropdown.Menu variant="white">
                  {productos.map((list, i) => (
                    <>
                      <Dropdown.Item active className="bg-white text-dark">
                        <ListProductos key={i} list={list} />
                      </Dropdown.Item>
                      <Dropdown.Divider />
                    </>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
          <Col xs={12} sm={12} lg={9}className="d-flex d-grid">
            {/* <div className="m-4">
              <i class="fas fa-truck fs-1 text-info"></i>
            </div> */}
            <div className="d-flex flex-column table-responsive ">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Direccion</th>
                    <th scope="col">Telefono</th>
                    <th scope="col">Pago_Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{nombreCompleto}</th>
                    <td>{email}</td>
                    <td>{direccion}</td>
                    <td>{telefono}</td>
                    <td>{total}</td>
                  </tr>
                  <tr></tr>
                </tbody>
              </table>
            </div>
          </Col>
          {/* Botones */}
          
        </Row>
      
    </>
  );
};

export default NotifyCard;
