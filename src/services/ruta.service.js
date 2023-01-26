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
class RutaService {
  getAll() {
    return http.get("/rutas");
  }
  getOne(id) {
    return http.get(`/rutas/${id}`);
  }
  save(data) {
    return http.post(`/rutas`, data);
  }
  delete(id) {
    return http.delete(`/rutas/${id}`);
  }
  update(id, data) {
    return http.patch(`/rutas/${id}`, data);
  }
}

export default new RutaService();
