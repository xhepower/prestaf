import ClientePage from "../components/Clientes";
import ClienteContext from "../context/ClienteContext";
import { useClientes } from "../hooks/useClientes";
function Clientes() {
  const initial = useClientes();
  return (
    <ClienteContext.Provider value={initial}>
      <div className="Login">
        <ClientePage></ClientePage>
      </div>
    </ClienteContext.Provider>
  );
}

export default Clientes;
