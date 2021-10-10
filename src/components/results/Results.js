import React, { useState, useEffect, useContext } from "react";
import FeatherImg from "../shared/FeatherImg";
import Navigation from "../shared/Navigation";
import Paginations from "../shared/Paginations";
import ResultsList from "./ResultsList";

import { useParams } from "react-router-dom"; // novo linkovi

import { LibraryContext } from "../LibraryContext";

export default function Results() {
  /* Sve ovo je novo za link */
  let { userInput } = useParams();
  const cutUserInp = userInput.substring(1);

  const [startIndex, setStartIndex] = useState(0);

  const {
    searchedBooks,
    setSearchedBooks,
  } = useContext(LibraryContext); // userInput - izbačeno jer kroz param korisitm /// iskomentirano za link

  //////// get data proba
  // function getData(userInput) {
  //   if (userInput.trim().length > 0) {
  //     fetch(
  //       `https://www.googleapis.com/books/v1/volumes?q=${userInput}&startIndex=0&maxResults=10&printType=books`
  //     )
  //       .then(function (response) {
  //         return response.json();
  //       })
  //       .then(function (data) {
  //         setSearchedBooks(data);
  //       });
  //     document.querySelector(".search-input").value = "";
  //   }
  // }

  // fetching ----- najnovi iskomentirano
  // useEffect(() => {
  //   if (searchedBooks.length < 1) {
  //     return;
  //   } else {
  //     fetch(
  //       `https://www.googleapis.com/books/v1/volumes?q=${userInput}&startIndex=${startIndex}&maxResults=10&printType=books`
  //     )
  //       .then(function (response) {
  //         return response.json();
  //       })
  //       .then(function (data) {
  //         setSearchedBooks(data);
  //       });
  //   }
  // }, [startIndex]);

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
