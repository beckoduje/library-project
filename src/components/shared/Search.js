import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Search(props) {
  return (
    <div
      className={props.hidden ? `search-container hidden` : `search-container`}
    >
      <form action="#" method="post" className="search-form">
        <input
          type="text"
          className="search-input"
          onChange={(e) => props.getUserInput(e.target.value)} // ----------- dodan props.
        />
        <Link
          to="/results"
          className="search-button-link"
          onClick={() => {
            // props.getUserInput(document.querySelector(".search-input").value);  ------------ prebačeno radi next volume
            console.log(props.userInput);
            // ne treba ---- props.setStoredUserInput(props.userInput);
            props.getData(props.userInput); // ----------- dodan props.
            //props.getUserInput("");  ----------- dodan props.
          }}
        >
          <button className="search-button" type="button">
            <i className="fas fa-search"></i>
          </button>
        </Link>
      </form>
      <div
        className={
          props.inputOK // ----------- dodan props.
            ? "search-container-error-message"
            : "search-container-error-message show"
        }
      >
        At least one symbol required!
      </div>
    </div>
  );
}
