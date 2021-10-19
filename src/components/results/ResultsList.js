import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BookStatusCurrent from "../shared/BookStatusCurrent";
import BookStatusOptions from "../shared/BookStatusOptions";
// import Loading from "../shared/Loading";

import noImage from "../../images/noImage.png";

import { LibraryContext } from "../LibraryContext";

export default function ResultsList() {
  const { searchedBooks, myCollection } = useContext(LibraryContext);

  console.log(searchedBooks);

  return (
    <div className="results-container">
      <ul className="results-list">
        {searchedBooks.length < 1 ||
        searchedBooks.error ||
        searchedBooks.totalItems === 0
          ? "Search the library"
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
                      to={"/book/" + book.id}
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
                      <img
                        className="book-image no-image"
                        alt="book image"
                        src={noImage}
                      />
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
                    to={"/book/" + book.id}
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
