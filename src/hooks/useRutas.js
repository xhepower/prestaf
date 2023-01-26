import { useEffect, useState } from "react";
import rutaService from "../services/ruta.service";
function useRutas() {
  const [datos, setDatos] = useState([]);
  const [datosRender, setDatosRender] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const actualizarDatos = () => {
    (async () => {
      setDatos(
        (await rutaService.getAll()).data
          .sort(function (a, b) {
            return a.id - b.id; /* Modificar si se desea otra propiedad */
          })
          .reverse()
      );
      setDatosRender(
        (await rutaService.getAll()).data
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

export { useRutas };
