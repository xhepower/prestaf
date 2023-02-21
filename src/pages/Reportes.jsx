import useReportes from "../hooks/useReportes";
import Spinner from "../components/Spinner";
import "../styles/Reportes.scss";
function Reportes() {
  const {
    prestamos,
    clientes,
    pagos,
    gastos,
    register,
    handleSubmit,
    setError,
    clearErrors,
    errors,
    isLoading,
    retrieve,
  } = useReportes();
  return (
    <div className="login">
      <p className="form-titulo">Reportes</p>
      <div className="cuadro">
        <form noValidate onSubmit={handleSubmit(retrieve)}>
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
      </div>
      <div className="cuadro retractil">Clientes</div>
      <div className="cuadro retractil">Presta</div>
      <div className="cuadro retractil">Pagos</div>
      <div className="cuadro retractil">Gastos</div>
    </div>
  );
}

export default Reportes;
