import { useJwt } from "react-jwt";
import { useUsers } from "../hooks/useUsers";
import { useEffect, useRef, useState } from "react";
import Search from "../components/Search";
import Paginacion from "../components/Paginacion";
import Lista from "../components/Lista";
import AddUser from "../components/forms/AddUser";
function Users() {
  const {
    datos,
    datosRender,
    setDatosRender,
    currentData,
    setCurrentData,
    eliminar,
    guardar,
    dato,
    actualizar,
  } = useUsers();

  return (
    <div className="Login">
      <div className="Login-container">
        <AddUser></AddUser>;
      </div>
      <div className="lista">
        <p className="lista-titulo">Lista de usuarios</p>
        <Search
          datos={datos}
          setDatosRender={setDatosRender}
          opciones={["email", "role"]}
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
        <Lista currentData={currentData} eliminar={eliminar}></Lista>
      </div>
    </div>
  );
}

export default Users;
