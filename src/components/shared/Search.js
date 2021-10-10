import React, { useRef, useContext } from "react";

import { Link, useHistory } from "react-router-dom";

import { LibraryContext } from "../LibraryContext";

export default function Search(props) {
  const { getUserInput, getData, userInput } = useContext(LibraryContext);

  let history = useHistory();
  const inputEl = useRef(null);

  return (
    <div className="search-container">
      <form action="#" method="post" className="search-form">
        <input
          placeholder="Search here..."
          type="text"
          className="search-input"
          ref={inputEl}
          onChange={(e) => getUserInput(e.target.value.trim())}
          onKeyPress={(e) => {
            if (e.key === "Enter" && e.target.value !== undefined) {
              e.preventDefault();
              // getData(e.target.value);
              history.push("/results/:" + userInput);
            }
          }}
          // onKeyPress={(e) => {
          //   if (e.key === "Enter" && e.target.value !== undefined) {
          //     e.preventDefault();
          //     getData(e.target.value);
          //     history.push("/results");
          //   }
          // }}
        />
        <Link
          // to="/results"
          to={"/results/:" + userInput}
          className="search-button-link"
          onClick={() => {
            if (inputEl.current.value !== undefined) {
              getData(userInput);
            }
          }}
        >
          <button className="search-button" type="button">
            <i className="fas fa-search"></i>
          </button>
        </Link>
      </form>
    </div>
  );
}
