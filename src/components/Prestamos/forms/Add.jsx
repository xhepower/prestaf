import { useContext } from "react";
import PrestamoContext from "../../../context/PrestamoContext";
import Spinner from "../../Spinner";
function Add(props) {
  const {
    selectedCliente,
    handleSubmit,
    save,
    onIdClienteChange,
    register,
    setOpenModal2,
    errors,
    calcularSaldo,
    sliderValue,
    isLoading,
  } = useContext(PrestamoContext);

  return (
    <form className="form clienteform" onSubmit={handleSubmit(save)} noValidate>
      <p className="form-titulo">Crear nueva prestamo</p>
      {isLoading && <Spinner></Spinner>}
      <p className="errors">{errors.server?.message}</p>
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
      <p className="errors">{errors.idCliente?.message}</p>

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
      <p className="errors">{errors.monto?.message}</p>

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
      <p className="errors">{errors.tasa?.message}</p>
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
      <p className="errors">{errors.emitido?.message}</p>
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
      <p className="errors">{errors.vencimiento?.message}</p>

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
      <p className="errors">{errors.saldo?.message}</p>

      <button className="primary-button login-button" type="submit">
        Guardar
      </button>
    </form>
  );
}

export default Add;
