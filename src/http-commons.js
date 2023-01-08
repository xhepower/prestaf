import axios from "axios";

const instance = axios.create({
  baseURL: "http://137.184.94.94:3000/api/v1",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export default instance;
