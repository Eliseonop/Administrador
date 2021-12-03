import React,{useState,useEffect} from "react";
import { Container, Row, Col,Card, Button, Image } from "react-bootstrap";
import { set } from "react-hook-form";
import {getVenta} from "../service/VentasService"
import LaData from "../service/Data";

const Dash = () => {
  const [informacion, setInformacion] = useState([]);
  const [data, setData] = useState([]);
  
  const obtenerVentas = async () => {
    try {
      const venObtenidas = await getVenta();
   
       setInformacion(venObtenidas);
   
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    try {
      const productos = await LaData();
      // setProductos(prodObtenidos);
       setData(productos);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    obtenerVentas();
    getData()
      }, []);
      ////////////////////////////
      const productos = data.length
      const pedidos =  informacion.length;
      var totales =  informacion.reduce((total, prod) => {
        return total + prod.total;
        
      }, 0)
      console.log(totales)
         
      

  return (
    <Container fluid  >
      <Row> 
        <Col lg="3" md="6 ">
         
          {/* Primer card */}
          <Container 
            style={{ width: "18rem", height: "9rem" }}
            className="text-center m-auto d-flex flex-row border border-2-dark mt-3 align-items-center"
          >
            <i className="fas fa-shopping-basket text-success fs-1 ms-4"></i>
            <Card.Body>
              <Card.Title>Pedidos </Card.Title>
              <Card.Text>{pedidos}</Card.Text>
            </Card.Body>
          </Container > 
        </Col>
        <Col lg="3" md="6 ">
          {/* Primer card */}
          <Container 
            style={{ width: "18rem", height: "9rem" }}
            className="text-center m-auto d-flex flex-row border border-2-dark mt-3 align-items-center"
          >
            <i className="fas fa-dice-d6 text-warning fs-1 ms-4"></i>
            <Card.Body>
              <Card.Title>Cantidad de Productos</Card.Title>
              <Card.Text>{productos}</Card.Text>
            </Card.Body>
          </Container > 
        </Col>
        <Col lg="3"md="6 ">
          {/* Primer card */}
          <Container 
            style={{ width: "18rem", height: "9rem" }}
            className="text-center m-auto d-flex flex-row border border-2-dark mt-3 align-items-center"
          >
            
            <i className="far fa-calendar-check text-primary fs-1 ms-4"></i>
            <Card.Body>
              <Card.Title>Estado Eommerce </Card.Title>
              <Card.Text>{
                productos === 0? (
                  <>
                  <i class="fas fa-times-circle text-danger"></i> <span>Cerrado</span></>
                ): (
                  <>
                  <i className="fas fa-check-circle text-success me-2"></i><span>Abierto</span></>
                  )
                }</Card.Text> 
            </Card.Body>
          </Container > 
        </Col>
        <Col lg="3"md="6 ">
          {/* Primer card */}
          <Container 
            style={{ width: "18rem", height: "9rem" }}
            className="text-center m-auto d-flex flex-row border border-2-dark mt-3 align-items-center"
          >
            <i className="fas fa-coins text-info fs-1 ms-4"></i>
            <Card.Body>
              <Card.Title>Ingresos Totales</Card.Title>
              <Card.Text>S/ {totales}</Card.Text>
            </Card.Body>
          </Container > 
        </Col>
        
      
      </Row>
    </Container>
  );
};

export default Dash;
