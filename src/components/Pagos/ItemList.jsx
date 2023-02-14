import { useContext } from "react";
import PagoContext from "../../context/PagoContext";
import AppContext from "../../context/AppContext";
import Item from "./Item";
function ItemList(props) {
  const { currentData, eliminar } = useContext(PagoContext);
  const { currentRole, currentUser } = useContext(AppContext);
  return (
    <div className="lista-container">
      {currentData.map((item) => {
        if (currentRole == "admin") {
          return (
            <Item eliminar={eliminar} item={item} key={`item${item.id}`}></Item>
          );
        } else {
          if (item.Prestamo.Cliente.Rutum.idUser == currentUser) {
            return (
              <Item
                eliminar={eliminar}
                item={item}
                key={`item${item.id}`}
              ></Item>
            );
          }
        }
      })}
    </div>
  );
}

export default ItemList;
