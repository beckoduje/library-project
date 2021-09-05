import React, { useState } from "react";
import Pagination from "react-js-pagination";

export default function Paginations(props) {
  // const [activePage, getActivePage] = useState(1);

  // const handlePageChange = (pageNumber) => {
  //   getActivePage(pageNumber);
  //   props.setStartIndex(pageNumber);
  // };

  return (
    <div className="next-page">
      {/* <Pagination
        firstPageText={<span className="first-page">Prva</span>}
        lastPageText={<span className="last-page">Zadnja</span>}
        prevPageText={<i className="fas fa-arrow-alt-circle-left"></i>}
        nextPageText={<i className="fas fa-arrow-alt-circle-right"></i>}
        activePage={activePage}
        itemsCountPerPage={10}
        totalItemsCount={props.searchedBooks.totalItems}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
      /> */}
      <span
        className="load load-previous"
        onClick={() => {
          props.getPreviousVolume(props.userInput, props.startIndex);
        }}
      >
        <i className="fas fa-arrow-alt-circle-left"></i>
      </span>
      <span
        className="load load-next"
        onClick={() => {
          props.getNextVolume(props.userInput, props.startIndex);
        }}
      >
        <i className="fas fa-arrow-alt-circle-right"></i>
      </span>
    </div>
  );
}

/* 
<div className="next-page">
        <span
          className="load load-previous"
          onClick={() => {
            getPreviousVolume(props.userInput, startIndex);
          }}
        >
          <i className="fas fa-arrow-alt-circle-left"></i>
        </span>
        <span
          className="load load-next"
          onClick={() => {
            getNextVolume(props.userInput, startIndex);
          }}
        >
          <i className="fas fa-arrow-alt-circle-right"></i>
        </span>
      </div>
*/
