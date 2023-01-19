import { useJwt } from "react-jwt";
import { useClientes } from "../hooks/useClientes";
import { useEffect, clienteef, useState } from "react";
import Search from "../components/Search";
import Paginacion from "../components/Paginacion";
import Lista from "../components/Lista";
import AddCliente from "../components/forms/AddCliente";
function Clientes() {
  const {
    datos,
    datosRender,
    setDatosRender,
    currentData,
    setCurrentData,
    eliminar,
    modificar,
    seleccionar,
    guardar,
    dato,
    actualizar,
  } = useClientes();
  const [ladata, setLadata] = useState([]);
  return (
    <div className="Login">
      <div className="Login-container">
        <AddCliente></AddCliente>;
      </div>
      <div className="lista">
        <p className="lista-titulo">Lista de clientes</p>
        <Search
          datos={datos}
          setDatosRender={setDatosRender}
          opciones={["nombre", "identidad", "direccion"]}
        ></Search>
        <Paginacion
          datosRender={datosRender
            .sort(function (a, b) {
              return a.id - b.id; /* Modificar si se desea otra propiedad */
            })
            .reverse()}
          setCurrentData={setCurrentData}
          pageLimit={5}
          pageNeighbours={2}
        ></Paginacion>
        <div className="lista-container">
          {currentData.map((item) => {
            return (
              <div className="lista-item" key={`item${item.id}`}>
                <div className="lista-datos">
                  <p className="datos-linea">
                    <b>Id: </b>
                    {item.id}
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
                </div>
                <div className="lista-actions">
                  <button
                    className="btn-eliminar"
                    onClick={() => {
                      eliminar(item.id);
                    }}
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn-modificar"
                    onClick={() => {
                      modificar(item.id, ladata);
                    }}
                  >
                    Modificar
                  </button>
                  <button
                    className="btn-seleccionar"
                    onClick={() => {
                      seleccionar(item.id);
                    }}
                  >
                    Seleccionar
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Clientes;
