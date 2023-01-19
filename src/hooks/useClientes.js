import { useEffect, useState } from "react";
import clienteService from "../services/cliente.service";
import { useJwt } from "react-jwt";
import { useToken } from "./useToken";
function useClientes() {
  const { obtenerToken } = useToken();
  const { decodedToken, isExpired } = useJwt(obtenerToken());
  const [datos, setDatos] = useState([]);
  const [datosRender, setDatosRender] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  useEffect(() => {
    (async () => {
      setDatos((await clienteService.getAll()).data);
      setDatosRender((await clienteService.getAll()).data);
    })();
  }, []);
  const dato = async (id) => {
    return await clienteService.getOne(id);
  };

  const eliminar = (id) => {
    if (window.confirm(`¿Desea eliminar el usuario #${id}?`)) {
      (async () => {
        clienteService.delete(id);
        window.location.href = window.location.href;
      })();
    }
  };
  //una mierda en useContext para ponerlo como el cliente activo
  const seleccionar = (id) => {};
  const modificar = (id, data) => {
    if (window.confirm(`¿Desea modificar el usuario #${id}?`)) {
      (async () => {
        clienteService.update(id, data);
        window.location.href = window.location.href;
      })();
    }
  };
  const guardar = async (data) => {
    if (window.confirm("¿Desea guardar el usuario?")) {
      (async () => {
        clienteService.save(data);
        window.location.href = window.location.href;
      })();
    }
  };

  const actualizar = (id, data) => {};
  return {
    datos,

    decodedToken,
    setDatosRender,
    datosRender,
    currentData,
    setCurrentData,
    dato,
    actualizar,
    eliminar,
    modificar,
    guardar,
    seleccionar,
  };
}

export { useClientes };
