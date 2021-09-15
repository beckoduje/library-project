import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { LibraryContext } from "../LibraryContext.js";

import { genresData } from "../genresData.js";

export default function GenresList() {
  const { setSearchedBooks, setSelectedGenre } = useContext(LibraryContext);
  function getGenresData(genre) {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${genre}+subject:${genre}&startIndex=10&maxResults=10&printType=books`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setSearchedBooks(data);
      });
  }

  return (
    <ul className="genres-list">
      {genresData.map((genre) => {
        return (
          <li
            key={genre.id}
            className="single-genre"
            onClick={() => {
              getGenresData(genre.title);
              setSelectedGenre(genre.id);
            }}
          >
            <Link to="/genres">{genre.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
