import React, { useState, useEffect, useContext } from "react";
import FeatherImg from "../shared/FeatherImg";
import Navigation from "../shared/Navigation";
import Paginations from "../shared/Paginations";
import ResultsList from "./ResultsList";

import { LibraryContext } from "../LibraryContext";

export default function Results() {
  const [startIndex, setStartIndex] = useState(0);

  const { searchedBooks, setSearchedBooks, userInput } =
    useContext(LibraryContext);

  // fetching
  useEffect(() => {
    if (searchedBooks.length < 1) {
      return;
    } else {
      console.log(`${userInput} iz fetcha`);
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${userInput}&startIndex=${startIndex}&maxResults=10&printType=books`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          setSearchedBooks(data);
        });
      console.log("drugi fetch");
    }
  }, [startIndex]);

  console.log(searchedBooks);
  console.log(userInput);

  return (
    <div className="results-section">
      <Navigation />
      <ResultsList />
      <Paginations startIndex={startIndex} setStartIndex={setStartIndex} />
      <FeatherImg />
    </div>
  );
}
