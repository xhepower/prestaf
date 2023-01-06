import { useState, useRef, useEffect } from "react";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [firstTry, setFirstTry] = useState(true);
  const form = useRef(null);
  return (
    <div className="login">
      <div className="messages">
        <p className="messages-text"></p>
      </div>
      <form className="login-form form">
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
        ></input>
        <a href="/recovery-password">Olvidé mi contraseña</a>
      </form>
    </div>
  );
}

export default Login;
