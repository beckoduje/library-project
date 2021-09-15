import React, { createContext, useState } from "react";

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
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

  return (
    <LibraryContext.Provider
      value={{
        myCollection,
        setMyCollection,
        readBooks,
        setReadBooks,
        readingBooks,
        setReadingBooks,
        wantList,
        setWantList,
        searchedBooks,
        setSearchedBooks,
        userInput,
        getUserInput,
        selectedGenre,
        setSelectedGenre,
        getData,
        addNewCollectionItem,
        removeCollectionItem,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};
