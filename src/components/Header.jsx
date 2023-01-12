import { Link } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";
import "../styles/Header.scss";
function Header() {
  const handleClickSalir = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  const { activeUser } = useUsers();
  return (
    <header>
      <nav className="nav-app">
        <div className="salir">
          <Link to="/">Inicio</Link>
          <Link to="/users">Usuarios</Link>

          <Link to="/users" onClick={handleClickSalir}>
            Salir
          </Link>
        </div>
        <p></p>
      </nav>
    </header>
  );
}

export default Header;
