import useChangePassword from "../hooks/useChangePassword";
import Spinner from "../components/Spinner";
import "../styles/Form.scss";
function ChangePassword() {
  const { handleSubmit, save, isLoading, errors, register } =
    useChangePassword();
  return (
    <div className="Login">
      <form
        className="login-form userform form"
        noValidate
        onSubmit={handleSubmit(save)}
      >
        {isLoading && <Spinner></Spinner>}
        <p className="errors">{errors.server?.message}</p>
        <p className="errors">{errors.coincidencia?.message}</p>
        <label htmlFor="password1" className="label">
          Nueva Contraseña
        </label>
        <input
          type="password"
          name="password2"
          placeholder="*********"
          className="input input-password"
          {...register("password2")}
        />
        <p className="errors">{errors.password2?.message}</p>
        <label htmlFor="password2" className="label">
          Repetir contraseña
        </label>
        <input
          type="password"
          name="password1"
          placeholder="*********"
          className="input input-password"
          {...register("password1")}
        />
        <p className="errors">{errors.password1?.message}</p>
        <input
          className="primary-button login-button"
          value="Entrar"
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default ChangePassword;
