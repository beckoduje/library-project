import React from "react";

import { Link } from "react-router-dom";

export default function GenresList(props) {
  function getGenresData(genre) {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${genre}+subject:${genre}&startIndex=10&maxResults=10&printType=books`
    )
      // fetch vraća Promise
      // koristimo then metodu da nešto napravimo s promise
      .then(function (response) {
        // data moramo vratiti i na njemu koristiti json() metodu da dobijemo data (novi promise)
        return response.json();
      })
      // onda opet then metodu
      .then(function (data) {
        props.setSearchedBooks(data);
      });
  }

  return (
    <ul className="genres-list">
      <li
        className="single-genre"
        onClick={() => {
          getGenresData("Science");
        }}
      >
        <Link to="/genres">Science</Link>
      </li>
      <li
        className="single-genre"
        onClick={() => {
          getGenresData("Psychology");
        }}
      >
        <Link to="/genres">Psychology</Link>
      </li>
      <li
        className="single-genre"
        onClick={() => {
          getGenresData("Philosophy");
        }}
      >
        <Link to="/genres">Philosophy</Link>
      </li>
      <li
        className="single-genre"
        onClick={() => {
          getGenresData("Religion");
        }}
      >
        <Link to="/genres">Religion</Link>
      </li>
      <li
        className="single-genre"
        onClick={() => {
          getGenresData("Art");
        }}
      >
        <Link to="/genres">Art</Link>
      </li>
      <li
        className="single-genre"
        onClick={() => {
          getGenresData("Astronomy");
        }}
      >
        <Link to="/genres">Astronomy</Link>
      </li>
      <li
        className="single-genre"
        onClick={() => {
          getGenresData("Physics");
        }}
      >
        <Link to="/genres">Physics</Link>
      </li>
      <li
        className="single-genre"
        onClick={() => {
          getGenresData("Chemistry");
        }}
      >
        <Link to="/genres">Chemistry</Link>
      </li>
      <li
        className="single-genre"
        onClick={() => {
          getGenresData("Fiction");
        }}
      >
        <Link to="/genres">Fiction</Link>
      </li>
    </ul>
  );
}
