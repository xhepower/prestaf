import axios from "axios";

const instance = axios.create({
  baseURL: `http://${process.env.REACT_APP_HOST}:3000/api/v1`,
  // baseURL: "http://192.168.1.6:3000/api/v1",
  timeout: 50000,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export default instance;
