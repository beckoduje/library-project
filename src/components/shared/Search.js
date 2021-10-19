import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { LibraryContext } from "../LibraryContext";

export default function Search() {
  const { getUserInput, userInput, goSearch, setGoSearch } =
    useContext(LibraryContext);

  let history = useHistory();

  const url = new URL(window.location);
  const currPath = url.pathname + url.search;

  return (
    <div className="search-container">
      <form action="#" method="post" className="search-form">
        <input
          placeholder="Search here..."
          type="text"
          className="search-input"
          onChange={(e) => getUserInput(e.target.value.trim())}
          onKeyPress={(e) => {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
              e.preventDefault();
              history.push("/results/" + userInput);
              setGoSearch(!goSearch);
              e.target.value = "";
            } else if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />
        {userInput || userInput.length >= 1 ? (
          <Link
            to={"/results/" + userInput}
            className="search-button-link"
            onClick={() => setGoSearch(!goSearch)}
          >
            <button className="search-button" type="button">
              <i className="fas fa-search"></i>
            </button>
          </Link>
        ) : (
          <Link to={currPath} className="search-button-link">
            <button className="search-button" type="button">
              <i className="fas fa-search"></i>
            </button>
          </Link>
        )}
      </form>
    </div>
  );
}
