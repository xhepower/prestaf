import Search from "./Search";
import Paginacion from "./Paginacion";
import ItemList from "./ItemList";
import Appcontext from "../../context/AppContext";
import PopUp from "../../containers/PopUp";
import PopUp2 from "../../containers/PopUp2";
import { useContext } from "react";
import Add from "./forms/Add";
import PageRuta from "../../pages/Rutas";
function Lista() {
  const {
    selectedCliente,
    openModal,
    setOpenModal,
    openModal2,
    setOpenModal2,
    setSelectedCliente,
  } = useContext(Appcontext);
  return (
    <>
      <div className="Login-container pagina-cabecera">
        {!openModal2 && (
          <button
            className=" btn-add"
            onClick={() => {
              setOpenModal(true);

              // <Add guardar={guardar} setOpenModal={setOpenModal}></Add>
            }}
          >
            Crear
          </button>
        )}
      </div>
      <div className="lista">
        <p className="lista-titulo">Lista de clientes</p>

        {selectedCliente != 0 && (
          <div className="selectedId">
            <p>{`El id seleccionado es ${selectedCliente}`}</p>
            <button
              className="btn-eliminar"
              onClick={() => {
                setSelectedCliente(0);
              }}
            >
              Deseleccionar
            </button>
          </div>
        )}

        <Search
          opciones={["idRuta", "nombre", "identidad", "direccion", "telefono"]}
        ></Search>
        <Paginacion pageLimit={5} pageNeighbours={2}></Paginacion>
        <ItemList></ItemList>
      </div>
      {openModal && (
        <PopUp>
          <Add></Add>
        </PopUp>
      )}
      {openModal2 && (
        <PopUp2>
          <PageRuta></PageRuta>
        </PopUp2>
      )}
    </>
  );
}

export default Lista;
