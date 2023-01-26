import { useContext, useRef } from "react";
import UserContext from "../../../context/UserContext";
import AppContext from "../../../context/AppContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
function Add(props) {
  const { setOpenModal } = useContext(AppContext);
  const { guardar, actualizarDatos, sePuedeAgregar } = useContext(UserContext);
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(32).required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const save = async (data) => {
    const rta = await guardar(data);
    reset();
    actualizarDatos();
    setOpenModal(false);
  };

  return (
    <form className="form userform" onSubmit={handleSubmit(save)}>
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
      <p>{errors.email?.message}</p>
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
      <p>{errors.password?.message}</p>
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
      <p>{errors.role?.message}</p>
      <button className="primary-button login-button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default Add;
