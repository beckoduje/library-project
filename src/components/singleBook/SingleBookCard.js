import React, { useContext } from "react";

import { LibraryContext } from "../LibraryContext";

import BookStatusCurrent from "../shared/BookStatusCurrent";
import BookStatusOptions from "../shared/BookStatusOptions";

export default function SingleBookCard() {
  const { singleBook, myCollection } = useContext(LibraryContext);

  return (
    <div className="results-container">
      {!singleBook ? (
        ""
      ) : (
        <div className="results-list">
          <div className="results-list-item" data-id-number={singleBook.id}>
            <h4 className="book-title">
              {!singleBook.volumeInfo.title ? "-" : singleBook.volumeInfo.title}
            </h4>
            <div className="book-authors-cont">
              {!singleBook.volumeInfo.authors ? (
                <span className="book-author">-</span>
              ) : (
                singleBook.volumeInfo.authors.map((author) => {
                  return (
                    <span key={Math.random()} className="book-author">
                      {author}
                    </span>
                  );
                })
              )}
            </div>
            <div className="book-average-rating">
              {!singleBook.volumeInfo.averageRating
                ? `-`
                : Array.from({ length: 5 }, (v, i) => (
                    <i
                      key={`star_${i + 1}`}
                      className={
                        i < singleBook.volumeInfo.averageRating
                          ? "fas fa-star start-rating full"
                          : "fas fa-star start-rating empty"
                      }
                    />
                  ))}
            </div>
            {myCollection.some((e) => e.id === singleBook.id) ? (
              <BookStatusCurrent id={singleBook.id} />
            ) : (
              <BookStatusOptions id={singleBook.id} />
            )}
            <figure className="book-image-cont">
              {!singleBook.volumeInfo.imageLinks ? (
                `No image`
              ) : (
                <img
                  className="book-image"
                  alt="book image"
                  src={singleBook.volumeInfo.imageLinks.thumbnail}
                />
              )}
            </figure>
          </div>
        </div>
      )}
    </div>
  );
}
