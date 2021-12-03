import React from 'react'

const ListProductos = ({list}) => {
    const { nombre, cantidad ,departamento,id} = list;
    return (
      <div>
          
        <p> Producto: <span className="fw-bold"> {nombre}</span></p>
        <p> Cantidad:<span className="fw-bold"> {cantidad}</span></p>
        <p> Id:<span className="fw-bold"> {id}</span></p>
        
        {/* {switch (departamento) {
          case 1: 
            return 
            
            break;
        
          default:
            break;
        }} */}
      </div>
    );
  };

export default ListProductos
