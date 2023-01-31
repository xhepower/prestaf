import Search from "./Search";
import Paginacion from "./Paginacion";
import ItemList from "./ItemList";
import Appcontext from "../../context/AppContext";
import PopUp from "../../containers/PopUp";
import PopUp2 from "../../containers/PopUp2";
import { useContext } from "react";
import Add from "./forms/Add";
import PageCliente from "../../pages/Clientes";
function Lista() {
  const {
    selectedPrestamo,
    openModal,
    setOpenModal,
    openModal2,
    setOpenModal2,
    setSelectedPrestamo,
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
        <p className="lista-titulo">Lista de prestamos</p>

        {selectedPrestamo != 0 && (
          <div className="selectedId">
            <p>{`El id seleccionado es ${selectedPrestamo}`}</p>
            <button
              className="btn-eliminar"
              onClick={() => {
                setSelectedPrestamo(0);
              }}
            >
              Deseleccionar
            </button>
          </div>
        )}

        <Search opciones={["idCliente", "monto", "vencimiento"]}></Search>
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
          <PageCliente></PageCliente>
        </PopUp2>
      )}
    </>
  );
}

export default Lista;
