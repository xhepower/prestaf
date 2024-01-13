import React from "react";
import { useLogin } from "../hooks/useLogin";
import { useToken } from "../hooks/useToken";
import Spinner from "../components/Spinner";
import "../styles/Form.scss";
function Login() {
  const { handleSubmit, save, isLoading, errors, register } = useLogin();
  const { obtenerToken } = useToken();
  const tokencito = obtenerToken();

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
      <input
        className="primary-button login-button"
        value="Entrar"
        type="submit"
        onClick={handleSubmit}
      ></input>
      <a href="/recovery-password">Olvidé mi contraseña</a>
    </form>
  );
}

export default Login;
