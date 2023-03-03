import ReporteContext from "../../context/ReporteContext";
import { useContext } from "react";
import Spinner from "../Spinner";
import "../../styles/Reportes.scss";
function Fechas() {
  const { retrieve, handleSubmit, isLoading, errors, register } =
    useContext(ReporteContext);
  return (
    <form
      className="form userform"
      noValidate
      onSubmit={handleSubmit(retrieve)}
    >
      {isLoading && <Spinner></Spinner>}
      <p className="errors">{errors.server?.message}</p>
      <div>
        <p>Desde</p>
        <input
          className="fecha"
          name="fecha1"
          type="date"
          {...register("fecha1")}
        />
        <p className="errors">{errors.fecha1?.message}</p>
      </div>
      <div>
        <p>Hasta </p>
        <input
          className="fecha"
          name="fecha2"
          type="date"
          {...register("fecha2")}
        />
        <p className="errors">{errors.fecha2?.message}</p>
      </div>
      <div>
        <input className="btn-submit" type="submit" value="Enviar" />
      </div>
    </form>
  );
}

export default Fechas;
