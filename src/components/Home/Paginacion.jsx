import ReactPaginate from "react-paginate";
import Prestamo from "./Prestamo";
import { useState, useEffect } from "react";
function Paginacion(props) {
  const { prestamos, pageLimit, titulo } = props;
  //const { datosRender, setCurrentData } = useContext(PrestamoContext);
  // const { pageLimit } = props;
  //   //const totalRecords = datosRender.length;
  const [totalPages, setTotalPages] = useState(
    Math.ceil(prestamos.length / pageLimit)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + pageLimit;
    setCurrentData(prestamos.slice(itemOffset, endOffset));
    setTotalPages(Math.ceil(prestamos.length / pageLimit));
  }, [itemOffset, pageLimit, prestamos]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * pageLimit) % prestamos.length;

    setItemOffset(newOffset);
  };

  return (
    <div className="paginacion-container">
      <p className="lista-titulo">{titulo}</p>
      <div className="paginacion">
        <ReactPaginate
          nextLabel="Sig >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={totalPages}
          previousLabel="< Ant"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
      <Prestamo prestamos={currentData}></Prestamo>
    </div>
  );
}

export default Paginacion;
