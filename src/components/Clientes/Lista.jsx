import Search from "./Search";
import Paginacion from "./Paginacion";
import ItemList from "./ItemList";
import Appcontext from "../../context/AppContext";
import PopUp from "../../containers/PopUp";
import PopUp2 from "../../containers/PopUp2";
import { useContext } from "react";
import Add from "./forms/Add";
import Spinner from "../Spinner";
import PageRuta from "../../pages/Rutas";
import ClienteContext from "../../context/ClienteContext";
function Lista() {
  const {
    selectedCliente,
    openModal,
    setOpenModal,
    openModal2,
    setSelectedCliente,
  } = useContext(Appcontext);
  const { isLoading, errors } = useContext(ClienteContext);
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
        {isLoading && <Spinner></Spinner>}
        <p className="errors">{errors.server?.message}</p>
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
        <Paginacion pageLimit={10} pageNeighbours={2}></Paginacion>
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
