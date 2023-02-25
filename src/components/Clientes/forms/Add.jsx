import { useContext } from "react";
import ClienteContext from "../../../context/ClienteContext";
import Spinner from "../../Spinner";
function Add(props) {
  const {
    guardar,
    actualizarDatos,
    isLoading,
    handleSubmit,
    save,
    errors,
    selectedRuta,
    register,
    onIdRutaChange,
    setOpenModal2,
  } = useContext(ClienteContext);

  return (
    <form className="form rutaform" onSubmit={handleSubmit(save)}>
      <p className="form-titulo">Crear nueva cliente</p>
      {isLoading && <Spinner></Spinner>}
      <p className="errors">{errors.server?.message}</p>
      <label htmlFor="idRuta" className="label">
        Id Ruta:
      </label>
      <div>
        <input
          type="number"
          min="0"
          name="idRuta"
          placeholder="Ingrese aquí el id de la ruta"
          className="input input-email"
          value={selectedRuta}
          required
          onChange={onIdRutaChange}
          {...register("idRuta")}
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

      <p>{errors.idRuta?.message}</p>
      <label htmlFor="nombre" className="label">
        Nombre
      </label>
      <input
        type="text"
        name="nombre"
        placeholder="Ingrese el nombre del cliente"
        className="input input-password"
        required
        {...register("nombre")}
      />
      <p>{errors.nombre?.message}</p>
      <label htmlFor="identidad" className="label">
        Identidad
      </label>
      <input
        type="text"
        name="identidad"
        placeholder="Ingrese la identidad del cliente"
        className="input input-password"
        required
        {...register("identidad")}
      />
      <p>{errors.identidad?.message}</p>
      <label htmlFor="identidad" className="label">
        Direccion
      </label>
      <input
        type="text"
        name="direccion"
        placeholder="Ingrese la direccion del cliente"
        className="input input-password"
        required
        {...register("direccion")}
      />
      <p>{errors.direccion?.message}</p>
      <label htmlFor="identidad" className="label">
        Teléfono
      </label>
      <input
        type="text"
        name="telefono"
        placeholder="Ingrese el teléfono del cliente"
        className="input input-password"
        required
        {...register("telefono")}
      />
      <p>{errors.telefono?.message}</p>
      <button className="primary-button login-button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default Add;
