import React, { useState, useEffect } from "react";
import Navigation from "../shared/Navigation";
import ResultsList from "./ResultsList";

export default function Results(props) {
  const [startIndex, setStartIndex] = useState(0);
  function getNextVolume(userInput, startIndex) {
    if (startIndex >= 0) {
      // setStartIndex(startIndex + 10);
      // setStartIndex((prevState) => {
      //   return prevState + 10;
      // });
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${userInput}&startIndex=${(
          startIndex + 10
        ).toString()}&maxResults=10&printType=books`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          props.setSearchedBooks(data);
        });
      setStartIndex(startIndex + 10);
    }
  }

  // useEffect(() => {
  //   getNextVolume(props.userInput, startIndex);
  // }, []);

  console.log(props.searchedBooks, "hej haj");
  console.log(props.userInput);
  console.log(startIndex);

  function getPreviousVolume(userInput, startIndex) {
    if (startIndex > 0) {
      // setStartIndex(startIndex - 10);
      // setStartIndex((prevState) => {
      //   return prevState - 10;
      // });
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${userInput}&startIndex=${(
          startIndex - 10
        ).toString()}&maxResults=10&printType=books`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          props.setSearchedBooks(data);
        });
      setStartIndex(startIndex - 10);
    }
  }

  // useEffect(() => {
  //   getPreviousVolume(props.userInput, startIndex);
  // }, []);

  return (
    <div className="results-section">
      <Navigation
        setSearchedBooks={props.setSearchedBooks}
        getData={props.getData}
        getUserInput={props.getUserInput}
        userInput={props.userInput}
        inputOK={props.inputOK}
        results="results"
      />
      <ResultsList
        searchedBooks={props.searchedBooks}
        myCollection={props.myCollection}
        setMyCollection={props.setMyCollection}
        setReadBooks={props.setReadBooks}
        setReadingBooks={props.setReadingBooks}
        setWantList={props.setWantList}
        addNewCollectionItem={props.addNewCollectionItem}
      />
      <div className="next-page">
        <span
          className="load load-previous"
          onClick={() => {
            getPreviousVolume(props.userInput, startIndex);
          }}
        >
          <i className="fas fa-arrow-alt-circle-left"></i>
        </span>
        <span
          className="load load-next"
          onClick={() => {
            getNextVolume(props.userInput, startIndex);
          }}
        >
          <i className="fas fa-arrow-alt-circle-right"></i>
        </span>
      </div>
    </div>
  );
}

// Maka iz Navigation: setSearchedBooks={props.setSearchedBooks}
