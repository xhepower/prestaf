import React, { useContext } from "react";
import Spinner from "../components/Spinner";
import AppService from "../services/App.service";
import useFormLogic from "../hooks/useFormLogic";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Option from "../components/Option";
import * as yup from "yup";
import { useState } from "react";
import DetailOrderAdd from "./DetailOrderAdd";
import OrderGrid from "../components/OrderGrid";
import OrderContext from "../context/OrderContext";
function Client(props) {
  const { setOpenModal } = props;
  const { items, setItems, total, setTotal, calcularTotal } =
    useContext(OrderContext);
  const { handleSubmit, save, isLoading, errors, register } = useFormLogic();
  const handleSave = (data, e) => {
    // e.preventDefault();

    data.items = items;
    data.total = total;
    save(data);
  };

  return (
    <form className="app-form" noValidate onSubmit={handleSubmit(handleSave)}>
      {isLoading && <Spinner></Spinner>}
      <p className="errors">{errors.server?.message}</p>

      <label htmlFor="clientId" className="label">
        Cliente
      </label>
      <select
        name="clientId"
        className="input input-email"
        {...register("clientId")}
      >
        <Option tabla="clients" campo="name"></Option>
      </select>
      <p className="errors">{errors.clientId?.message}</p>
      <button
        type="button"
        className="secundary-button"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Agregar items
      </button>
      <OrderGrid
        items={items}
        setItems={setItems}
        total={total}
        setTotal={setTotal}
        calcularTotal={calcularTotal}
      ></OrderGrid>
      <input
        className="primary-button login-button"
        value="Guardar"
        type="submit"
      ></input>
    </form>
  );
}

export default Client;
