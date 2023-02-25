import { useEffect, useState, useContext } from "react";
import clienteService from "../services/cliente.service";
import AppContext from "../context/AppContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function useClientes() {
  const [datos, setDatos] = useState([]);
  const [datosRender, setDatosRender] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const schema = yup.object().shape({
    idRuta: yup.number().integer().min(1),
    nombre: yup
      .string()
      .min(4, "Debe tener un longitud mayor a cuatro caracteres")
      .required(),
    identidad: yup
      .string()
      .min(4, "Debe tener un longitud mayor a cuatro caracteres")
      .required(),
    direccion: yup
      .string()
      .min(4, "Debe tener un longitud mayor a cuatro caracteres")
      .required(),
    telefono: yup
      .string()
      .min(4, "Debe tener un longitud mayor a cuatro caracteres")
      .required(),
  });
  const {
    setOpenModal,
    setOpenModal2,
    selectedRuta,
    setSelectedRuta,
    currentUser,
  } = useContext(AppContext);
  const onIdRutaChange = (e) => {
    setSelectedRuta(parseInt(e.target.value));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const save = async (data) => {
    clearErrors();
    setIsLoading(true);
    try {
      data.idUser = currentUser;
      const rta = await guardar(data);
      reset();
      actualizarDatos();
      setSelectedRuta(0);
      setOpenModal2(false);
      setOpenModal(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("server", error);
    }
  };

  const actualizarDatos = () => {
    (async () => {
      setIsLoading(true);
      try {
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
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError("server", error);
      }
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
    isLoading,
    handleSubmit,
    save,
    errors,
    selectedRuta,
    register,
    onIdRutaChange,
    setOpenModal2,
  };
}

export { useClientes };
