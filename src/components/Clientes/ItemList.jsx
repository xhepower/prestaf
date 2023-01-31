import { useContext } from "react";
import ClienteContext from "../../context/ClienteContext";
import Item from "./Item";
function ItemList(props) {
  const { currentData, eliminar } = useContext(ClienteContext);
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
