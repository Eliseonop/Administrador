
import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Cargando from "../components/Cargando";

const Login = () => {
  const { login, currentUser, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)
  // const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    try {
      await login(form.email, form.password);
      setLoading(false)
      await Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Accediendo..!",
        showConfirmButton: false, //es para que no me muestre un boton de cierre
        timer: 2000, //ms
      });
      navigate("/dash");
      console.log(currentUser);
    } catch (error) {
      console.log(error);
      setLoading(false)
      await Swal.fire({
        icon: "Error",
        title: "Oops...",
        text: "Verifique sus credenciales",
        showConfirmButton: false, //es para que no me muestre un boton de cierre
        timer: 2000, //ms
      });
    }
  }

  // // const aceptar = existe(form.email)

  return (
    <>
       {loading === true ? (
                <Cargando />
            ) : (
    <div className="container">
      <div className="row d-flex justify-content-center mt-5" >
        <div >
          <h1 className="text-center mb-5">Acceder a Administrador</h1>
        </div>

        <form onSubmit={handleSubmit} className="col-lg-3 col-md-6 col-9  ">
          <div className="col-lg-12">
            <label className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="inputEmail4  "
              placeholder="Ingrese email"
              value={form.email}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div className="col-lg-12">
            <label  name="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Ingrese su contraseña"
              value={form.password}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          {/* sadadasdasdad */}

          <div className="col-lg-12  mt-3 text-center border ">
            <button type="submit" className="btn btn-outline-dark btn-lg my-4">
              Iniciar Sesión
            </button>
          
            <p>
              Olvidaste tu contraseña?{" "}
              <Link to="/ContrasenaOlvidada">
                <span>Recuperarla</span>
              </Link>
            </p>
          </div>
        </form>
      
      </div>
    </div>)}
    </>
  );
};

export default Login;
