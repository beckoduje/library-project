import React from "react";
import Navigation from "../shared/Navigation";
import ResultsList from "./ResultsList";

export default function Results(props) {
  return (
    <div className="results-section">
      <Navigation setSearchedBooks={props.setSearchedBooks} results="results" />
      <ResultsList searchedBooks={props.searchedBooks} />
      <div className="next-page">
        <span className="load load-next">
          <i className="fas fa-arrow-alt-circle-left"></i>
        </span>
        <span className="load load-previous">
          <i className="fas fa-arrow-alt-circle-right"></i>
        </span>
      </div>
    </div>
  );
}

// setSearchedBooks={setSearchedBooks}
