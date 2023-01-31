import Appcontext from "../../context/AppContext";
import { useContext } from "react";
import App from "../../routes/App";
function Item(props) {
  const { item, eliminar } = props;

  const { setSelectedGasto, selectedGasto } = useContext(Appcontext);
  return (
    <div className={"lista-item"}>
      <div className="lista-datos">
        <p className="datos-linea">
          <b>Id: </b>
          {item.id}
        </p>
        <p className="datos-linea">
          <b>Id Usuario: </b>
          {item.idUser}
        </p>
        <p className="datos-linea">
          <b>Descripcion: </b>
          {item.descripcion}
        </p>
        <p className="datos-linea">
          <b>Monto: </b>
          {item.monto}
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
        <button
          className="btn-action btn-seleccionar"
          onClick={() => {
            // if (confirm(`¿Desea seleccionar el id ${item.id}`)) {
            if (window.confirm(`¿Desea seleccionar el id ${item.id}`)) {
              setSelectedGasto(item.id);
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
