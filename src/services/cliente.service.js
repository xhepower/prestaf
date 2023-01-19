import http from "../http-commons";
import { useToken } from "../hooks/useToken";

//const axios = require("axios").default;
const obtenerToken = () => {
  let token;
  if (localStorage.getItem("token")) {
    token = localStorage.getItem("token");
  } else {
    token = null;
  }
  return token;
};
http.defaults.headers.common = { Authorization: `bearer ${obtenerToken()}` };
class ClienteService {
  getAll() {
    return http.get("/clientes");
  }
  getOne(id) {
    return http.get(`/clientes/${id}`);
  }
  save(data) {
    return http.post(`/clientes`, data);
  }
  delete(id) {
    return http.delete(`/clientes/${id}`);
  }
  update(id, data) {
    return http.patch(`/clientes/${id}`, data);
  }
}

export default new ClienteService();
