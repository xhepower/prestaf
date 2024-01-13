import React, { useContext } from "react";
import Spinner from "../components/Spinner";
import AppService from "../services/App.service";
import useFormLogic from "../hooks/useFormLogic";
import Option from "../components/Option";
function Client() {
  const { handleSubmit, save, isLoading, errors, register } = useFormLogic();
  const UnitService = new AppService("units");
  return (
    <form className="app-form" noValidate onSubmit={handleSubmit(save)}>
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
        onClick={(data) => {}}
      ></input>
    </form>
  );
}

export default Client;
