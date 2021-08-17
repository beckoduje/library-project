import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Search(props) {
  const [userInput, getUserInput] = useState();
  const [inputOK, setInputOK] = useState(true);

  function getData(userInput) {
    if (userInput && userInput.trim().length > 0) {
      setInputOK(true);
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${userInput}`)
        // fetch vraća Promise
        // koristimo then metodu da nešto napravimo s promise
        .then(function (response) {
          // data moramo vratiti i na njemu koristiti json() metodu da dobijemo data (novi promise)
          return response.json();
        })
        // onda opet then metodu
        .then(function (data) {
          props.setSearchedBooks(data);
        });
      document.querySelector(".search-input").value = "";
    } else {
      setInputOK(false);
      return;
    }
  }

  return (
    <div
      className={props.hidden ? `search-container hidden` : `search-container`}
    >
      <form action="#" method="post" className="search-form">
        <input
          type="text"
          className="search-input"
          onChange={(e) => getUserInput(e.target.value)}
        />
        <Link
          to="/results"
          className="search-button-link"
          onClick={() => {
            getData(userInput);
          }}
        >
          <button className="search-button" type="button">
            <i className="fas fa-search"></i>
          </button>
        </Link>
      </form>
      <div
        className={
          inputOK
            ? "search-container-error-message"
            : "search-container-error-message show"
        }
      >
        At least one symbol required!
      </div>
    </div>
  );
}
