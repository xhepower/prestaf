import React, { useContext } from "react";
import IntoContext from "../context/IntoContext";
import Spinner from "../components/Spinner";
import AppService from "../services/App.service";
import useFormLogic from "../hooks/useFormLogic";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Option from "../components/Option";
import * as yup from "yup";

function Client({ dato, setVisibleEdit }) {
  const { update } = useFormLogic();
  const actualizar = async (data) => {
    await update(dato.id, data);
  };
  const { actualizarDatos, guardar, editar, isLoading } =
    useContext(IntoContext);
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Debe ser de cuatro letras mínimo")
      .required("El nombre es requerida"),
    description: yup
      .string()
      .min(3, "Debe ser de cuatro letras mínimo")
      .required("La descripcion es requerida"),
    price: yup
      .number()
      .min(1, "debe ser un numero positivo")
      .required("El precio es requerida"),
    idCategory: yup
      .number()
      .min(1, "debe ser un numero positivo")
      .required("El codigo de la catregoria es requerida"),
  });

  const defaultValues = {
    price: dato.price,
    name: dato.name,
    description: dato.description,
    idCategory: dato.idCategory,
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
  const UnitService = new AppService("units");
  return (
    <form className="app-form" noValidate onSubmit={handleSubmit(actualizar)}>
      {isLoading && <Spinner></Spinner>}
      <p className="errors">{errors.server?.message}</p>

      <label htmlFor="name" className="label">
        Nombre Producte
      </label>
      <input
        name="name"
        placeholder="Ingrese aquí el nombre del producte"
        className="input input-email"
        {...register("name")}
      />
      <p className="errors">{errors.name?.message}</p>
      <label htmlFor="name" className="label">
        Descripcion
      </label>
      <input
        name="description"
        placeholder="Ingrese descripcion del producto"
        className="input input-email"
        {...register("description")}
      />
      <p className="errors">{errors.description?.message}</p>
      <label htmlFor="price" className="label">
        Precio
      </label>
      <input
        name="price"
        type="number"
        step={0.0}
        placeholder="Ingrese aquí el precio"
        className="input input-email"
        {...register("price")}
      />
      <p className="errors">{errors.price?.message}</p>
      <label htmlFor="unitId" className="label">
        Categoria
      </label>
      <select
        name="idCategory"
        className="input input-email"
        {...register("idCategory")}
      >
        {/* <option value="value1">Value 1</option>
        <option value="value2" selected>
          Value 2
        </option>
        <option value="value3">Value 3</option> */}
        <Option tabla="categories" campo="name"></Option>
      </select>
      <p className="errors">{errors.unitId?.message}</p>
      <input
        className="primary-button login-button"
        value="Guardar"
        type="submit"
        onClick={handleSubmit}
      ></input>
    </form>
  );
}

export default Client;
