import React, { useContext, useEffect, useState } from "react";
import Elform from "../forms/User";
import IntoContext from "../context/IntoContext";
import Search from "../components/Search";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import List from "../components/List";
function Users(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const { datos, tabla, actualizarDatos } = useContext(IntoContext);

  const handleVisibleAdd = () => {
    setVisibleAdd(!visibleAdd);
  };

  return (
    <div className="page">
      <div className="sticky-area">
        <div className="add-area">
          <button className="button-add" onClick={handleVisibleAdd}>
            Agregar
          </button>
          {visibleAdd ? <Elform></Elform> : null}
        </div>
        <Search></Search>
        <Pagination></Pagination>
      </div>

      {datos ? (
        <div className="lista">
          <List></List>
        </div>
      ) : (
        <p>"No hay nada</p>
      )}
    </div>
  );
}

export default Users;
