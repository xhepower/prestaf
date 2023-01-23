import { useEffect, useState } from "react";
import rutaService from "../services/ruta.service";
import { useJwt } from "react-jwt";
import { useToken } from "./useToken";
import { useContext } from "react";
import Appcontext from "../context/AppContext";
function useRutas() {
  const { currentUser } = useContext(Appcontext);
  const { obtenerToken } = useToken();
  const { decodedToken, isExpired } = useJwt(obtenerToken());

  const [datos, setDatos] = useState([]);
  const [datosRender, setDatosRender] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    (async () => {
      setDatos((await rutaService.getAll()).data);
      setDatosRender((await rutaService.getAll()).data);
    })();
  }, []);
  const dato = async (id) => {
    return await rutaService.getOne(id);
  };

  const eliminar = (id) => {
    if (window.confirm(`¿Desea eliminar la ruta #${id}?`)) {
      (async () => {
        rutaService.delete(id);
      })();
    }
  };

  const guardar = async (data) => {
    if (window.confirm("¿Desea guardar la ruta?")) {
      (async () => {
        rutaService.save(data);
        setDatos((await rutaService.getAll()).data);
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

export { useRutas };
