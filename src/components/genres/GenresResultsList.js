import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { LibraryContext } from "../LibraryContext.js";

import { genresData } from "../genresData.js";

import BookStatusCurrent from "../shared/BookStatusCurrent.js";
import BookStatusOptions from "../shared/BookStatusOptions.js";

export default function GenresResultsList() {
  const { searchedBooks, setSearchedBooks, myCollection } =
    useContext(LibraryContext);

  let { genre } = useParams();
  const cutGenre = genre.substring(1);

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

  let selectedGen = genresData.findIndex((gen) => gen.title === cutGenre);

  useEffect(() => {
    getGenresData(cutGenre);
  }, []);

  return (
    <div className="results-container genres">
      <div className="genre-description-container">
        <h2 className="genre-description-title">
          {searchedBooks.length < 1 ? "" : cutGenre}
        </h2>
        <p className="genre-description">
          {searchedBooks.length < 1 ? "" : genresData[selectedGen].description}
        </p>
      </div>
      <ul className="results-list">
        {searchedBooks.length < 1
          ? ""
          : searchedBooks.items.map((book) => {
              return (
                <li
                  key={book.id}
                  className="results-list-item"
                  data-id-number={book.id}
                >
                  <h4 className="book-title">
                    <Link
                      className="results-list-item-link"
                      to={"/book/:" + book.id}
                    >
                      {!book.volumeInfo.title ? `-` : book.volumeInfo.title}
                    </Link>
                  </h4>
                  <div className="book-authors-cont">
                    {!book.volumeInfo.authors ? (
                      <span className="book-author">-</span>
                    ) : (
                      book.volumeInfo.authors.map((author, i) => {
                        return (
                          <span key={Math.random()} className="book-author">
                            {author}
                            {i < book.volumeInfo.authors.length - 1 ? ", " : ""}
                          </span>
                        );
                      })
                    )}
                  </div>
                  <div className="book-average-rating">
                    {!book.volumeInfo.averageRating
                      ? `-`
                      : Array.from({ length: 5 }, (v, i) => (
                          <i
                            key={`star_${i + 1}`}
                            className={
                              i < book.volumeInfo.averageRating
                                ? "fas fa-star start-rating full"
                                : "fas fa-star start-rating empty"
                            }
                          />
                        ))}
                  </div>
                  {myCollection.some((e) => e.id === book.id) ? (
                    <BookStatusCurrent id={book.id} />
                  ) : (
                    <BookStatusOptions />
                  )}
                  <figure className="book-image-cont">
                    {!book.volumeInfo.imageLinks ? (
                      `No image`
                    ) : (
                      <img
                        className="book-image"
                        alt="book image"
                        src={book.volumeInfo.imageLinks.thumbnail}
                      />
                    )}
                  </figure>
                  <Link
                    className="results-list-item-link sticker"
                    to={"/book/:" + book.id}
                  >
                    About
                  </Link>
                </li>
              );
            })}
      </ul>
    </div>
  );
}
