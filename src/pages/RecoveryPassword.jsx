import React, { useState, useRef, useEffect } from "react";
import "../styles/Login.css";
import { useRecoveryPassword } from "../hooks/useRecoveryPassword";
import Spinner from "../components/Spinner";
function RecoveryPassword() {
  const { handleSubmit, save, isLoading, errors, register } =
    useRecoveryPassword();
  return (
    <div className="login">
      <div className="Login-container">
        <form
          className="login-form userform form"
          noValidate
          onSubmit={handleSubmit(save)}
        >
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
          <input
            className="primary-button login-button"
            value="Entrar"
            type="submit"
            // onClick={}
          ></input>
        </form>
      </div>
    </div>
  );
}

export default RecoveryPassword;
