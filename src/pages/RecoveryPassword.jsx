import React, { useState, useRef, useEffect } from "react";

import "../styles/Login.css";

import authService from "../services/auth.service";

function RecoveryPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const form = useRef(null);

  const handleLogin = async (data) => {
    const datos = { errors: null };
    setIsLoading(true);
    try {
      const rta = await authService.recoveryPassword(data);
      setIsLoading(false);
      window.location.href = "/email-sent";
    } catch (error) {
      datos.errors = error.response.status;
      setIsLoading(false);
    }
    return datos;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
    };

    const rta = await handleLogin(data);
    setErrors(rta.errors);
  };

  return (
    <div className="login">
      <div className="Login-container">
        <form className="form" ref={form}>
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

          <input
            className="primary-button login-button"
            value="Entrar"
            type="submit"
            onClick={handleSubmit}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default RecoveryPassword;
