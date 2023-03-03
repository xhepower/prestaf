import ReporteContext from "../context/ReporteContext";
import useReportes from "../hooks/useReportes";
import Reporte from "../components/Reportes/Reporte";
import "../styles/Reportes.scss";
function Reportes() {
  const initial = useReportes();
  return (
    <ReporteContext.Provider value={initial}>
      <Reporte></Reporte>
    </ReporteContext.Provider>
  );
}

export default Reportes;
