import { useContext } from "react";
import PrestamoContext from "../../context/PrestamoContext";
import AppContext from "../../context/AppContext";
import Item from "./Item";
function ItemList(props) {
  const { currentData, eliminar } = useContext(PrestamoContext);
  const { currentRole, currentUser } = useContext(AppContext);
  return (
    <div className="lista-container">
      {currentData.map((item) => {
        if (currentRole == "admin") {
          return (
            <Item eliminar={eliminar} item={item} key={`item${item.id}`}></Item>
          );
        } else {
          if (item.Cliente.Rutum.idUser == currentUser) {
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
