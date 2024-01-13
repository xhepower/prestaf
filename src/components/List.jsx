import React, { useContext, useEffect } from "react";
import IntoContext from "../context/IntoContext";
import Item from "./Item";
import "../styles/ListContainer.scss";
function List(props) {
  const { EditForm, AddForm, Grid } = props;
  const { datos, tabla } = useContext(IntoContext);
  useEffect(() => {}, [tabla, datos]);
  return (
    <div className="list-container">
      {datos.map((dato) => {
        return (
          <Item
            key={`list${tabla}id${dato.id}`}
            dato={dato}
            EditForm={EditForm}
            AddForm={AddForm}
            Grid={Grid}
          ></Item>
        );
      })}
    </div>
  );
}

export default List;
