import React, { useContext } from "react";
import Spinner from "../components/Spinner";

import useFormLogic from "../hooks/useFormLogic";
function User() {
  const { handleSubmit, save, isLoading, errors, register } = useFormLogic();

  return (
    <form className="app-form" noValidate onSubmit={handleSubmit(save)}>
      {isLoading && <Spinner></Spinner>}
      <p className="errors">{errors.server?.message}</p>
      <label htmlFor="email" className="label">
        Correo eléctronico
      </label>
      <input
        type="email"
        name="email"
        placeholder="Ingrese aquí su correo electrónico"
        className="input input-email"
        {...register("email")}
      />
      <p className="errors">{errors.email?.message}</p>
      <label htmlFor="password" className="label">
        Contraseña
      </label>
      <input
        type="password"
        name="password"
        placeholder="*********"
        className="input input-password"
        {...register("password")}
      />
      <p className="errors">{errors.password?.message}</p>
      <label htmlFor="password" className="label">
        Rol
      </label>
      <select id="role" name="role" {...register("role")}>
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="editor">Editor</option>
      </select>
      <p className="errors">{errors.role?.message}</p>
      <input
        className="primary-button login-button"
        value="Guardar"
        type="submit"
        onClick={handleSubmit}
      ></input>
    </form>
  );
}

export default User;
