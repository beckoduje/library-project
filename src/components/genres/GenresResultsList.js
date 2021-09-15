import React, { useContext } from "react";

import { LibraryContext } from "../LibraryContext.js";

import { genresData } from "../genresData.js";

export default function GenresResultsList() {
  const { selectedGenre, searchedBooks, addNewCollectionItem } =
    useContext(LibraryContext);
  let selectedGen = selectedGenre - 1;

  return (
    <div className="results-container genres">
      <div className="genre-description-container">
        <h2 className="genre-description-title">
          {searchedBooks.length < 1
            ? "Browse by genre"
            : genresData[selectedGen].title}
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
                    {!book.volumeInfo.title ? `-` : book.volumeInfo.title}
                  </h4>
                  <div className="book-authors-cont">
                    {!book.volumeInfo.authors ? (
                      <span className="book-author">-</span>
                    ) : (
                      book.volumeInfo.authors.map((author) => {
                        return (
                          <span key={Math.random()} className="book-author">
                            {author}
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
                  <div className="reading-status-container">
                    <button
                      data-collection="read"
                      className="reading-status"
                      onClick={(e) => {
                        addNewCollectionItem(e);
                      }}
                    >
                      Read
                    </button>
                    <button
                      data-collection="reading"
                      className="reading-status"
                      onClick={(e) => {
                        addNewCollectionItem(e);
                      }}
                    >
                      Currently reading
                    </button>
                    <button
                      data-collection="want"
                      className="reading-status"
                      onClick={(e) => {
                        addNewCollectionItem(e);
                      }}
                    >
                      Want to read
                    </button>
                  </div>
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
                </li>
              );
            })}
      </ul>
    </div>
  );
}
