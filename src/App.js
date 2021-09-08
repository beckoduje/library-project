import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./css/style.css";

import Home from "./components/home/Home";
import Results from "./components/results/Results";
import MyCollection from "./components/myCollection/MyCollection";
import Genres from "./components/genres/Genres";
import SingleBook from "./components/singleBook/SingleBook";

function App() {
  const MY_COLLECTION_KEY = "myCollection";
  const READ_BOOKS_KEY = "readBooks";
  const READING_BOOKS_KEY = "readingBooks";
  const WANT_LIST_KEY = "wishList";

  const [myCollection, setMyCollection] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [readingBooks, setReadingBooks] = useState([]);
  const [wantList, setWantList] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [userInput, getUserInput] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(1);

  function getData(userInput) {
    if (userInput.trim().length > 0) {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${userInput}&startIndex=0&maxResults=10&printType=books`
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          setSearchedBooks(data);
        });
      document.querySelector(".search-input").value = "";
      console.log("prvi fetch");
    }
  }

  function addNewCollectionItem(e) {
    let volumeID = e.target.closest(".results-list-item").dataset.idNumber;

    fetch(`https://www.googleapis.com/books/v1/volumes/${volumeID}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const newCollectionItem = {
          id: data.id,
          title: data.volumeInfo.title,
          authors: data.volumeInfo.authors,
          averageRating: data.volumeInfo.averageRating,
          imageLinks: data.volumeInfo.imageLinks.thumbnail,
        };

        const check =
          !readBooks.some((book) => book.id === data.id) &&
          !readingBooks.some((book) => book.id === data.id) &&
          !wantList.some((book) => book.id === data.id);

        if (!myCollection.some((book) => book.id === data.id)) {
          setMyCollection([...myCollection, newCollectionItem]);
        }
        if (e.target.dataset.collection === "read" && check) {
          setReadBooks([...readBooks, newCollectionItem]);
        } else if (e.target.dataset.collection === "reading" && check) {
          setReadingBooks([...readingBooks, newCollectionItem]);
        } else if (e.target.dataset.collection === "want" && check) {
          setWantList([...wantList, newCollectionItem]);
        }
      });
  }

  function removeCollectionItem(id) {
    setMyCollection(myCollection.filter((book) => book.id !== id));
    setReadBooks(readBooks.filter((book) => book.id !== id));
    setReadingBooks(readingBooks.filter((book) => book.id !== id));
    setWantList(wantList.filter((book) => book.id !== id));
  }

  useEffect(() => {
    // -------------------------- ALL COLLECTION --------------------------
    const myCollectionJSON = localStorage.getItem(MY_COLLECTION_KEY);
    if (myCollectionJSON != null) setMyCollection(JSON.parse(myCollectionJSON));
    // -------------------------- READ COLLECTION --------------------------
    const myReadCollectionJSON = localStorage.getItem(READ_BOOKS_KEY);
    if (myReadCollectionJSON != null)
      setReadBooks(JSON.parse(myReadCollectionJSON));
    // -------------------------- READING COLLECTION --------------------------
    const myReadingCollectionJSON = localStorage.getItem(READING_BOOKS_KEY);
    if (myReadingCollectionJSON != null)
      setReadingBooks(JSON.parse(myReadingCollectionJSON));
    // -------------------------- WANT COLLECTION --------------------------
    const myWantCollectionJSON = localStorage.getItem(WANT_LIST_KEY);
    if (myWantCollectionJSON != null)
      setWantList(JSON.parse(myWantCollectionJSON));
  }, []);
  // -------------------------- ALL COLLECTION --------------------------
  useEffect(() => {
    localStorage.setItem(MY_COLLECTION_KEY, JSON.stringify(myCollection));
  }, [myCollection]);
  // -------------------------- READ COLLECTION --------------------------
  useEffect(() => {
    localStorage.setItem(READ_BOOKS_KEY, JSON.stringify(readBooks));
  }, [readBooks]);
  // -------------------------- READING COLLECTION --------------------------
  useEffect(() => {
    localStorage.setItem(READING_BOOKS_KEY, JSON.stringify(readingBooks));
  }, [readingBooks]);
  // -------------------------- WANT COLLECTION --------------------------
  useEffect(() => {
    localStorage.setItem(WANT_LIST_KEY, JSON.stringify(wantList));
  }, [wantList]);

  return (
    <Router>
      <Switch>
        <Route path="/book/:id">
          <SingleBook
            searchedBooks={searchedBooks}
            setSearchedBooks={setSearchedBooks}
            getData={getData}
            getUserInput={getUserInput}
            userInput={userInput}
            myCollection={myCollection}
            setMyCollection={setMyCollection}
            addNewCollectionItem={addNewCollectionItem}
            readBooks={readBooks}
            readingBooks={readingBooks}
            wantList={wantList}
            setSelectedGenre={setSelectedGenre}
            removeCollectionItem={removeCollectionItem}
          />
        </Route>
        <Route path="/collection">
          <MyCollection
            searchedBooks={searchedBooks}
            setSearchedBooks={setSearchedBooks}
            getData={getData}
            getUserInput={getUserInput}
            userInput={userInput}
            myCollection={myCollection}
            setMyCollection={setMyCollection}
            addNewCollectionItem={addNewCollectionItem}
            readBooks={readBooks}
            readingBooks={readingBooks}
            wantList={wantList}
            setSelectedGenre={setSelectedGenre}
            removeCollectionItem={removeCollectionItem}
          />
        </Route>
        <Route path="/genres">
          <Genres
            searchedBooks={searchedBooks}
            setSearchedBooks={setSearchedBooks}
            getData={getData}
            getUserInput={getUserInput}
            userInput={userInput}
            addNewCollectionItem={addNewCollectionItem}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />
        </Route>
        <Route path="/results">
          <Results
            searchedBooks={searchedBooks}
            setSearchedBooks={setSearchedBooks}
            getData={getData}
            getUserInput={getUserInput}
            userInput={userInput}
            myCollection={myCollection}
            setMyCollection={setMyCollection}
            setReadBooks={setReadBooks}
            setReadingBooks={setReadingBooks}
            setWantList={setWantList}
            addNewCollectionItem={addNewCollectionItem}
            setSelectedGenre={setSelectedGenre}
          />
        </Route>
        <Route path="/">
          <Home
            setSearchedBooks={setSearchedBooks}
            getData={getData}
            getUserInput={getUserInput}
            userInput={userInput}
            setSelectedGenre={setSelectedGenre}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
