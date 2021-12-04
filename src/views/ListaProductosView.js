import "bootstrap/dist/css/bootstrap.min.css";
import "../css/list.css"
import { useState, useEffect, useRef } from "react";
import {
  obtenerProductos,
  obtenerProductoPorId,
  editarProductoPorId,
  eliminarProducto,
  crearProducto,
  subirImagen,
} from "../service/productosService";
import Swal from "sweetalert2";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";

let imagen;

export default function ListaProductosView() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  ////////////////////////////////////////////////////////////////////
  //OBTENER PRODUCTOS

  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      const productosObtenidos = await obtenerProductos();
      setProductos(productosObtenidos);
    } catch (error) {
      console.log(error);
    }
  };

  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////
  //ELIMINAR PRODUCTO

  const verificarEliminar = async (id) => {
    const respuesta = await Swal.fire({
      icon: "warning",
      title: "Desea eliminar el producto?",
      text: "Esta acción es irreversible",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Sí, Eliminar",
      denyButtonText: "No, Cancelar",
    });
    if (respuesta.isConfirmed) {
      try {
        await eliminarProducto(id);
        await Swal.fire({
          icon: "success",
          title: "Producto eliminado!",
        });
        getProductos();
      } catch (error) {
        console.log(error);
      }
    }
  };

  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////
  //CREAR PRODUCTO

  const inputFile = useRef();

  const [value, setValue] = useState({
    nombre: "",
    descripcion: "",
    precio: 0,
  });

  const actualizarInput = (e) => {
    console.log(e.target.name, e.target.value);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      const urlImagenSubida = await subirImagen(imagen);
      await crearProducto({ ...value, imagen: urlImagenSubida });
      await Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Producto Creado!",
      });
      setValue([]);
      handleClose();
      getProductos();
    } catch (error) {
      console.log(error);
    }
  };

  const manejarImagen = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    imagen = e.target.files[0];
  };

  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////
  //EDITAR PRODUCTO

  const { id } = useParams();
  const [idprod, setIdProd] = useState();

  const getProductoEdit = async (id) => {
    handleShowEdit();
    try {
      const prodObtenido = await obtenerProductoPorId(id);
      setValue(prodObtenido);
      setIdProd(prodObtenido.id);
      console.log(prodObtenido);
    } catch (error) {
      console.log(error);
    }
  };

  const actualizarInputEdit = (e) => {
    console.log(e.target.name, e.target.value);
    setValue({
      ...value, //cogiendo el estado de value, spreadoperator
      [e.target.name]: e.target.value,
    });
  };

  const manejarSubmitEdit = async (e) => {
    console.log(idprod);
    e.preventDefault();
    try {
      if (typeof imagen !== "undefined") {
        const urlImagenSubida = await subirImagen(imagen);
        await editarProductoPorId(idprod, {
          ...value,
          imagen: urlImagenSubida,
        });
      } else {
        await editarProductoPorId(idprod, value);
      }
      await Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Producto Editado Exitosamente",
      });
      setValue([]);
      handleCloseEdit();
      getProductos();
    } catch (error) {
      console.log(error);
    }
  };

  const manejarImagenEdit = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    imagen = e.target.files[0]; //como para utilizar
  };

  ////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <>
    <hr/>
      <div className="container " id="tabla">
       <div className="d-flex justify-content-between mb-2   ">
        <h4 className="text-midle">Listado de Productos</h4>
   
        <button type="button" className="btn btn-md  btn-outline-primary    " onClick={handleShow}>
          Añadir nuevo Producto
        </button>

       </div>
       
        <div className="table-responsive-sm overflow-scroll" id="tabla">
          <table className="table table-hover border border-dark border-2 align-middle table-responsive   table-bordered " >
            <thead className="table align-middle position-relative position-sticky">
              <tr>
                <th>COD. Prod.</th>
                <th>Producto</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map(
                ({ nombre, descripcion, precio, imagen, id }, i) => (
                  <tr key={i} id="vhv">
                    <td>{id}</td>
                    <td>{nombre}</td>
                    <td>{descripcion}</td>
                    <td>{precio}</td>
                    <td>
                      <img src={imagen} id="vhv" alt={id} />
                    </td>
                    <td>
                      <div className="form-group row justify-content-center       ">
                        <button
                          className="btn btn-info"
                          onClick={() => {
                            getProductoEdit(id);
                          }}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-danger my-2"
                          onClick={() => {
                            verificarEliminar(id);
                          }}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Crear Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label className="form-label">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  value={value.nombre}
                  onChange={(e) => {
                    actualizarInput(e);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Descripción producto</label>
                <input
                  type="text"
                  className="form-control"
                  name="descripcion"
                  value={value.descripcion}
                  onChange={(e) => {
                    actualizarInput(e);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Precio producto</label>
                <input
                  type="number"
                  className="form-control"
                  name="precio"
                  value={value.precio}
                  onChange={(e) => {
                    actualizarInput(e);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Imagen</label>
                <input
                  type="file"
                  className="form-control"
                  ref={inputFile}
                  onChange={(e) => {
                    manejarImagenEdit(e);
                  }}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                manejarSubmit(e);
              }}
            >
              Guardar
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showEdit} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label className="form-label">Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  value={value.nombre}
                  onChange={(e) => {
                    actualizarInputEdit(e);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Descripción producto</label>
                <input
                  type="text"
                  className="form-control"
                  name="descripcion"
                  value={value.descripcion}
                  onChange={(e) => {
                    actualizarInputEdit(e);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Precio producto</label>
                <input
                  type="number"
                  className="form-control"
                  name="precio"
                  value={value.precio}
                  onChange={(e) => {
                    actualizarInputEdit(e);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Imagen</label>
                <input
                  type="file"
                  className="form-control"
                  ref={inputFile}
                  onChange={(e) => {
                    manejarImagenEdit(e);
                  }}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => {
                manejarSubmitEdit(e);
              }}
            >
              Actualizar
            </Button>
            <Button variant="secondary" onClick={handleCloseEdit}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}