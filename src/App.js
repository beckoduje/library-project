import React, { useState } from "react";

import "./css/style.css";

import Home from "./components/home/Home";
import Results from "./components/results/Results";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [myCollection, setMyCollection] = useState();
  const [readBooks, setReadBooks] = useState();
  const [readingBooks, setReadingBooks] = useState();
  const [wishList, setWishList] = useState();
  const [searchedBooks, setSearchedBooks] = useState();
  const [userInput, getUserInput] = useState();
  const [inputOK, setInputOK] = useState(true);

  function getData(userInput) {
    if (userInput && userInput.trim().length > 0) {
      setInputOK(true);
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${userInput}&startIndex=0&maxResults=10`
      )
        // fetch vraća Promise
        // koristimo then metodu da nešto napravimo s promise
        .then(function (response) {
          // data moramo vratiti i na njemu koristiti json() metodu da dobijemo data (novi promise)
          return response.json();
        })
        // onda opet then metodu
        .then(function (data) {
          setSearchedBooks(data); // ----------- maknut props.
        });
      document.querySelector(".search-input").value = "";
    } else {
      setInputOK(false);
      return;
    }
  }

  console.log(searchedBooks);

  return (
    <Router>
      <Switch>
        <Route path="/results">
          <Results
            searchedBooks={searchedBooks}
            getData={getData}
            getUserInput={getUserInput}
            userInput={userInput}
            inputOK={inputOK}
          />
        </Route>
        <Route path="/">
          <Home
            getData={getData}
            getUserInput={getUserInput}
            userInput={userInput}
            inputOK={inputOK}
          />
        </Route>
      </Switch>
    </Router>
  );
}

// maka iz Home: setSearchedBooks={setSearchedBooks}
// maka iz Results: setSearchedBooks={setSearchedBooks}

export default App;
