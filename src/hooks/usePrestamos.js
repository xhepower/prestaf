import { useEffect, useState } from "react";
import prestamoService from "../services/prestamo.service";
function usePrestamos() {
  const [datos, setDatos] = useState([]);
  const [datosRender, setDatosRender] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const actualizarDatos = () => {
    (async () => {
      setDatos(
        (await prestamoService.getAll()).data
          .sort(function (a, b) {
            return a.id - b.id; /* Modificar si se desea otra propiedad */
          })
          .reverse()
      );
      setDatosRender(
        (await prestamoService.getAll()).data
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
    return await prestamoService.getOne(id);
  };

  const eliminar = (id) => {
    if (window.confirm(`¿Desea eliminar el prestamo #${id}?`)) {
      (async () => {
        prestamoService.delete(id);
      })();
    }
  };

  const guardar = async (data) => {
    if (window.confirm("¿Desea guardar el prestamo?")) {
      (async () => {
        prestamoService.save(data);
        setDatos((await prestamoService.getAll()).data);
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

export { usePrestamos };
