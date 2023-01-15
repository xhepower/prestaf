import React, { useState, useRef, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import authService from "../services/auth.service";

function ChangePassword() {
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [firstTry, setFirstTry] = useState(true);
  const form = useRef(null);
  const obtenerToken = () => {
    const token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    return token;
  };
  const handleLogin = async (data) => {
    const datos = { errors: null };
    try {
      const rta = await authService.changePassword(data);
      window.location.href = "/password-recovery";
      setIsLoading(false);
    } catch (error) {
      datos.errors = error.response.status;
      setIsLoading(false);
    }
    return datos;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    if (formData.get("password1") == formData.get("password2")) {
      let elToken = new URLSearchParams(document.location.search).get("token");
      const data = {
        newPassword: formData.get("password1"),
        token: elToken,
      };
      setFirstTry(false);
      const rta = await handleLogin(data);
      setErrors(rta.errors);
    } else {
      // const query = new URLSearchParams(useLocation().search);
      //const token = query.get("token");

      setFirstTry(false);
      setErrors("Las contraseñas no coinciden");
    }
  };
  if (obtenerToken()) {
    window.location.href = "/";
  }
  return (
    <div className="Login">
      {isLoading ? (
        <div className="loading-container">
          <p className="loading-text">Cargando. Espere...</p>
        </div>
      ) : null}
      {errors && !firstTry && !isLoading ? (
        <div className="error-container">
          <p className="errortext">Error de autenticación</p>
          {errors == "Las contraseñas no coinciden" ? (
            <p className="errortext">Las contraseñas no coinciden</p>
          ) : null}
        </div>
      ) : null}
      <div className="Login-container">
        <form className="login-form userform form" ref={form}>
          <label htmlFor="password1" className="label">
            Nueva Contraseña
          </label>
          <input
            type="password"
            name="password2"
            placeholder="*********"
            className="input input-password"
            required
          />
          <label htmlFor="password2" className="label">
            Repetir contraseña
          </label>
          <input
            type="password"
            name="password1"
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
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
