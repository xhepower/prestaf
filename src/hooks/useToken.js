import { useEffect, useState } from "react";

function useToken() {
  const guardarToken = (token) => {
    localStorage.setItem("token", token);
  };
  const obtenerToken = () => {
    let token;
    if (localStorage.getItem("token")) {
      token = localStorage.getItem("token");
    } else {
      token = null;
    }
    return token;
  };
  return { obtenerToken, guardarToken };
}
export { useToken };
