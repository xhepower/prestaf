import { useUsers } from "../../hooks/useUsers";
import Search from "./Search";
import Paginacion from "./Paginacion";
import ItemList from "./ItemList";
import Appcontext from "../../context/AppContext";
import PopUp from "../../containers/PopUp";
import { useContext, useState } from "react";
import Add from "./forms/Add";
import UserContext from "../../context/UserContext";
function Lista() {
  const { selectedUser, openModal, setOpenModal, setSelectedUser } =
    useContext(Appcontext);
  return (
    <>
      <div className="Login-container pagina-cabecera">
        <button
          className=" btn-add"
          onClick={() => {
            setOpenModal(true);

            // <Add guardar={guardar} setOpenModal={setOpenModal}></Add>
          }}
        >
          Crear
        </button>
      </div>
      <div className="lista">
        <p className="lista-titulo">Lista de usuarios</p>

        {selectedUser != 0 && (
          <div className="selectedId">
            <p>{`El id seleccionado es ${selectedUser}`}</p>
            <button
              className="btn-eliminar"
              onClick={() => {
                setSelectedUser(0);
              }}
            >
              Deseleccionar
            </button>
          </div>
        )}

        <Search opciones={["id", "email", "role"]}></Search>
        <Paginacion pageLimit={5} pageNeighbours={2}></Paginacion>
        <ItemList></ItemList>
      </div>
      {openModal && (
        <PopUp>
          <Add></Add>
        </PopUp>
      )}
    </>
  );
}

export default Lista;
