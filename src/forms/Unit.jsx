import React, { useContext } from "react";
import Spinner from "../components/Spinner";

import useFormLogic from "../hooks/useFormLogic";
function Unit() {
  const { handleSubmit, save, isLoading, errors, register } = useFormLogic();

  return (
    <form className="app-form" noValidate onSubmit={handleSubmit(save)}>
      {isLoading && <Spinner></Spinner>}
      <p className="errors">{errors.server?.message}</p>
      <label htmlFor="name" className="label">
        Nombre Unidad
      </label>
      <input
        name="name"
        placeholder="Ingrese aquí el nombre de la unidad"
        className="input input-email"
        {...register("name")}
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

export default Unit;
