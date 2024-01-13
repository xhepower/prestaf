import React, { useState, useContext, useEffect } from "react";
import { useToken } from "../hooks/useToken";
import IntoContext from "../context/IntoContext";
import { useApp } from "../hooks/useApp";
import NavApp from "../components/NavApp";
import { useOrder } from "../hooks/useOrder";
import OrderContext from "../context/OrderContext";
import "../styles/Container.scss";
import "../styles/Page.scss";
import "../styles/Lista.scss";

function AppLayout(props) {
  const {
    children,
    tabla,
    defaultValues,
    schema,
    searchFields,
    vDateSearch,
    pageLimit,
    itemFields,
  } = props;

  const { obtenerToken } = useToken();
  const tokencito = obtenerToken();
  if (!tokencito) {
    window.location.href = "/login";
  }
  useEffect(() => {}, [tabla]);
  const orderProvider = useOrder();
  const appState = useApp({
    tabla,
    defaultValues,
    schema,
    searchFields,
    itemFields,
    vDateSearch,
    pageLimit,
  });
  return (
    <IntoContext.Provider value={appState}>
      <OrderContext.Provider value={orderProvider}>
        <div className="container into-container">
          <NavApp></NavApp>
          {children}
        </div>
      </OrderContext.Provider>
    </IntoContext.Provider>
  );
  // return <div className="container">{children}</div>;
}

export default AppLayout;
