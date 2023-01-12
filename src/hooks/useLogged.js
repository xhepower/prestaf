import { useEffect, useState } from "react";
import { obtenerToken } from "./useToken";
import userService from "../services/user.service";
import { useToken } from "../hooks/useToken";
import http from "../http-commons";
function useLogged(redireccionar) {
  const { obtenerToken } = useToken();
  http.defaults.headers.common = { Authorization: `bearer ${obtenerToken()}` };
  /*

  (async () => {
    if (obtenerToken() != null) {

      const data = await userService.getAll();
      console.log(data.data);
    } else {
      console.log("no hay");
    }
  })();*/
  useEffect(() => {
    return () => {
      if (redireccionar == "/") {
        (async () => {
          if (obtenerToken() != null) {
            try {
              const data = await userService.getAll();
              window.location.href = "/";
            } catch (error) {}
          }
        })();
      } else {
        (async () => {
          if (obtenerToken() != null) {
            try {
              const data = await userService.getAll();
            } catch (error) {
              window.location.href = "/login";
            }
          } else {
            window.location.href = "/login";
          }
        })();
      }
    };
  }, []);
}

export default useLogged;
