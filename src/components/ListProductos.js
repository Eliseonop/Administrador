import React from 'react'

const ListProductos = ({list}) => {
    const { id, cantidad ,departamento} = list;
    return (
      <div>
          
        <p>Id Producto: <span className="fw-bold"> {id}</span></p>
        <p> Cantidad:<span className="fw-bold"> {cantidad}</span></p>
        
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
