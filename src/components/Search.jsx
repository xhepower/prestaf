import React from "react";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import IntoContext from "../context/IntoContext";
import {
  schema as searchSchema,
  defaultValues as searchDefault,
} from "../schemas/yup/Search.yup";
import "../styles/Search.scss";

function Search() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: searchDefault,
    resolver: yupResolver(searchSchema),
  });
  const { searchFields, setCurrentPage, setSearchField, setSearchText } =
    useContext(IntoContext);
  const fields = Object.keys(searchFields);
  const filtrar = (data) => {
    const { searchText, searchField } = data;

    setSearchText(searchText);
    setSearchField(searchField);
    setCurrentPage(0);
  };
  return (
    <form className="search" noValidate onSubmit={handleSubmit(filtrar)}>
      <input
        type="search"
        id="searchText"
        className="inputSearch"
        placeholder="Ingrese el termino de busqueda"
        {...register("searchText")}
      />

      <fieldset>
        <legend>
          <label className="label">Buscar por:</label>
        </legend>
        <select
          name="searchField"
          //   value={filtroValue}
          //   onChange={onFiltroChange}
          className="filtro"
          {...register("searchField")}
        >
          {fields.map((key) => {
            return (
              <option key={`searchFields${key}`} value={key}>
                {searchFields[key]}
              </option>
            );
          })}
        </select>
      </fieldset>
      <input type="submit" value="Buscar" />
    </form>
  );
}

export default Search;
