import { useEffect, useState } from "react";
import userService from "../services/user.service";
function useUsers() {
  const [datos, setDatos] = useState([]);
  const [datosRender, setDatosRender] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const actualizarDatos = () => {
    (async () => {
      setIsLoading(true);
      setDatos(
        (await userService.getAll()).data
          .sort(function (a, b) {
            return a.id - b.id; /* Modificar si se desea otra propiedad */
          })
          .reverse()
      );
      setDatosRender(
        (await userService.getAll()).data
          .sort(function (a, b) {
            return a.id - b.id; /* Modificar si se desea otra propiedad */
          })
          .reverse()
      );
      setIsLoading(false);
    })();
  };
  useEffect(() => {
    actualizarDatos();
  }, []);
  const dato = async (id) => {
    return await userService.getOne(id);
  };

  const eliminar = (id) => {
    if (window.confirm(`¿Desea eliminar el usuario #${id}?`)) {
      (async () => {
        setIsLoading(true);
        userService.delete(id);
        setIsLoading(true);
      })();
    }
  };

  const guardar = async (data) => {
    if (window.confirm("¿Desea guardar el usuario?")) {
      (async () => {
        setIsLoading(true);
        userService.save(data);
        setIsLoading(false);
        setDatos((await userService.getAll()).data);
        // window.location.href = window.location.href;
      })();
    }
  };

  const actualizar = (id, data) => {};
  return {
    datos,
    isLoading,
    setIsLoading,
    setDatosRender,
    datosRender,
    currentData,
    setCurrentData,
    dato,
    actualizar,
    eliminar,
    guardar,
    actualizarDatos,
  };
}

export { useUsers };
