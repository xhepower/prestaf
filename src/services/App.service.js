import http from "./http-commons";

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
class AppService {
  constructor(tabla) {
    this.tabla = tabla;
  }
  async getAll(parameters) {
    return await http.get(`/${this.tabla}`, {
      params: parameters,
    });
  }
  totalPages(parameters) {
    return http.get(`/${this.tabla}/totalpages`, {
      params: parameters,
    });
  }
  getOne(id) {
    return http.get(`/${this.tabla}/${id}`);
  }
  async save(data) {
    try {
      return await http.post(`/${this.tabla}`, data);
    } catch (error) {
      console.error(error);
    }
  }

  delete(id) {
    return http.delete(`/${this.tabla}/${id}`);
  }
  update(id, data) {
    return http.patch(`/${this.tabla}/${id}`, data);
  }
}

export default AppService;
