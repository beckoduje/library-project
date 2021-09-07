import React from "react";

import { Link, useHistory } from "react-router-dom";

export default function Search(props) {
  let history = useHistory();

  return (
    <div className="search-container">
      <form action="#" method="post" className="search-form">
        <input
          placeholder="Search here..."
          type="text"
          className="search-input"
          onChange={(e) => props.getUserInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              props.getData(props.userInput);
              history.push("/results");
            }
          }}
        />
        <Link
          to="/results"
          className="search-button-link"
          onClick={() => {
            props.getUserInput(document.querySelector(".search-input").value);
            console.log(props.userInput);
            props.getData(props.userInput);
            props.getUserInput("");
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
