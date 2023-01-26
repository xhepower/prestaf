import { NavbarWrapper } from "./NavbarWrapper";
import { Link } from "react-router-dom";
import Appcontext from "../../context/AppContext";
import { useContext } from "react";
function Navbar({ open, setOpen }) {
  const { removerItem } = useContext(Appcontext);
  const handleClickSalir = () => {
    removerItem();
  };
  const cerrarMenu = () => {
    setOpen(false);
  };
  return (
    <NavbarWrapper open={open}>
      <Link to="/" className="nav-item" onClick={cerrarMenu}>
        Inicio
      </Link>
      <Link to="/users" onClick={cerrarMenu}>
        Usuarios
      </Link>
      <Link to="/rutas" onClick={cerrarMenu}>
        Rutas
      </Link>
      <Link to="/clientes" onClick={cerrarMenu}>
        Clientes
      </Link>
      <Link to="/gastos" onClick={cerrarMenu}>
        Gastos
      </Link>

      <Link to="/users" onClick={handleClickSalir}>
        Salir
      </Link>
    </NavbarWrapper>
  );
}

export default Navbar;
