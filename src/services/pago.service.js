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
class PagoService {
  getAll() {
    return http.get("/pagos");
  }
  getOne(id) {
    return http.get(`/pagos/${id}`);
  }
  save(data) {
    return http.post(`/pagos`, data);
  }
  delete(id) {
    return http.delete(`/pagos/${id}`);
  }
  update(id, data) {
    return http.patch(`/pagos/${id}`, data);
  }
}

export default new PagoService();
