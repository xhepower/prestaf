import { useContext } from "react";
import RutaContext from "../../context/RutaContext";
import Item from "./Item";
function ItemList(props) {
  const { currentData, eliminar } = useContext(RutaContext);
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
