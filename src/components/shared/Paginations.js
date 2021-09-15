import React, { useState, useContext } from "react";
import Pagination from "react-js-pagination";

import { LibraryContext } from "../LibraryContext";

export default function Paginations(props) {
  const { searchedBooks } = useContext(LibraryContext);

  const [activePage, getActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    getActivePage(pageNumber);
    props.setStartIndex((pageNumber - 1) * 10);
  };

  return (
    <div className="next-page">
      <Pagination
        firstPageText={<span className="first-page">Prva</span>}
        lastPageText={<span className="last-page">Zadnja</span>}
        prevPageText={<i className="fas fa-arrow-alt-circle-left"></i>}
        nextPageText={<i className="fas fa-arrow-alt-circle-right"></i>}
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={
          !searchedBooks.totalItems ? 100 : searchedBooks.totalItems
        }
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      />
    </div>
  );
}
