import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Search(props) {
  const [userInput, getUserInput] = useState();

  function getData(userInput) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${userInput}`)
      // fetch vraća Promise
      // koristimo then metodu da nešto napravimo s promise
      .then(function (response) {
        // data moramo vratiti i na njemu koristiti json() metodu da dobijemo data (novi promise)
        return response.json();
      })
      // onda opet then metodu
      .then(function (data) {
        console.log(data);
      });
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
      <div className="search-container-results"></div>
    </div>
  );
}
