import { useContext } from "react";
import AppContext from "../../context/AppContext";
import RutaContext from "../../context/RutaContext";
import Item from "./Item";
function ItemList(props) {
  const { currentData, eliminar } = useContext(RutaContext);
  const { currentRole, currentUser } = useContext(AppContext);
  return (
    <div className="lista-container">
      {currentData.map((item) => {
        if (currentRole == "admin") {
          return (
            <Item eliminar={eliminar} item={item} key={`item${item.id}`}></Item>
          );
        } else {
          if (item.User.id == currentUser) {
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
