import React, { useContext, useEffect, useState } from "react";
import Elform from "../forms/Ingredient";
import EditForm from "../forms/IngredientEdit";
import IntoContext from "../context/IntoContext";
import Search from "../components/Search";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import List from "../components/List";
function Ingredients(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const { datos, tabla, setFormEdit } = useContext(IntoContext);

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
          <List EditForm={EditForm}></List>
        </div>
      ) : (
        <p>"No hay nada</p>
      )}
    </div>
  );
}

export default Ingredients;
