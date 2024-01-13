import { useEffect, useState, useContext } from "react";
import AppService from "../services/App.service";

function useApp(props) {
  const [schema, setSchema] = useState(props.schema);
  const [pageLimit, setPageLimit] = useState(props.pageLimit);
  const [searchFields, setSearchfields] = useState(props.searchFields);
  const [itemFields, setItemFields] = useState(props.itemFields);
  const [searchField, setSearchField] = useState("");
  const [FormEdit, setFormEdit] = useState();
  const [defaultValues, setDefaultValues] = useState(props.defaultValues);
  const [tabla, setTabla] = useState(props.tabla);
  const [datos, setDatos] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const parameters = () => {
    let rta = {};
    rta.offset = currentPage * pageLimit;
    rta.limit = pageLimit;
    if (searchText) {
      rta.searchField = searchField;
      rta.searchText = searchText;
    }
    return rta;
    //searchText,
    // searchFields,
    // limit,
    // offset,
    // page_limit,
    // date
  };
  const Service = new AppService(tabla);

  useEffect(() => {
    (async () => {
      await actualizarDatos();
    })();
  }, [currentPage, searchText, searchField, tabla]);
  const actualizarDatos = async () => {
    const params = parameters();

    delete params.offset;
    try {
      setTotalPages(
        Math.ceil((await Service.totalPages(params)).data) / pageLimit
      );
      setDatos((await Service.getAll(parameters())).data);
    } catch (error) {}
  };

  const dato = async (id) => {
    return await Service.getOne(id);
  };
  const guardar = async (data) => {
    try {
      await Service.save(data);
      await actualizarDatos();
    } catch (error) {}
  };
  const editar = async (id, data) => {
    try {
      await Service.update(id, data);
      await actualizarDatos();
    } catch (error) {}
  };
  const eliminar = (id) => {
    if (window.confirm(`¿Desea eliminar el registro #${id}?`)) {
      (async () => {
        await Service.delete(id);
        actualizarDatos();
      })();
    }
  };

  const actualizar = (id, data) => {};
  return {
    datos,
    dato,
    editar,
    eliminar,
    guardar,
    actualizarDatos,
    Service,
    schema,
    setSchema,
    defaultValues,
    setDefaultValues,
    tabla,
    setTabla,
    pageLimit,
    setPageLimit,
    searchFields,
    parameters,
    setSearchfields,
    totalPages,
    setTotalPages,
    currentPage,
    setCurrentPage,
    searchField,
    setSearchField,
    setSearchText,
    itemFields,
    setItemFields,
    FormEdit,
    setFormEdit,
    openModal,
    setOpenModal,
  };
}

export { useApp };
