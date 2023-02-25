import { useEffect, useState, useContext } from "react";

import AppContext from "../context/AppContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import gastoService from "../services/gasto.service";

function useGastos() {
  const [datos, setDatos] = useState([]);
  const [datosRender, setDatosRender] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {
    setOpenModal,
    setOpenModal2,
    selectedUser,
    setSelectedUser,
    currentUser,
  } = useContext(AppContext);
  const onIdUserChange = (e) => {
    setSelectedUser(parseInt(e.target.value));
  };
  const schema = yup.object().shape({
    idUser: yup
      .number("No es un numero")
      .integer("Debe ser un numero entero")
      .min(1, "Debe ser mayor o igual a 1"),
    descripcion: yup
      .string()
      .min(4, "Debe tener al menos 4 caracteres")
      .max(32)
      .required("Campo requerido"),
    emitido: yup
      .date("No cumple con el formato de fecha")
      .required("La fecha es requerida"),
    monto: yup
      .number()
      .min(0, "Debe ser mayor que cero")
      .required("Campo obligatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const save = async (data) => {
    data = { ...data, idUser: currentUser };
    setIsLoading(true);
    try {
      await guardar(data);
      reset();
      setSelectedUser(0);
      setOpenModal2(false);
      setOpenModal(false);
      actualizarDatos();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("server", error);
    }
  };
  const actualizarDatos = () => {
    clearErrors();
    setIsLoading(true);
    (async () => {
      try {
        setDatos(
          (await gastoService.getAll()).data
            .sort(function (a, b) {
              return a.id - b.id; /* Modificar si se desea otra propiedad */
            })
            .reverse()
        );
        setDatosRender(
          (await gastoService.getAll()).data
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
    return await gastoService.getOne(id);
  };

  const eliminar = (id) => {
    if (window.confirm(`¿Desea eliminar la gasto #${id}?`)) {
      (async () => {
        gastoService.delete(id);
      })();
    }
  };

  const guardar = async (data) => {
    if (window.confirm("¿Desea guardar la gasto?")) {
      (async () => {
        gastoService.save(data);
        setDatos((await gastoService.getAll()).data);
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
    register,
    handleSubmit,
    errors,
    setOpenModal2,
    onIdUserChange,
    selectedUser,
    save,
    setValue,
    isLoading,
  };
}

export { useGastos };
