import { useContext, useRef } from "react";
import UserContext from "../../../context/UserContext";

import Spinner from "../../Spinner";
function Add(props) {
  const { isLoading, handleSubmit, save, register, errors } =
    useContext(UserContext);

  return (
    <form className="form userform" onSubmit={handleSubmit(save)} noValidate>
      {isLoading && Spinner}
      <p className="errors">{errors.server?.message}</p>
      <p className="form-titulo">Crear nuevo usuario</p>
      <label htmlFor="email" className="label">
        Correo eléctronico
      </label>
      <input
        type="email"
        name="email"
        placeholder="Ingrese aquí su correo electrónico"
        className="input input-email"
        required
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
        required
        {...register("password")}
      />
      <p className="errors">{errors.password?.message}</p>
      <label htmlFor="role" className="label">
        Rol
      </label>
      <select
        name="role"
        defaultValue="user"
        className="input input-password"
        {...register("role")}
      >
        <option value="user">Cobrador</option>
        <option value="admin">Administrador</option>
      </select>
      <p className="errors">{errors.role?.message}</p>
      <button className="primary-button login-button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default Add;
