import React, { useContext, useEffect, useState } from "react";
import Elform from "../forms/Order";
//import EditForm from "../forms/OrderEdit";
//import Grid from "../components/OrderGrid";
//import AddForm from "../forms/DetailOrderAdd";
import IntoContext from "../context/IntoContext";
import Search from "../components/Search";
import Spinner from "../components/Spinner";
import Pagination from "../components/Pagination";
import List from "../components/List";
import PopUp from "../components/PopUp";
import DetailOrderAdd from "../forms/DetailOrderAdd";
import OrderContext from "../context/OrderContext";
import { useOrder } from "../hooks/useOrder";
function Products(props) {
  const orderProvider = useOrder();
  const [isLoading, setIsLoading] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const { datos, tabla } = useContext(IntoContext);

  const { items, setItems, total, setTotal } = useContext(OrderContext);
  const [openModal, setOpenModal] = useState(false);
  const handleVisibleAdd = () => {
    setVisibleAdd(!visibleAdd);
    setItems([]);
  };
  return (
    <div className="page">
      <div className="sticky-area">
        <div className="add-area">
          <button className="button-add" onClick={handleVisibleAdd}>
            Agregar
          </button>
          {visibleAdd ? <Elform setOpenModal={setOpenModal}></Elform> : null}
        </div>
        <Search></Search>
        <Pagination></Pagination>
      </div>

      {datos ? (
        <div className="lista">
          <List EditForm={null} AddForm={null} Grid={null}></List>
        </div>
      ) : (
        <p>"No hay nada</p>
      )}
      {openModal && (
        <PopUp setOpenModal={setOpenModal}>
          <DetailOrderAdd></DetailOrderAdd>
        </PopUp>
      )}
    </div>
  );
}

export default Products;
