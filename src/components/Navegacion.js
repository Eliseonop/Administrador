import {
  Container,
  Navbar,
  Offcanvas,
  NavDropdown,
  Form,
  Button,
  Nav,
  FormControl,
  Modal,
} from "react-bootstrap";
import { useContext } from "react";
import CardUser from "./CardUser";
import { AuthContext } from "../context/AuthContext";
import Mymodal from "../views/Modal";
const Navegacion = () => {
  const {logout} = useContext(AuthContext)
  const click = ()=>{
    logout()
  }
  return (
    <>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#" className="ms-5">Administrador de E-commerce</Navbar.Brand>
          <div className="d-flex  ">
            {/* <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
             <Nav.Link className="ms-5"><Mymodal/></Nav.Link>
            
            {/* <Nav.Link href="#action1"><i className="far fa-bell mx-4 fs-3 text-dark"></i></Nav.Link> */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Panel</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <CardUser />
              </Nav>
              <hr/>
              <Container className="d-grid gap-2 mt-4 ">
                <Button variant="secondary" size="lg" onClick={click}>
                 <a href="https://e-commerce-2.vercel.app/" className="text-white text-decoration-none">Mi E-commerce</a>
                </Button>
               
              </Container>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          </div>

        </Container>
      </Navbar>
    </>
  );
};

export default Navegacion;
