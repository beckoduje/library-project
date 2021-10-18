import React, { useRef, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { LibraryContext } from "../LibraryContext";

export default function Search() {
  const { getUserInput, getData, userInput, goSearch, setGoSearch } =
    useContext(LibraryContext);

  let history = useHistory();
  // const inputEl = useRef(null);

  const url = new URL(window.location);
  console.log(url);
  const currPath = url.pathname + url.search;
  console.log(currPath);

  return (
    <div className="search-container">
      <form action="#" method="post" className="search-form">
        <input
          placeholder="Search here..."
          type="text"
          className="search-input"
          // ref={inputEl}
          onChange={(e) => getUserInput(e.target.value.trim())}
          // onKeyPress={(e) => {
          //   if (e.key === "Enter" && e.target.value !== undefined) {
          //     e.preventDefault();
          //     history.push("/results/" + userInput);
          //   }
          // }}
          onKeyPress={(e) => {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
              //userInput
              e.preventDefault();
              history.push("/results/" + userInput);
              // setGoSearch((prevState) => {
              //   !prevState;
              // });
              setGoSearch(!goSearch);
            } else if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />

        {/* <Link
          to={"/results/" + userInput}
          className="search-button-link"
          // onClick={() => {
          //   if (inputEl.current.value !== undefined) {
          //     getData(userInput);
          //   }
          // }}
        >
          <button className="search-button" type="button">
            <i className="fas fa-search"></i>
          </button>
        </Link> */}

        {userInput || userInput.length >= 1 ? (
          <Link
            to={"/results/" + userInput}
            className="search-button-link"
            onClick={() =>
              // setGoSearch((prevState) => {
              //   !prevState;
              // });
              setGoSearch(!goSearch)
            }
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
