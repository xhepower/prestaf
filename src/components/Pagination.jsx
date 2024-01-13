import React from "react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";
import IntoContext from "../context/IntoContext";
import "../styles/Pagination.scss";
function Pagination(props) {
  const { totalPages, currentPage, setCurrentPage, tabla, datos } =
    useContext(IntoContext);

  useEffect(() => {}, [tabla, datos, totalPages]);
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <ReactPaginate
      nextLabel="Sig >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={totalPages}
      initialPage={currentPage}
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
  );
}

export default Pagination;
