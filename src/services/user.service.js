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
class UserService {
  /*login(data) {
    return http.post("/auth/login", data);
  }
  recoveryPassword(data) {
    return http.post("/auth/recovery", data);
  }
  changePassword(data) {
    return http.post("/auth/change-password", data);
  }*/
  getAll() {
    return http.get("/users");
  }
  getOne(id) {
    return http.get(`/users/${id}`);
  }
  save(data) {
    return http.post(`/users`, data);
  }
  delete(id) {
    return http.delete(`/users/${id}`);
  }
  update(id, data) {
    return http.patch(`/users/${id}`, data);
  }
}

export default new UserService();
