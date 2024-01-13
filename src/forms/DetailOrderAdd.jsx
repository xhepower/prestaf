import React from "react";
import { useEffect } from "react";
import useFormLogic from "../hooks/useFormLogic";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Option from "../components/Option";
import OrderGrid from "../components/OrderGrid";
import * as yup from "yup";
import { useContext } from "react";
import OrderContext from "../context/OrderContext";
function DetailOrderAdd(props) {
  const { items, setItems, total, setTotal, calcularTotal } =
    useContext(OrderContext);
  const onSubmit = (data, e) => {
    e.preventDefault();
    if (data) {
      var select = document.getElementById("productId");

      // Obtener el índice de la opción seleccionada
      var indiceSeleccionado = select.selectedIndex;

      var ats = JSON.parse(
        select.options[indiceSeleccionado].getAttribute("atr")
      );

      data.price = ats.price;
      data.name = ats.name;
    }

    let nitems = items;
    nitems.push(data);
    setItems(nitems);
    calcularTotal();
  };
  const onError = (errors, e) => console.log(errors);
  const schema = yup.object().shape({
    productId: yup
      .number()
      .min(1, "debe ser un numero positivo")
      .required("El prodcuto es requerida"),
    quantity: yup
      .number(2)
      .min(1, "debe ser un numero positivo")
      .required("El codigo de la unidad es requerida"),
  });
  const defaultValues = {
    productId: 0,
    quantity: 0,
  };
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  return (
    <form
      form
      className="app-form"
      noValidate
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <label htmlFor="productId" className="label">
        Producto
      </label>
      <select
        name="productId"
        id="productId"
        className="input input-email"
        {...register("productId")}
      >
        <Option
          tabla="products"
          campo="name"
          atributos={["price", "name"]}
        ></Option>
      </select>
      {}
      <label htmlFor="quantity" className="label">
        Cantidad
      </label>
      <input
        name="quantity"
        type="number"
        step={0.0}
        placeholder="Ingrese aquí el precio"
        className="input input-email"
        {...register("quantity")}
      />
      <button
        type="submit"
        className="primary-button login-button"
        value="Guardar"
      >
        Guardar
      </button>
      <OrderGrid
        items={items}
        setItems={setItems}
        total={total}
        setTotal={setTotal}
        calcularTotal={calcularTotal}
      ></OrderGrid>
    </form>
  );
}

export default DetailOrderAdd;
