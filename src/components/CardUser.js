
import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { Card, Container, Button, Image } from "react-bootstrap";
const CardUser = () => {
  const { user, logout } = useContext(AuthContext);
  async function handleLogout() {
    // e.preventDefault();
    try {
      Swal.fire({
        title: 'Quieres cerrar sesion?',
        // text: "Deseas cerrar secion",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si!',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
          logout();
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Vuelva pronto ' + '😎',
            showConfirmButton: false,
            timer: 1500
          })
          }
        })
    } catch (error) {
      console.log(error);
    }
  }
  return (
   
      <Card className="text-center m-auto d-flex w-75"> 
      <i className="fas fa-users-cog fs-1 mt-4"></i>
        <Card.Body>
          <Card.Title>{user.displayName? user.displayName:user.email}</Card.Title>               
          <Card.Text>
            Administrador 
          </Card.Text>
          
          <Button variant="danger" onClick={handleLogout}>Cerrar</Button>
        </Card.Body>
      </Card>
    
  );
};

export default CardUser;
