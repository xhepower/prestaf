import Appcontext from "../../context/AppContext";
import { useContext } from "react";
import App from "../../routes/App";
function Item(props) {
  const { item, eliminar } = props;

  const { setSelectedPrestamo, selectedPrestamo } = useContext(Appcontext);
  return (
    <div className={"lista-item"}>
      <div className="lista-datos">
        <p className="datos-linea">
          <b>Id: </b>
          {item.id}
        </p>
        <p className="datos-linea">
          <b>Nombre Cliente: </b>
          {item.Cliente.nombre}
        </p>
        <p className="datos-linea">
          <b>Ruta: </b>
          {item.Cliente.Rutum.descripcion}
        </p>
        <p className="datos-linea">
          <b>Saldo: </b>
          {item.saldo}
        </p>
        <p className="datos-linea">
          <b>Monto: </b>
          {item.monto}
        </p>
        <p className="datos-linea">
          <b>Pagado: </b>
          <input type="checkbox" disabled checked={item.pagado}></input>
        </p>
        <p className="datos-linea">
          <b>Mora: </b>
          {item.mora}
        </p>
        <p className="datos-linea">
          <b>Fecha: </b>
          {item.emitido}
        </p>
        <p className="datos-linea">
          <b>Vencimiento: </b>
          {item.vencimiento}
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
              setSelectedPrestamo(item.id);
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
