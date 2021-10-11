import React from "react";

import { Link } from "react-router-dom";

import { genresData } from "../genresData.js";

export default function GenresList() {
  return (
    <ul className="genres-list">
      {genresData.map((genre) => {
        return (
          <li key={genre.id} className="single-genre">
            <Link to={"/genres/:" + genre.title}>{genre.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
