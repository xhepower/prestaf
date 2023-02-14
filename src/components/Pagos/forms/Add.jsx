import { useContext, useState } from "react";
import PagoContext from "../../../context/PagoContext";
import AppContext from "../../../context/AppContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment from "moment/moment";
function Add(props) {
  const {
    setOpenModal,
    setOpenModal2,
    selectedPrestamo,
    setSelectedPrestamo,
    currentUser,
  } = useContext(AppContext);
  const { guardar, actualizarDatos } = useContext(PagoContext);
  const schema = yup.object().shape({
    idPrestamo: yup.number().integer().min(1),
    monto: yup.number().min(0).required(),
    emitido: yup.date().required(),
  });
  const onIdPrestamoChange = (e) => {
    setSelectedPrestamo(parseInt(e.target.value));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      monto: 0,
      emitido: new Date(),
    },
    resolver: yupResolver(schema),
  });

  const save = async (data) => {
    data.idUser = currentUser;
    const rta = await guardar(data);
    reset();
    actualizarDatos();
    setSelectedPrestamo(0);
    setOpenModal2(false);
    setOpenModal(false);
  };
  return (
    <form className="form pagoform" onSubmit={handleSubmit(save)}>
      <p className="form-titulo">Crear nueva pago</p>
      <label htmlFor="idPrestamo" className="label">
        Id Pago:
      </label>
      <div>
        <input
          type="number"
          min="0"
          name="idPrestamo"
          placeholder="Ingrese aquí el id de la pago"
          className="input input-email"
          value={selectedPrestamo}
          required
          onBlur={onIdPrestamoChange}
          {...register("idPrestamo", {
            setValueAs: (v) => parseInt(v),
          })}
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
      <p>{errors.idPago?.message}</p>

      <label htmlFor="monto" className="label">
        Monto
      </label>
      <input
        type="number"
        step="any"
        name="monto"
        min="0"
        placeholder="Ingrese el monto del préstamo"
        className="input input-password"
        required
        {...register("monto")}
      />
      <p>{errors.monto?.message}</p>
      <p>{errors.tasa?.message}</p>
      <label htmlFor="emitido" className="label">
        Fecha Emitido
      </label>
      <input
        type="date"
        name="emitido"
        placeholder="Ingrese la tasa mensual del pago"
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
