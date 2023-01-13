import { useState } from "react";
function Search(props) {
  const { datos, setDatosRender } = props;
  const [searchValue, setSearchValue] = useState("");
  const [filtroValue, setFiltroValue] = useState("todos");
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  const onFiltroChange = (e) => {
    setFiltroValue(e.target.value);
  };
  const filtrar = (event) => {
    event.preventDefault();
    console.log("puto");
  };
  return (
    <form className="search">
      <div className="search-container">
        <input
          type="search"
          id="textBusqueda"
          className="inputBusqueda"
          placeholder="Ingrese el termino de busqueda"
          value={searchValue}
          onChange={onSearchValueChange}
        />
        <button className="btnbuscar boton" type="button" onClick={filtrar}>
          <span className="icon">
            <i className="fa fa-search"></i>
          </span>
        </button>
      </div>
      <fieldset>
        <legend>
          <label className="label">Buscar por:</label>
        </legend>
      </fieldset>
    </form>
  );
}

export default Search;
