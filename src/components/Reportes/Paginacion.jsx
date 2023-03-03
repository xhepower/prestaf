import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

function Paginacion(props) {
  const { datos, titulo } = props;
  const pageLimit = 10;
  //const { datosRender, setCurrentData } = useContext(PrestamoContext);
  // const { pageLimit } = props;
  //   //const totalRecords = datosRender.length;
  const [totalPages, setTotalPages] = useState(
    Math.ceil(datos.length / pageLimit)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + pageLimit;
    setCurrentData(datos.slice(itemOffset, endOffset));
    setTotalPages(Math.ceil(datos.length / pageLimit));
  }, [itemOffset, pageLimit, datos]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * pageLimit) % datos.length;

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
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Monto</th>
            <th>Emitido</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => {
            return (
              <tr key={`${titulo}-fila-${item.id}`}>
                <td>{item.id}</td>
                <td>{item.monto}</td>
                <td>{item.emitido}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Paginacion;
