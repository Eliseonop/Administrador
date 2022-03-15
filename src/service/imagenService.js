import axios from "axios";

const url = "https://app-backend-ecommerce.herokuapp.com";

const axiosRequest = axios.create({ baseURL: url });

function crearImagen(data) {
  return axiosRequest.post("/archivo", data);
}

function subirImagen(url, contentType, file) {
  console.log(contentType);
  return axiosRequest.put(url, file, {
    headers: { "Content-Type": contentType },
  });
}
export { crearImagen, subirImagen };
