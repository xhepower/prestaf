import { useContext } from "react";
import ClienteContext from "../../../context/ClienteContext";
import RutaContext from "../../../context/RutaContext";
import AppContext from "../../../context/AppContext";
import RutasPage from "../../../pages/Rutas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
function Add(props) {
  const {
    setOpenModal,
    setOpenModal2,
    selectedRuta,
    setSelectedRuta,
    currentUser,
  } = useContext(AppContext);
  const { guardar, actualizarDatos } = useContext(ClienteContext);
  const schema = yup.object().shape({
    idRuta: yup.number().integer().min(1),
    nombre: yup.string().min(4).required(),
    identidad: yup.string().min(4).required(),
    direccion: yup.string().min(4).required(),
    telefono: yup.string().min(4).required(),
  });
  const onIdRutaChange = (e) => {
    setSelectedRuta(parseInt(e.target.value));
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
    data.idUser = currentUser;
    const rta = await guardar(data);
    reset();
    actualizarDatos();
    setSelectedRuta(0);
    setOpenModal2(false);
    setOpenModal(false);
  };

  return (
    <form className="form rutaform" onSubmit={handleSubmit(save)}>
      <p className="form-titulo">Crear nueva cliente</p>
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
