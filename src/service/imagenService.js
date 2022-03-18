import axios from "axios";

const url = "http://localhost:4000";

const axiosRequest = axios.create({ baseURL: url });

function crearImagen(data) {
  return axiosRequest.post("/archivo", data);
}

function subirImagen(url, contentType, file) {
  console.log(contentType);
  return axios.put(url, file, {
    headers: { "Content-Type": contentType },
  });
}
export { crearImagen, subirImagen };
