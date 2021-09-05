import React, { useState, useEffect } from "react";
import FeatherImg from "../shared/FeatherImg";
import Navigation from "../shared/Navigation";
import Paginations from "../shared/Paginations";
import ResultsList from "./ResultsList";

export default function Results(props) {
  const [startIndex, setStartIndex] = useState(0);

  // fetching
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${props.userInput}&startIndex=${startIndex}&maxResults=10&printType=books`
    )
      // fetch vraća Promise
      // koristimo then metodu da nešto napravimo s promise
      .then(function (response) {
        // data moramo vratiti i na njemu koristiti json() metodu da dobijemo data (novi promise)
        return response.json();
      })
      // onda opet then metodu
      .then(function (data) {
        props.setSearchedBooks(data); // ----------- maknut props.
      });
  }, [startIndex]);

  // ------------------------ zasada maknuto da probam fetch ode ----------------------
  // function getNewVolume(userInput, startIndex) {
  //   fetch(
  //     `https://www.googleapis.com/books/v1/volumes?q=${userInput}&startIndex=${startIndex}&maxResults=10&printType=books`
  //   )
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       props.setSearchedBooks(data);
  //     });
  // }

  // function getNextVolume(userInput, startIndex) {
  //   if (startIndex >= 0) {
  //     // setStartIndex(startIndex + 10);
  //     // setStartIndex((prevState) => {
  //     //   return prevState + 10;
  //     // });
  //     fetch(
  //       `https://www.googleapis.com/books/v1/volumes?q=${userInput}&startIndex=${(
  //         startIndex + 10
  //       ).toString()}&maxResults=10&printType=books`
  //     )
  //       .then(function (response) {
  //         return response.json();
  //       })
  //       .then(function (data) {
  //         props.setSearchedBooks(data);
  //       });
  //     setStartIndex(startIndex + 10);
  //   }
  // }

  // useEffect(() => {
  //   getNextVolume(props.userInput, startIndex);
  // }, []);

  console.log(props.searchedBooks, "hej haj");
  console.log(props.userInput);
  console.log(startIndex);

  // function getPreviousVolume(userInput, startIndex) {
  //   if (startIndex > 0) {
  //     // setStartIndex(startIndex - 10);
  //     // setStartIndex((prevState) => {
  //     //   return prevState - 10;
  //     // });
  //     fetch(
  //       `https://www.googleapis.com/books/v1/volumes?q=${userInput}&startIndex=${(
  //         startIndex - 10
  //       ).toString()}&maxResults=10&printType=books`
  //     )
  //       .then(function (response) {
  //         return response.json();
  //       })
  //       .then(function (data) {
  //         props.setSearchedBooks(data);
  //       });
  //     setStartIndex(startIndex - 10);
  //   }
  // }

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
        setSelectedGenre={props.setSelectedGenre}
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
      <Paginations
        searchedBooks={props.searchedBooks}
        userInput={props.userInput}
        startIndex={startIndex}
        setStartIndex={setStartIndex}
        // getNewVolume={getNewVolume}
      />
      <FeatherImg />
    </div>
  );
}

// Maka iz Navigation: setSearchedBooks={props.setSearchedBooks}
