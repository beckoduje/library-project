import React from "react";
import Navigation from "../shared/Navigation";
import ResultsList from "./ResultsList";

export default function Results(props) {
  return (
    <div className="results-section">
      <Navigation
        getData={props.getData}
        getUserInput={props.getUserInput}
        userInput={props.userInput}
        inputOK={props.inputOK}
        results="results"
      />
      <ResultsList searchedBooks={props.searchedBooks} />
      <div className="next-page">
        <span className="load load-previous">
          <i className="fas fa-arrow-alt-circle-left"></i>
        </span>
        <span className="load load-next">
          <i className="fas fa-arrow-alt-circle-right"></i>
        </span>
      </div>
    </div>
  );
}

// Maka iz Navigation: setSearchedBooks={props.setSearchedBooks}
