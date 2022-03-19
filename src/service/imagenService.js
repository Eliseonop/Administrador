import axios from "axios";

const URL = "https://app-backend-ecommerce.herokuapp.com";

const axiosRequest = axios.create({ baseURL: URL });

function crearImagen(data) {
  return axiosRequest.post("/archivo", data);
}

function subirImagen(url, contentType, file) {
  console.log(contentType);
  return axios.put(url, file, {
    headers: {
      "Content-Type": contentType,
      "Access-Control-Allow-Origin": "*",
    },
  });
}
export { crearImagen, subirImagen };
