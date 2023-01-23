import { useContext } from "react";
import UserContext from "../../context/UserContext";
import Item from "./Item";
function ItemList(props) {
  const { currentData, eliminar } = useContext(UserContext);
  return (
    <div className="lista-container">
      {currentData.map((item) => {
        return (
          <Item eliminar={eliminar} item={item} key={`item${item.id}`}></Item>
        );
      })}
    </div>
  );
}

export default ItemList;
