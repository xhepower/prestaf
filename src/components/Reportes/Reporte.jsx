import { useContext, useState } from "react";
import ReporteContext from "../../context/ReporteContext";
import React from "react";
import Fechas from "./Fechas";
import Bloque from "./Bloque";
import "../../styles/Reportes.scss";
function Reporte() {
  const { prestamos, sPrestamos, pagos, sPagos, sGastos, gastos } =
    useContext(ReporteContext);
  return (
    <div className="">
      <p className="form-titulo">Reportes</p>
      <Fechas></Fechas>
      <Bloque titulo="Prestamos" datos={prestamos} suma={sPrestamos}></Bloque>
      <Bloque titulo="Pagos" datos={pagos} suma={sPagos}></Bloque>
      <Bloque titulo="Gastos" datos={gastos} suma={sGastos}></Bloque>
    </div>
  );
}

export default Reporte;
