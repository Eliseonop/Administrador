import React from "react";
import "../css/spiner.css";

const Cargando = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      id="conter"
    >
      <div class="text-center ">
        <span
          class="spinner-grow spinner-grow-sm"
          id="spiners"
          role="status"
          aria-hidden="true"
        ></span>
        <div className="text-dark fs-1">Loading...</div>
      </div>
    </div>
  );
};

export default Cargando;