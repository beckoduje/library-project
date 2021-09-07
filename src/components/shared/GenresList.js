import React from "react";

import { Link } from "react-router-dom";

import { genresData } from "../genresData.js";

export default function GenresList(props) {
  function getGenresData(genre) {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${genre}+subject:${genre}&startIndex=10&maxResults=10&printType=books`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        props.setSearchedBooks(data);
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
              props.setSelectedGenre(genre.id);
            }}
          >
            <Link to="/genres">{genre.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
