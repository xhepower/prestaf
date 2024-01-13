import React, { useContext, useState, useEffect } from "react";
import IntoContext from "../context/IntoContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AppService from "../services/App.service";
import OrderContext from "../context/OrderContext";

function useFormLogic() {
  const { defaultValues, schema, actualizarDatos, guardar, editar } =
    useContext(IntoContext);
  const { setItems, setTotal } = useContext(OrderContext);
  const [isLoading, setIsLoading] = useState(false);

  const save = async (data) => {
    setIsLoading(true);

    try {
      let rta;
      //data.idUser = currentUser;
      if (window.confirm("¿Desea guardar el registro?")) {
        rta = await guardar(data);
        reset();
        actualizarDatos();
      }
      setIsLoading(false);
      setItems([]);
      setTotal(0);
      return rta;
    } catch (error) {
      setIsLoading(false);
      setError("server", error);
    }
  };
  const update = async (id, data) => {
    setIsLoading(true);

    try {
      let rta;
      //data.idUser = currentUser;
      if (window.confirm("¿Desea actualizar el registro?")) {
        rta = await editar(id, data);
        reset();
        actualizarDatos();
      }
      setIsLoading(false);
      return rta;
    } catch (error) {
      setIsLoading(false);
      setError("server", error);
    }
  };
  const llenadoCmb = async (tabla, campo, atributos) => {
    let rta;
    const servicio = new AppService(tabla);
    const datos = (await servicio.getAll()).data;
    if (atributos == undefined) {
      rta = datos.map((item) => {
        return { id: item.id, campo: item[campo] };
      });
    } else {
      rta = datos.map((item) => {
        let arre = { id: item.id, campo: item[campo] };
        let ptr = {};
        atributos.map((atributo) => {
          ptr[atributo] = item[atributo];
        });
        arre["atr"] = ptr;

        return arre;
      });
    }

    return rta;
  };
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  return {
    handleSubmit,
    save,
    isLoading,
    errors,
    register,
    llenadoCmb,
    update,
  };
}

export default useFormLogic;
