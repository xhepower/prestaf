import { useEffect, useState } from "react";
import clienteService from "../services/cliente.service";
function useClientes() {
  const [datos, setDatos] = useState([]);
  const [datosRender, setDatosRender] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const actualizarDatos = () => {
    (async () => {
      setDatos(
        (await clienteService.getAll()).data
          .sort(function (a, b) {
            return a.id - b.id; /* Modificar si se desea otra propiedad */
          })
          .reverse()
      );
      setDatosRender(
        (await clienteService.getAll()).data
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
    if (window.confirm("¿Desea guardar el cliente?")) {
      (async () => {
        clienteService.save(data);
        setDatos((await clienteService.getAll()).data);
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

export { useClientes };
