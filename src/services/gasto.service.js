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
class GastoService {
  getAll() {
    return http.get("/gastos");
  }
  getOne(id) {
    return http.get(`/gastos/${id}`);
  }
  save(data) {
    return http.post(`/gastos`, data);
  }
  delete(id) {
    return http.delete(`/gastos/${id}`);
  }
  update(id, data) {
    return http.patch(`/gastos/${id}`, data);
  }
}

export default new GastoService();
