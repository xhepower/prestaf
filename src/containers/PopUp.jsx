import { useContext } from "react";
import { createPortal } from "react-dom";
import Appcontext from "../context/AppContext";
import "../styles/PopUp.scss";
function PopUp({ children }) {
  const { openModal, setOpenModal, openModal2, setOpenModal2 } =
    useContext(Appcontext);
  return createPortal(
    <div className="ModalBackground">
      <div className="Login-container pagina-cabecera">
        <button
          className=" btn-add"
          onClick={() => {
            // if (openModal2) {
            //   setOpenModal2(false);
            // } else {
            //   setOpenModal(false);
            // }
            setOpenModal(false);
          }}
        >
          Cerrar
        </button>
      </div>
      {children}
    </div>,
    document.getElementById("modal")
  );
}
export default PopUp;
