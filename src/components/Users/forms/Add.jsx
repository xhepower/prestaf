import { useContext, useRef } from "react";
import UserContext from "../../../context/UserContext";
import AppContext from "../../../context/AppContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Spinner from "../../Spinner";
function Add(props) {
  const { setOpenModal } = useContext(AppContext);
  const { guardar, actualizarDatos, isLoading, setIsLoading } =
    useContext(UserContext);
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("no cumple con el formato de email")
      .required("Es un campo requerido"),
    password: yup
      .string()
      .min(4, "LA contraseña no puede ser menor a 4 caracteres")
      .max(32)
      .required("Es un campo requerido"),
  });
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const save = async (data) => {
    clearErrors();
    try {
      const rta = await guardar(data);
      reset();
      actualizarDatos();
      clearErrors();
      setOpenModal(false);
    } catch (error) {
      setIsLoading(false);
      setError("server", error);
    }
  };

  return (
    <form className="form userform" onSubmit={handleSubmit(save)}>
      {isLoading && Spinner}

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
