import { useState } from "react";
import Paginacion from "./Paginacion";
function Bloque(props) {
  const { titulo, datos, suma } = props;
  const cambiar = (e) => {
    e.preventDefault();
    const detalle = document.getElementById(`detalle-${titulo}`);
    const boton = document.getElementById(`boton-${titulo}`);
    detalle.classList.toggle("detalle-abierto");
    boton.classList.toggle("boton-abierto");
    if (boton.innerText == "↓") {
      boton.innerText = "↑";
    } else {
      boton.innerText = "↓";
    } // ↓  ↑
  };
  return (
    <div className="bloque form userform">
      <div className="bloque-principal">
        <div className="bloque-titulo">{titulo}</div>
        <div className="bloque-suma">{suma}</div>
        <div className="bloque-boton">
          <button
            className="boton-detalle"
            id={`boton-${titulo}`}
            onClick={cambiar}
          >
            ↓
          </button>
        </div>
      </div>

      <div className="bloque-detalle" id={`detalle-${titulo}`}>
        <Paginacion datos={datos} titulo={titulo}></Paginacion>
      </div>
    </div>
  );
}

export default Bloque;
