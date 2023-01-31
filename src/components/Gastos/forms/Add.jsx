import { useContext } from "react";
import GastoContext from "../../../context/GastoContext";
import UserContext from "../../../context/UserContext";
import AppContext from "../../../context/AppContext";
import UsersPage from "../../../pages/Users";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
function Add(props) {
  const {
    setOpenModal,
    setOpenModal2,
    selectedUser,
    setSelectedUser,
    currentUser,
  } = useContext(AppContext);
  const { guardar, actualizarDatos } = useContext(GastoContext);
  const schema = yup.object().shape({
    idUser: yup.number().integer().min(1),
    descripcion: yup.string().min(4).max(32).required(),
    monto: yup.number().min(0).required(),
  });
  const onIdUserChange = (e) => {
    setSelectedUser(parseInt(e.target.value));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const save = async (data) => {
    data = { ...data, idUser: currentUser };
    const rta = await guardar(data);
    reset();
    actualizarDatos();
    setSelectedUser(0);
    setOpenModal2(false);
    setOpenModal(false);
  };

  return (
    <form className="form userform" onSubmit={handleSubmit(save)}>
      <p className="form-titulo">Crear nueva gasto</p>
      {/* <label htmlFor="idUser" className="label">
        Id Usuario:
      </label>
      <div>
        <input
          type="number"
          min="0"
          name="idUser"
          placeholder="Ingrese aquí el id del usuario"
          className="input input-email"
          value={selectedUser}
          required
          onChange={onIdUserChange}
          {...register("idUser")}
        />
        <button
          className="btnbuscar boton"
          type="button"
          onClick={() => setOpenModal2(true)}
        >
          <span className="icon">
            <i className="fa fa-search"></i>
          </span>
        </button>
      </div> */}

      <p>{errors.idUser?.message}</p>
      <label htmlFor="descripcion" className="label">
        Descripcion
      </label>
      <input
        type="text"
        name="descripcion"
        placeholder="Ingrese la descripcion de la gasto"
        className="input input-password"
        required
        {...register("descripcion")}
      />
      <p>{errors.descripcion?.message}</p>
      <label htmlFor="monto" className="label">
        Monto
      </label>
      <input
        type="number"
        step="any"
        name="monto"
        placeholder="Ingrese el monto del gasto"
        className="input input-password"
        required
        {...register("monto")}
      />
      <p>{errors.monto?.message}</p>
      <button className="primary-button login-button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default Add;
