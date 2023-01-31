import http from "../http-commons";
import { useToken } from "../hooks/useToken";

//const axios = require("axios").default;
const obtenerToken = () => {
  let token;
  if (localStorage.getItem("superdupertoken")) {
    token = localStorage.getItem("superdupertoken");
  } else {
    token = null;
  }
  return token;
};
http.defaults.headers.common = { Authorization: `bearer ${obtenerToken()}` };
class PrestamoService {
  getAll() {
    return http.get("/prestamos");
  }
  getOne(id) {
    return http.get(`/prestamos/${id}`);
  }
  save(data) {
    return http.post(`/prestamos`, data);
  }
  delete(id) {
    return http.delete(`/prestamos/${id}`);
  }
  update(id, data) {
    return http.patch(`/prestamos/${id}`, data);
  }
}

export default new PrestamoService();
