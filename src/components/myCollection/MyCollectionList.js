import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { LibraryContext } from "../LibraryContext";

import BookStatusCurrent from "../shared/BookStatusCurrent";
import BookStatusOptions from "../shared/BookStatusOptions";

import noImage from "../../images/noImage.png";

export default function MyCollectionList(props) {
  const { myCollection, removeCollectionItem } = useContext(LibraryContext);
  return (
    <ul className="results-list myCollection-list">
      {props.data.length === 0
        ? ""
        : props.data.map((book) => {
            return (
              <li
                key={Math.random()}
                className="results-list-item myCollection-list-item"
                data-id-number={book.id}
              >
                <h4 className="book-title">
                  <Link
                    className="results-list-item-link"
                    to={"/book/" + book.id}
                  >
                    {!book.title ? `-` : book.title}
                  </Link>
                </h4>
                <div className="book-authors-cont">
                  {!book.authors ? (
                    <span className="book-author">-</span>
                  ) : (
                    book.authors.map((author, i) => {
                      return (
                        <span key={Math.random()} className="book-author">
                          {author}
                          {i < book.authors.length - 1 ? ", " : ""}
                        </span>
                      );
                    })
                  )}
                </div>
                <div className="book-average-rating">
                  {!book.averageRating
                    ? `-`
                    : Array.from({ length: 5 }, (v, i) => (
                        <i
                          key={`star_${i + 1}`}
                          className={
                            i < book.averageRating
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
                  {book.imageLinks === "no image" ? (
                    <img
                        className="book-image no-image"
                        alt="book image"
                        src={noImage}
                      />
                  ) : (
                    <img
                      className="book-image"
                      alt="book image"
                      src={book.imageLinks}
                    />
                  )}
                </figure>
                <button
                  className="remove-book-btn"
                  onClick={() => removeCollectionItem(book.id)}
                >
                  <i className="fas fa-times"></i>
                </button>
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
  );
}
