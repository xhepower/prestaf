import http from "../http-commons";
//const axios = require("axios").default;
class AuthService {
  login(data) {
    return http.post("/auth/login", data);
  }
  recoveryPassword(data) {
    return http.post("/auth/recovery", data);
  }
  changePassword(data) {
    return http.post("/auth/change-password", data);
  }
}
export default new AuthService();
