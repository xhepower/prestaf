import { useContext } from "react";
import RutaPage from "../components/Rutas";
import RutaContext from "../context/RutaContext";
import { useRutas } from "../hooks/useRutas";
function Rutas() {
  const initial = useRutas();
  const { setSelectedRutas } = useContext(RutaContext);

  return (
    <RutaContext.Provider value={initial}>
      <div className="Login">
        <RutaPage></RutaPage>
      </div>
    </RutaContext.Provider>
  );
}

export default Rutas;
