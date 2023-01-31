import PrestamoPage from "../components/Prestamos";
import PrestamoContext from "../context/PrestamoContext";
import { usePrestamos } from "../hooks/usePrestamos";
function Prestamos() {
  const initial = usePrestamos();
  return (
    <PrestamoContext.Provider value={initial}>
      <div className="Login">
        <PrestamoPage></PrestamoPage>
      </div>
    </PrestamoContext.Provider>
  );
}

export default Prestamos;
