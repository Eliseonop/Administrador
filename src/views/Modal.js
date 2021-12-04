import { useState,useEffect } from "react";
import { Modal, Button, Nav, Container } from "react-bootstrap";

import { getVenta,eliminarProducto } from "../service/VentasService";
import NotifyCard from "../components/NotifyCard";
function Mymodal() {
  const [show, setShow] = useState(false);

  const [ventas, setVentas] = useState([] );
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const obtenerVentas = async () => {
    try {
      const ventaObtenida = await getVenta();
      setVentas(ventaObtenida);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    obtenerVentas();
  }, []);
  
  


  return (
    <>
      <Nav.Link onClick={handleShow}>
        
        <i class="far fa-folder-open mx-4 fs-3 text-dark"></i>
      </Nav.Link>

      <Modal size="lg" show={show} onHide={handleClose} scrollable={true}>
        <Modal.Header closeButton>
          <Modal.Title>Pedidos</Modal.Title>
        </Modal.Header>
        <Modal.Body  className="show-grid "  >
          {ventas.map((item, i) => (
            <Container>
              {/* <h4>Nuevo Pedido</h4> */}
              <NotifyCard key={i} item={item} obtenerVentas={obtenerVentas} />
            </Container>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Mymodal;
