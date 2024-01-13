import React from "react";
import Spinner from "../components/Spinner";
import AppService from "../services/App.service";
import useFormLogic from "../hooks/useFormLogic";
import Option from "../components/Option";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
function DetailProductAdd(props) {
  const { id } = props;
  const service = new AppService("detailproducts");
  const schema = yup.object().shape({
    ingredientId: yup
      .number()
      .min(1, "debe ser un numero positivo")
      .required("El id ingredeinte es requerida"),
    quantity: yup
      .number()
      .min(1, "debe ser un numero positivo")
      .required("El id ingredeinte es requerida"),
  });
  const defaultValues = {
    ingredientId: 0,
    quantity: 0,
  };
  const { isLoading, setIsLoading } = useFormLogic();
  const save = async (data) => {
    try {
      let rta;
      //data.idUser = currentUser;
      if (window.confirm("¿Desea guardar el registro?")) {
        await service.save({ ...data, productId: id });
        // await actualizarDatos();
      }

      return rta;
    } catch (error) {
      setError("server", error);
    }
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

  return (
    <form className="app-form" noValidate onSubmit={handleSubmit(save)}>
      {isLoading && <Spinner></Spinner>}
      <p className="errors">{errors.server?.message}</p>

      <label htmlFor="ingredientId" className="label">
        Ingrediente
      </label>
      <select
        name="ingredientId"
        className="input input-email"
        {...register("ingredientId")}
      >
        <Option tabla="ingredients" campo="name"></Option>
      </select>
      <p className="errors">{errors.ingredientId?.message}</p>
      <label htmlFor="quantity" className="label">
        Cantidad
      </label>
      <input
        name="quantity"
        type="number"
        step={0.0}
        placeholder="Ingrese aquí la cantidad"
        className="input input-email"
        {...register("quantity")}
      />
      <p className="errors">{errors.quantity?.message}</p>
      <input
        className="primary-button login-button"
        value="Guardar"
        type="submit"
        onClick={handleSubmit}
      ></input>
    </form>
  );
}

export default DetailProductAdd;
