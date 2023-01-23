import { useEffect, useState } from "react";
import clienteService from "../services/cliente.service";
import { useJwt } from "react-jwt";
import { useToken } from "./useToken";
import { useContext } from "react";
import Appcontext from "../context/AppContext";
function useClientes() {
  const { currentUser } = useContext(Appcontext);
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
    if (window.confirm(`¿Desea eliminar el cliente #${id}?`)) {
      (async () => {
        clienteService.delete(id);
      })();
    }
  };

  const guardar = async (data) => {
    if (window.confirm("¿Desea guardar el usuario?")) {
      (async () => {
        clienteService.save(data);
        setDatos((await clienteService.getAll()).data);
        // window.location.href = window.location.href;
      })();
    }
  };

  const actualizar = (id, data) => {};
  return {
    currentUser,
    datos,
    decodedToken,
    setDatosRender,
    datosRender,
    currentData,
    setCurrentData,
    dato,
    actualizar,
    eliminar,
    guardar,
  };
}

export { useClientes };
