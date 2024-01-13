import React, { useContext } from "react";
import Spinner from "../components/Spinner";
import AppService from "../services/App.service";
import useFormLogic from "../hooks/useFormLogic";

import Option from "../components/Option";
function Client() {
  const { handleSubmit, save, isLoading, errors, register } = useFormLogic();
  const UnitService = new AppService("units");
  return (
    <form className="app-form" noValidate onSubmit={handleSubmit(save)}>
      {isLoading && <Spinner></Spinner>}
      <p className="errors">{errors.server?.message}</p>
      <label htmlFor="name" className="label">
        Nombre Ingrediente
      </label>
      <input
        name="name"
        placeholder="Ingrese aquí el nombre del ingrediente"
        className="input input-email"
        {...register("name")}
      />
      <p className="errors">{errors.name?.message}</p>
      <label htmlFor="cost" className="label">
        Costo
      </label>
      <input
        name="cost"
        type="number"
        step={0.0}
        placeholder="Ingrese aquí el costo"
        className="input input-email"
        {...register("cost")}
      />
      <p className="errors">{errors.cost?.message}</p>
      <label htmlFor="price" className="label">
        Precio
      </label>
      <input
        name="price"
        type="number"
        step={0.0}
        placeholder="Ingrese aquí el precio"
        className="input input-email"
        {...register("price")}
      />
      <p className="errors">{errors.price?.message}</p>
      <label htmlFor="isProduct" className="label">
        ¿Es un producto?
      </label>
      <input
        name="IsProduct"
        type="checkbox"
        className="input input-email"
        {...register("isProduct")}
      />
      <p className="errors">{errors.IsProduct?.message}</p>

      <label htmlFor="unitId" className="label">
        Unidad
      </label>
      <select
        name="unitId"
        className="input input-email"
        {...register("unitId")}
      >
        {/* <option value="value1">Value 1</option>
        <option value="value2" selected>
          Value 2
        </option>
        <option value="value3">Value 3</option> */}
        <Option tabla="units" campo="name"></Option>
      </select>
      <p className="errors">{errors.unitId?.message}</p>
      <label htmlFor="stock" className="label">
        Stock
      </label>
      <input
        name="stock"
        type="number"
        step={0.0}
        placeholder="Ingrese aquí el stock"
        className="input input-email"
        {...register("stock")}
      />
      <p className="errors">{errors.stock?.message}</p>
      <label htmlFor="minimum" className="label">
        Minimo
      </label>
      <input
        name="minimum"
        type="number"
        step={0.0}
        placeholder="Ingrese aquí el minimo"
        className="input input-email"
        {...register("minimum")}
      />
      <p className="errors">{errors.minimum?.message}</p>
      <input
        className="primary-button login-button"
        value="Guardar"
        type="submit"
        onClick={handleSubmit}
      ></input>
    </form>
  );
}

export default Client;
