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
class HomeService {
  getAll() {
    return http.get("/moras");
  }
  getMoras() {
    return http.get("/moras");
  }
  getOne(id) {
    return http.get(`/home/${id}`);
  }
  save(data) {
    return http.post(`/home`, data);
  }
  saveMora(data) {
    return http.post(`/moras`, data);
  }
  delete(id) {
    return http.delete(`/home/${id}`);
  }
  update(id, data) {
    return http.patch(`/home/${id}`, data);
  }
}

export default new HomeService();
