import { useContext } from "react";
import GastoContext from "../../context/GastoContext";
import Item from "./Item";
function ItemList(props) {
  const { currentData, eliminar } = useContext(GastoContext);
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
