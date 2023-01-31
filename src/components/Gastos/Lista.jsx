import Search from "./Search";
import Paginacion from "./Paginacion";
import ItemList from "./ItemList";
import Appcontext from "../../context/AppContext";
import PopUp from "../../containers/PopUp";
import PopUp2 from "../../containers/PopUp2";
import { useContext } from "react";
import Add from "./forms/Add";
import PageUser from "../../pages/Users";
function Lista() {
  const {
    selectedGasto,
    openModal,
    setOpenModal,
    openModal2,
    setOpenModal2,
    setSelectedGasto,
  } = useContext(Appcontext);
  return (
    <>
      <div className="Login-container pagina-cabecera">
        {}
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
        <p className="lista-titulo">Lista de gastos</p>

        {selectedGasto != 0 && (
          <div className="selectedId">
            <p>{`El id seleccionado es ${selectedGasto}`}</p>
            <button
              className="btn-eliminar"
              onClick={() => {
                setSelectedGasto(0);
              }}
            >
              Deseleccionar
            </button>
          </div>
        )}

        <Search opciones={["id", "idUser", "descripcion", "monto"]}></Search>
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
          <PageUser></PageUser>
        </PopUp2>
      )}
    </>
  );
}

export default Lista;
