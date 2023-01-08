import { useState, useRef, useEffect } from "react";

function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    alert("puto");
  };
  const form = useRef(null);
  return (
    <div className="login">
      <div className="messages">
        <p className="messages-text"></p>
      </div>
      <form className="login-form form" ref={form}>
        <label htmlFor="email" className="label">
          Correo eléctronico
        </label>
        <input
          type="email"
          name="email"
          placeholder="Ingrese aquí su correo electrónico"
          className="input input-email"
          required
        />
        <label htmlFor="password" className="label">
          Contraseña
        </label>
        <input
          type="password"
          name="password"
          placeholder="*********"
          className="input input-password"
          required
        />
        <input
          className="primary-button login-button"
          value="Entrar"
          type="submit"
          onClick={handleSubmit}
        ></input>
        <a href="/recovery-password">Olvidé mi contraseña</a>
      </form>
    </div>
  );
}

export default Login;
