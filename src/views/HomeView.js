import React, { useEffect } from "react";
import Navegacion from "../components/Navegacion";
import Dash from "./Dash";
import ListaProdustosView from "./ListaProductosView";
import axios from "axios";

const HomeView = () => {
  //   const data = async () => {
  //     const result = await axios.get("http://localhost:4000/productos");
  //     console.log(result);
  //   };
  //   useEffect(() => {
  //     data();
  //   }, []);
  return (
    <>
      <Navegacion />
      <Dash />
      <ListaProdustosView />
    </>
  );
};

export default HomeView;
