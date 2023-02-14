import { useContext } from "react";
import AppContext from "../../context/AppContext";
import ClienteContext from "../../context/ClienteContext";
import Item from "./Item";
function ItemList(props) {
  const { currentData, eliminar } = useContext(ClienteContext);
  const { currentRole, currentUser } = useContext(AppContext);
  return (
    <div className="lista-container">
      {currentData.map((item) => {
        if (currentRole == "admin") {
          return (
            <Item eliminar={eliminar} item={item} key={`item${item.id}`}></Item>
          );
        } else {
          if (item.Rutum.idUser == currentUser) {
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
