import http from "../http-commons";

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
class UserService {
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
