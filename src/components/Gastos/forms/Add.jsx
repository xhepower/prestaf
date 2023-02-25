import { useContext } from "react";
import GastoContext from "../../../context/GastoContext";
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
  } = useContext(GastoContext);
  return (
    <form className="form userform" onSubmit={handleSubmit(save)} noValidate>
      <p className="form-titulo">Crear nueva gasto</p>
      {isLoading && <Spinner></Spinner>}
      <p className="errors">{errors.server?.message}</p>
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
      <label htmlFor="emitido" className="label">
        Emitido
      </label>
      <input
        type="date"
        name="emitido"
        className="input input-password"
        required
        {...register("emitido")}
      />
      <p>{errors.emitido?.message}</p>
      <button className="primary-button login-button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default Add;
