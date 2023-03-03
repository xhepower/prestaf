import { NavbarWrapper } from "./NavbarWrapper";
import { Link } from "react-router-dom";
import PrestamoService from "../../services/prestamo.service";
import Appcontext from "../../context/AppContext";
import { useContext } from "react";
function Navbar({ open, setOpen }) {
  const { removerToken, currentRole } = useContext(Appcontext);
  const handleClickSalir = () => {
    removerToken();
    window.location.href = "/login";
  };
  const cerrarMenu = () => {
    setOpen(false);
  };
  const actualizarMoras = () => {
    if (window.confirm("¿Desea actualizar moras, ahora?")) {
      (async () => {
        try {
          await PrestamoService.actualizarRutas();
        } catch (error) {
          console.error(error);
        }
      })();
    }
  };
  return (
    <NavbarWrapper open={open}>
      <Link to="/" className="nav-item" onClick={cerrarMenu}>
        Inicio
      </Link>
      {currentRole == "admin" && (
        <>
          <Link to="/users" onClick={cerrarMenu}>
            Usuarios
          </Link>
          <Link to="/rutas" onClick={cerrarMenu}>
            Rutas
          </Link>
        </>
      )}
      <Link to="/prestamos" onClick={cerrarMenu}>
        Prestamos
      </Link>
      <Link to="/pagos" onClick={cerrarMenu}>
        Pagos
      </Link>
      <Link to="/clientes" onClick={cerrarMenu}>
        Clientes
      </Link>
      <Link to="/gastos" onClick={cerrarMenu}>
        Gastos
      </Link>
      <Link to="/reportes" onClick={cerrarMenu}>
        Reportes
      </Link>
      <Link onClick={actualizarMoras}>Actualizar moras</Link>
      <Link to="/users" onClick={handleClickSalir}>
        Salir
      </Link>
    </NavbarWrapper>
  );
}

export default Navbar;
