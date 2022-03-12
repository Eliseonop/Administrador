import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom"; //redirect v5
import Login from "../views/Login";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  // props.children es literalmente no se que componente voy a renderizar pero lo renderiza de todas maneras, el componente que este dentro de PrivateRoute
  console.log("mostrando estado user", user);
  // para que uso Navigate, para redireccionar
  //si es que el usuario es diferente de NUll
  //--V: retorno el hijo que me toque
  //--F: lo redirijo a Login con Navigate
  // !== diferente de
  //operador ternario
  return user === null ? <Login /> : <>{children}</>;
};

export default PrivateRoute;
