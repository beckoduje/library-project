import React, { useRef } from "react";

import { Link, useHistory } from "react-router-dom";

export default function Search(props) {
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
          onChange={(e) => props.getUserInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter" && e.target.value !== undefined) {
              e.preventDefault();
              props.getData(e.target.value);
              history.push("/results");
            }
          }}
        />
        <Link
          to="/results"
          className="search-button-link"
          onClick={() => {
            if (inputEl.current.value !== undefined) {
              props.getData(props.userInput);
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
