import GastoPage from "../components/Gastos";
import GastoContext from "../context/GastoContext";
import { useGastos } from "../hooks/useGastos";
function Gastos() {
  const initial = useGastos();
  return (
    <GastoContext.Provider value={initial}>
      <div className="Login">
        <GastoPage></GastoPage>
      </div>
    </GastoContext.Provider>
  );
}

export default Gastos;
