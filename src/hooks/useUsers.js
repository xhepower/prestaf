import { useEffect, useState } from "react";
import userService from "../services/user.service";
import { useJwt } from "react-jwt";
import { useToken } from "./useToken";
function useUsers() {
  const { obtenerToken } = useToken();
  const { decodedToken, isExpired } = useJwt(obtenerToken());

  const [datos, setDatos] = useState([]);
  const [datosRender, setDatosRender] = useState([]);
  useEffect(() => {
    (async () => {
      setDatos((await userService.getAll()).data);
      setDatosRender((await userService.getAll()).data);
    })();
  }, []);
  const dato = async (id) => {
    return await userService.getOne(id);
  };

  const eliminar = (id) => {
    if (window.confirm(`¿Desea eliminar el usuario #${id}?`)) {
      (async () => {
        userService.delete(id);
        window.location.href = window.location.href;
      })();
    }
  };
  const guardar = async (data) => {
    if (window.confirm("¿Desea guardar el usuario?")) {
      (async () => {
        userService.save(data);
        window.location.href = window.location.href;
      })();
    }
  };

  const actualizar = (id, data) => {};
  return {
    datos,
    setDatosRender,
    datosRender,
    dato,
    actualizar,
    eliminar,
    guardar,
  };
}

export { useUsers };
