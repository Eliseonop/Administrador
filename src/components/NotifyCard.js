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
  const { nombreCompleto, telefono, email, direccion, total, productos,fecha } = item;

  const manejarEliminar = async () => {
    const accionUsuario = await Swal.fire({
        icon: "warning",
        title: "Desea aceptar este pedido?",
        text: "Esta accion es irreversible",
        showConfirmButton: true,
        showCancelButton: true,
    });

    if (accionUsuario.isConfirmed) {
      Swal.fire(
        '   Pedido!',
        'En camino ',
        'success'
      )
    }
};




  return (
    <>
      <div className="card mb-4">
      <div className="d-flex m-1 "><span className="fw-bold">Nuevo Pedido:</span> <span className="fst-italic ms-3"> { fecha} </span> </div>
      <hr/>
        <Row> 
          <Col  className=" d-grid col-lg-3 " >
            <div className="d-flex flex-column  flex-lg-column flex-sm-row   d-grid  ">
              {/* <div className="text-start fw-bold mb-3 me-3  ">Opciones:</div> */}
              
              <Dropdown>
                <Dropdown.Toggle  
                
                  variant="outline-dark "
                  className=" col-lg-12  m-2 "
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
              <Button className=" btn col-lg-6  btn-success m-2 w-75   " onClick={manejarEliminar}>Aceptar</Button>
            </div>
          </Col>
          <Col xs={12} sm={12} lg={9}className="d-flex d-grid">
            {/* <div className="m-4">
              <i class="fas fa-truck fs-1 text-info"></i>
            </div> */}
            <div className="card">
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
            </div>
          </Col>
          {/* Botones */}
          
        </Row>
        </div>
      
    </>
  );
};

export default NotifyCard;
