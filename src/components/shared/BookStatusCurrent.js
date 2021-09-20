import React, { useState, useEffect, useContext } from "react";

import { LibraryContext } from "../LibraryContext";

export default function BookStatusCurrent(props) {
  const [value, setValue] = useState();
  const {
    readBooks,
    readingBooks,
    wantList,
    setReadBooks,
    setReadingBooks,
    setWantList,
  } = useContext(LibraryContext);
  const statusVal = () => {
    return readBooks.some((e) => e.id === props.id)
      ? "read"
      : readingBooks.some((e) => e.id === props.id)
      ? "reading"
      : "want";
  };
  function handleChange(event) {
    setValue(event.target.value);
    changeCategory(event.target.value);
  }

  function changeCategory(catName) {
    // remove from category
    setReadBooks(readBooks.filter((book) => book.id !== props.id));
    setReadingBooks(readingBooks.filter((book) => book.id !== props.id));
    setWantList(wantList.filter((book) => book.id !== props.id));
    //search from API and change category
    fetch(`https://www.googleapis.com/books/v1/volumes/${props.id}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const temporaryItem = {
          id: data.id,
          title: data.volumeInfo.title,
          authors: data.volumeInfo.authors,
          averageRating: data.volumeInfo.averageRating,
          imageLinks: data.volumeInfo.imageLinks.thumbnail,
        };
        if (catName == "read") {
          setReadBooks([...readBooks, temporaryItem]);
        } else if (catName == "reading") {
          setReadingBooks([...readingBooks, temporaryItem]);
        } else if (catName == "want") {
          setWantList([...wantList, temporaryItem]);
        }
      });
  }

  useEffect(() => {
    setValue(statusVal);
  }, [readBooks, readingBooks, wantList]);
  return (
    <div className="book-current-status">
      <select
        className="book-status-list"
        value={value}
        onChange={handleChange}
      >
        <option value="read">Read</option>
        <option value="reading">Reading</option>
        <option value="want">Want to read</option>
      </select>
    </div>
  );
}
