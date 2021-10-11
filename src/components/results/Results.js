import React, { useState, useEffect, useContext } from "react";
import FeatherImg from "../shared/FeatherImg";
import Navigation from "../shared/Navigation";
import Paginations from "../shared/Paginations";
import ResultsList from "./ResultsList";

import { useParams } from "react-router-dom";

import { LibraryContext } from "../LibraryContext";

export default function Results() {
  let { userInput } = useParams();
  const cutUserInp = userInput.substring(1);

  const [startIndex, setStartIndex] = useState(0);

  const { setSearchedBooks } = useContext(LibraryContext);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${cutUserInp}&startIndex=${startIndex}&maxResults=10&printType=books`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setSearchedBooks(data);
      });

  }, [startIndex]);

  return (
    <div className="results-section">
      <Navigation />
      <ResultsList />
      <Paginations startIndex={startIndex} setStartIndex={setStartIndex} />
      <FeatherImg />
    </div>
  );
}
