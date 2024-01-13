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
    price: yup
      .number()
      .min(1, "debe ser un numero positivo")
      .required("El precio es requerida"),
    cost: yup
      .number()
      .min(1, "debe ser un numero positivo")
      .required("El costo es requerida"),
    isProduct: yup.boolean(),
    stock: yup
      .number()
      .min(1, "debe ser un numero positivo")
      .required("El stock es requerida"),
    minimum: yup
      .number()
      .min(1, "debe ser un numero positivo")
      .required("El minimo es requerida"),
    unitId: yup
      .number()
      .min(1, "debe ser un numero positivo")
      .required("El codigo de la unidad es requerida"),
  });
  const defaultValues = {
    name: dato.name,
    price: dato.price,
    stock: dato.stock,
    minimum: dato.minimum,
    unitId: dato.unitId,
    cost: dato.cost,
    isProduct: dato.isProduct,
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
    <form className="app-form" noValidate onSubmit={handleSubmit(actualizar)}>
      {isLoading && <Spinner></Spinner>}
      <p className="errors">{errors.server?.message}</p>
      <label htmlFor="name" className="label">
        Nombre Ingrediente
      </label>
      <input
        name="name"
        placeholder="Ingrese aquí el nombre del ingrediente"
        className="input input-email"
        {...register("name")}
      />
      <p className="errors">{errors.name?.message}</p>
      <label htmlFor="cost" className="label">
        Costo
      </label>
      <input
        name="cost"
        type="number"
        step={0.0}
        placeholder="Ingrese aquí el costo"
        className="input input-email"
        {...register("cost")}
      />
      <p className="errors">{errors.cost?.message}</p>
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
      <label htmlFor="isProduct" className="label">
        ¿Es un producto?
      </label>
      <input
        name="IsProduct"
        type="checkbox"
        className="input input-email"
        {...register("isProduct")}
      />
      <p className="errors">{errors.IsProduct?.message}</p>
      <label htmlFor="unitId" className="label">
        Unidad
      </label>
      <select
        name="unitId"
        className="input input-email"
        {...register("unitId")}
        defaultValue={defaultValues.unitId}
      >
        {/* <option value="value1">Value 1</option>
        <option value="value2" selected>
          Value 2
        </option>
        <option value="value3">Value 3</option> */}
        <Option tabla="units" campo="name"></Option>
      </select>
      <p className="errors">{errors.unitId?.message}</p>
      <label htmlFor="stock" className="label">
        Stock
      </label>
      <input
        name="stock"
        type="number"
        step={0.0}
        placeholder="Ingrese aquí el stock"
        className="input input-email"
        {...register("stock")}
      />
      <p className="errors">{errors.stock?.message}</p>
      <label htmlFor="minimum" className="label">
        Minimo
      </label>
      <input
        name="minimum"
        type="number"
        step={0.0}
        placeholder="Ingrese aquí el minimo"
        className="input input-email"
        {...register("minimum")}
      />
      <p className="errors">{errors.minimum?.message}</p>
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
