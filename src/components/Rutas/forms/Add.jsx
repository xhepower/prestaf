import { useContext } from "react";
import RutaContext from "../../../context/RutaContext";
import Spinner from "../../Spinner";
function Add(props) {
  const {
    register,
    handleSubmit,
    errors,
    save,
    setValue,
    selectedUser,
    setOpenModal2,
    isLoading,
  } = useContext(RutaContext);
  return (
    <form className="form userform" onSubmit={handleSubmit(save)} noValidate>
      {isLoading && <Spinner></Spinner>}
      <p className="errors">{errors.server?.message}</p>
      <p className="form-titulo">Crear nueva ruta</p>
      <label htmlFor="idUser" className="label">
        Id Usuario:
      </label>
      <div>
        <input
          type="number"
          min="0"
          name="idUser"
          placeholder="Ingrese aquí el id del usuario"
          className="input input-email"
          required
          value={selectedUser}
          onChange={() => {
            setValue("idUser", selectedUser);
          }}
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
      </div>

      <p>{errors.idUser?.message}</p>
      <label htmlFor="password" className="label">
        Descripcion
      </label>
      <input
        type="text"
        name="descripcion"
        placeholder="Ingrese la descripcion de la ruta"
        className="input input-password"
        required
        {...register("descripcion")}
      />
      <p>{errors.descripcion?.message}</p>
      <button className="primary-button login-button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default Add;
