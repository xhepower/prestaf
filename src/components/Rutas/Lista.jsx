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
    selectedRuta,
    openModal,
    setOpenModal,
    openModal2,
    setOpenModal2,
    setSelectedRuta,
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
        <p className="lista-titulo">Lista de rutas</p>

        {selectedRuta != 0 && (
          <div className="selectedId">
            <p>{`El id seleccionado es ${selectedRuta}`}</p>
            <button
              className="btn-eliminar"
              onClick={() => {
                setSelectedRuta(0);
              }}
            >
              Deseleccionar
            </button>
          </div>
        )}

        <Search opciones={["id", "idUser", "descripcion"]}></Search>
        <Paginacion pageLimit={3} pageNeighbours={2}></Paginacion>
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
