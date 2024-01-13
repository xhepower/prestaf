import React, { useContext } from "react";
import Spinner from "../components/Spinner";

import useFormLogic from "../hooks/useFormLogic";
function Category() {
  const { handleSubmit, save, isLoading, errors, register } = useFormLogic();

  return (
    <form className="app-form" noValidate onSubmit={handleSubmit(save)}>
      {isLoading && <Spinner></Spinner>}
      <p className="errors">{errors.server?.message}</p>
      <label htmlFor="name" className="label">
        Nombre Category
      </label>
      <input
        name="name"
        placeholder="Ingrese aquí el nombre de la categoria"
        className="input input-email"
        {...register("name")}
      />
      <p className="errors">{errors.name?.message}</p>
      <label htmlFor="description" className="label">
        Descripcion
      </label>
      <input
        name="description"
        placeholder="Ingrese aquí la description"
        className="input input-email"
        {...register("description")}
      />
      <p className="errors">{errors.name?.message}</p>
      <input
        className="primary-button login-button"
        value="Guardar"
        type="submit"
        onClick={handleSubmit}
      ></input>
    </form>
  );
}

export default Category;
