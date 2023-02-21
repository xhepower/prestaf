import { useContext, useState } from "react";
import PrestamoContext from "../../../context/PrestamoContext";
import ClienteContext from "../../../context/ClienteContext";
import AppContext from "../../../context/AppContext";
import ClientesPage from "../../../pages/Clientes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import moment, { now } from "moment/moment";
function Add(props) {
  const {
    setOpenModal,
    setOpenModal2,
    selectedCliente,
    setSelectedCliente,
    currentUser,
  } = useContext(AppContext);
  const { guardar, actualizarDatos } = useContext(PrestamoContext);
  const schema = yup.object().shape({
    idCliente: yup.number().integer().min(1),
    monto: yup.number().min(0).required(),
    tasa: yup.number().min(0).max(100).required(),
    vencimiento: yup.date().required(),
    emitido: yup.date().required(),
    saldo: yup.number().min(0).required(),
  });
  const onIdClienteChange = (e) => {
    setSelectedCliente(parseInt(e.target.value));
  };
  const calcularSaldo = (e) => {
    const monto = parseFloat(getValues("monto"));
    const tasa = parseFloat(getValues("tasa") / 3000);
    setSliderValue(parseFloat(getValues("tasa")));
    const emitido = moment(getValues("emitido"));
    const vencimiento = moment(getValues("vencimiento"));
    const dias = vencimiento.diff(emitido, "days");
    const saldo = monto + monto * tasa * dias;
    setValue("saldo", parseFloat(saldo));
  };
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      monto: 0,
      tasa: 0,
      vencimiento: new Date(),
    },
    resolver: yupResolver(schema),
  });

  const save = async (data) => {
    data.idUser = currentUser;
    const rta = await guardar(data);
    reset();
    actualizarDatos();
    setSelectedCliente(0);
    setOpenModal2(false);
    setOpenModal(false);
  };
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <form className="form clienteform" onSubmit={handleSubmit(save)}>
      <p className="form-titulo">Crear nueva prestamo</p>
      <label htmlFor="idCliente" className="label">
        Id Cliente:
      </label>
      <div>
        <input
          type="number"
          min="0"
          name="idCliente"
          placeholder="Ingrese aquí el id de la cliente"
          className="input input-email"
          value={selectedCliente}
          required
          onBlur={onIdClienteChange}
          {...register("idCliente", {
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
      <p>{errors.idCliente?.message}</p>

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
        {...register("monto", {
          onChange: (e) => calcularSaldo(e),
        })}
      />
      <p>{errors.monto?.message}</p>

      <label htmlFor="tasa" className="label">
        Tasa mensual
      </label>
      <input
        type="range"
        name="tasa"
        min="1"
        max="100"
        placeholder="Ingrese la tasa mensual del prestamo"
        className="input input-password"
        required
        {...register("tasa", {
          onChange: (e) => calcularSaldo(e),
        })}
      />
      <p className="slider-value input">{sliderValue}</p>
      <p>{errors.tasa?.message}</p>
      <label htmlFor="emitido" className="label">
        Fecha Emitido
      </label>
      <input
        type="date"
        name="emitido"
        placeholder="Ingrese la tasa mensual del prestamo"
        className="input input-password"
        required
        {...register("emitido", {
          onChange: (e) => calcularSaldo(e),
        })}
      />
      <p>{errors.emitido?.message}</p>
      <label htmlFor="tasa" className="label">
        Fecha Vencimiento
      </label>
      <input
        type="date"
        name="vencimiento"
        placeholder="Ingrese la tasa mensual del prestamo"
        className="input input-password"
        required
        {...register("vencimiento", {
          onChange: (e) => calcularSaldo(e),
        })}
      />
      <p>{errors.vencimiento?.message}</p>

      <label htmlFor="saldo" className="label">
        Saldo
      </label>
      <input
        type="number"
        step="0.00"
        name="saldo"
        min="0"
        align="right"
        placeholder="0.00"
        className="input input-password"
        disabled
        {...register("saldo")}
      />
      <p>{errors.saldo?.message}</p>

      <button className="primary-button login-button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default Add;
