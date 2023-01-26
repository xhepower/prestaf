import ReactPaginate from "react-paginate";

import { useState, useEffect, useContext } from "react";
import RutaContext from "../../context/RutaContext";
function Paginacion(props) {
  const { datosRender, setCurrentData } = useContext(RutaContext);
  const { pageLimit } = props;
  //const totalRecords = datosRender.length;
  const [totalPages, setTotalPages] = useState(
    Math.ceil(datosRender.length / pageLimit)
  );
  const [currentPage, setCurrentPage] = useState(1);

  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + pageLimit;
    setCurrentData(datosRender.slice(itemOffset, endOffset));
    setTotalPages(Math.ceil(datosRender.length / pageLimit));
  }, [itemOffset, pageLimit, datosRender]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * pageLimit) % datosRender.length;

    setItemOffset(newOffset);
  };
  return (
    <div className="paginacion-container">
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
    </div>
  );
}

export default Paginacion;
