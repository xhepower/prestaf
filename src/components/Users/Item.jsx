import Appcontext from "../../context/AppContext";
import { useContext } from "react";
import App from "../../routes/App";
function Item(props) {
  const { item, eliminar } = props;

  const { setSelectedUser, selectedUser } = useContext(Appcontext);
  return (
    <div className={"lista-item"}>
      <div className="lista-datos">
        <p className="datos-linea">
          <b>Id: </b>
          {item.id}
        </p>
        <p className="datos-linea">
          <b>Email: </b>
          {item.email}
        </p>
        <p className="datos-linea">
          <b>Rol: </b>
          {item.role}
        </p>
      </div>
      <div className="lista-actions">
        <button
          className="btn-action btn-eliminar"
          onClick={() => {
            eliminar(item.id);
          }}
        >
          Eliminar
        </button>
        {/* <button
          className="btn-action btn-editar"
          onClick={() => {
            eliminar(item.id);
          }}
        >
          Editar
        </button> */}
        <button
          className="btn-action btn-seleccionar"
          onClick={() => {
            // if (confirm(`¿Desea seleccionar el id ${item.id}`)) {
            if (window.confirm(`¿Desea seleccionar el id ${item.id}`)) {
              setSelectedUser(item.id);
            }
          }}
        >
          Seleccionar
        </button>
      </div>
    </div>
  );
}

export default Item;
