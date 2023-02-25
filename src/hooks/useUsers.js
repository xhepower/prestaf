import { useEffect, useState, useContext } from "react";
import userService from "../services/user.service";
import AppContext from "../context/AppContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
function useUsers() {
  const { setOpenModal } = useContext(AppContext);
  const [datos, setDatos] = useState([]);
  const [datosRender, setDatosRender] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //////////////////////////////////
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("no cumple con el formato de email")
      .required("Es un campo requerido"),
    password: yup
      .string()
      .min(4, "LA contraseña no puede ser menor a 4 caracteres")
      .max(32)
      .required("Es un campo requerido"),
  });
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const save = async (data) => {
    clearErrors();
    setIsLoading(true);
    try {
      const rta = await guardar(data);
      reset();
      actualizarDatos();
      setOpenModal(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError("server", error);
    }
  };
  /////////////////////////////////

  const actualizarDatos = () => {
    setIsLoading(true);
    (async () => {
      try {
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
    register,
    handleSubmit,
    save,
    errors,
    setError,
  };
}

export { useUsers };
