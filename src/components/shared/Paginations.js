import React, { useState, useContext, useEffect } from "react";
import Pagination from "react-js-pagination";

import { LibraryContext } from "../LibraryContext";

export default function Paginations(props) {
  const { searchedBooks } = useContext(LibraryContext);

  const [activePage, getActivePage] = useState(1);

  function searchPage(pageNumber) {
    // kaže trenutn URL stranice
    let here = new URL(window.location.href);
    // kaže da su search parametri ???
    let params = new URLSearchParams(document.location.search.substring(1));

    let pageQuery = params.get("page");

    if (!params.has("page")) {
      here.searchParams.append("page", pageNumber);
      window.location.href = here;
    } else if (
      params.has("page") &&
      pageQuery !== `${pageNumber}` &&
      pageNumber !== "1"
    ) {
      here.searchParams.set("page", pageNumber);
      window.location.href = here;
    }
  }

  const handlePageChange = (pageNumber) => {
    getActivePage(pageNumber);
    props.setStartIndex((pageNumber - 1) * 10);
    searchPage(pageNumber);
  };

  searchPage("1");

  return (
    <div className="next-page">
      <Pagination
        firstPageText={<span className="first-page">First</span>}
        lastPageText={<span className="last-page">Last</span>}
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
