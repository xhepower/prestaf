import Search from "./Search";
import Paginacion from "./Paginacion";
import ItemList from "./ItemList";
import Appcontext from "../../context/AppContext";
import PopUp from "../../containers/PopUp";
import PopUp2 from "../../containers/PopUp2";
import { useContext } from "react";
import Add from "./forms/Add";
import PagePrestamo from "../../pages/Prestamos";
function Lista() {
  const {
    selectedPago,
    openModal,
    setOpenModal,
    openModal2,
    setOpenModal2,
    setSelectedPago,
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
        <p className="lista-titulo">Lista de pagos</p>

        {selectedPago != 0 && (
          <div className="selectedId">
            <p>{`El id seleccionado es ${selectedPago}`}</p>
            <button
              className="btn-eliminar"
              onClick={() => {
                setSelectedPago(0);
              }}
            >
              Deseleccionar
            </button>
          </div>
        )}

        <Search opciones={["idPrestamo", "monto", "vencimiento"]}></Search>
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
          <PagePrestamo></PagePrestamo>
        </PopUp2>
      )}
    </>
  );
}

export default Lista;
