import PagoPage from "../components/Pagos";
import PagoContext from "../context/PagoContext";
import { usePagos } from "../hooks/usePagos";
function Pagos() {
  const initial = usePagos();
  return (
    <PagoContext.Provider value={initial}>
      <div className="Login">
        <PagoPage></PagoPage>
      </div>
    </PagoContext.Provider>
  );
}

export default Pagos;
