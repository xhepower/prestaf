import { useEffect, useState } from "react";
import userService from "../services/user.service";
function useUsers() {
  const [datos, setDatos] = useState([]);
  const [datosRender, setDatosRender] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  const actualizarDatos = () => {
    (async () => {
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
        userService.delete(id);
      })();
    }
  };

  const guardar = async (data) => {
    if (window.confirm("¿Desea guardar el usuario?")) {
      (async () => {
        userService.save(data);
        setDatos((await userService.getAll()).data);
        // window.location.href = window.location.href;
      })();
    }
  };

  const actualizar = (id, data) => {};
  return {
    datos,
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
