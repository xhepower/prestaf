import { useRef, useContext } from "react";
import authService from "../services/auth.service";
import Appcontext from "../context/AppContext";
import { useToken } from "../hooks/useToken";

function Login() {
  const { guardarToken } = useContext(Appcontext);

  const handleLogin = async (data) => {
    const datos = { errors: null, token: null };

    try {
      const rta = await authService.login(data);
      datos.token = rta.data.token;
      guardarToken(datos.token);
      window.location.href = "/";
    } catch (error) {
      datos.errors = error.response.data;
    } finally {
    }
    return datos;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const rta = await handleLogin(data);
  };

  const form = useRef(null);
  return (
    <div className="login ">
      <div className="messages">
        <p className="messages-text"></p>
      </div>
      <form className="login-form userform form" ref={form}>
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
