import { useContext, useState } from "react";
import PagoContext from "../../context/PagoContext";
function Search(props) {
  const { opciones } = props;
  const { datos, setDatosRender } = useContext(PagoContext);
  const [searchValue, setSearchValue] = useState("");
  const [filtroValue, setFiltroValue] = useState(opciones[0]);
  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };
  const onFiltroChange = (e) => {
    setFiltroValue(e.target.value);
  };
  const filtrar = (event) => {
    event.preventDefault();
    if (searchValue == "") {
      setDatosRender(datos);
    } else {
      setDatosRender(
        datos.filter(
          (item) =>
            item[filtroValue]
              .toString()
              .toLowerCase()
              .indexOf(searchValue.toLowerCase()) > -1
        )
      );
    }
  };
  return (
    <form className="search" onSubmit={filtrar}>
      <div className="search-container">
        <input
          type="search"
          id="textBusquedaPagos"
          className="inputBusqueda"
          placeholder="Ingrese el termino de busqueda"
          value={searchValue}
          onChange={onSearchValueChange}
          onSubmit={filtrar}
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
        <select
          name="filtro"
          value={filtroValue}
          onChange={onFiltroChange}
          className="filtro"
        >
          {opciones.map((item) => {
            return <option key={`option${item}`}>{item}</option>;
          })}
        </select>
      </fieldset>
    </form>
  );
}

export default Search;
