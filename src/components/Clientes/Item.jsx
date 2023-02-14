import Appcontext from "../../context/AppContext";
import { useContext } from "react";
import App from "../../routes/App";
function Item(props) {
  const { item, eliminar } = props;
  const { setSelectedCliente, selectedCliente } = useContext(Appcontext);
  return (
    <div className={"lista-item"}>
      <div className="lista-datos">
        <p className="datos-linea">
          <b>Id: </b>
          {item.id}
        </p>
        <p className="datos-linea">
          <b>Ruta: </b>
          {item.idRuta}
        </p>

        <p className="datos-linea identado2">
          <b>Descripcion: </b>
          {item.Rutum.descripcion}
        </p>

        <p className="datos-linea">
          <b>Nombre: </b>
          {item.nombre}
        </p>
        <p className="datos-linea">
          <b>Identidad: </b>
          {item.identidad}
        </p>
        <p className="datos-linea">
          <b>Direccion: </b>
          {item.direccion}
        </p>
        <p className="datos-linea">
          <b>Telefono: </b>
          {item.telefono}
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
              setSelectedCliente(item.id);
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
