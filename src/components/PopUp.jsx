import { useContext } from "react";
import { createPortal } from "react-dom";
import Appcontext from "../context/AppContext";
import "../styles/PopUp.scss";
function PopUp(props) {
  const { setOpenModal } = props;
  return createPortal(
    <div className="ModalBackground">
      <div className="Login-container pagina-cabecera">
        <button
          className=" btn-add"
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Cerrar
        </button>
      </div>
      {props.children}
    </div>,
    document.getElementById("modal")
  );
}
export default PopUp;
