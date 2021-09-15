import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { LibraryContext } from "../LibraryContext";

import BookStatusCurrent from "../shared/BookStatusCurrent";
import BookStatusOptions from "../shared/BookStatusOptions";

export default function SingleBookCard(props) {
  const { searchedBooks } = useContext(LibraryContext);

  let { id } = useParams();

  const bookMatch = searchedBooks.items.find(
    (book) => book.id.toString() === id.substring(1)
  );
  return (
    <div className="results-container">
      <div className="results-list">
        <div className="results-list-item">
          <h4 className="book-title">
            {!bookMatch.volumeInfo.title ? "-" : bookMatch.volumeInfo.title}
          </h4>
          <div className="book-authors-cont">
            {!bookMatch.volumeInfo.authors ? (
              <span className="book-author">-</span>
            ) : (
              bookMatch.volumeInfo.authors.map((author) => {
                return (
                  <span key={Math.random()} className="book-author">
                    {author}
                  </span>
                );
              })
            )}
          </div>
          <div className="book-average-rating">
            {!bookMatch.volumeInfo.averageRating
              ? `-`
              : Array.from({ length: 5 }, (v, i) => (
                  <i
                    key={`star_${i + 1}`}
                    className={
                      i < bookMatch.volumeInfo.averageRating
                        ? "fas fa-star start-rating full"
                        : "fas fa-star start-rating empty"
                    }
                  />
                ))}
          </div>
          {/* {props.myCollection.some((e) => e.id === bookMatch.id) ? (
            <BookStatusCurrent
              id={bookMatch.id}
              readBooks={props.readBooks}
              readingBooks={props.readingBooks}
              wantList={props.wantList}
              setReadBooks={props.setReadBooks}
              setReadingBooks={props.setReadingBooks}
              setWantList={props.setWantList}
            />
          ) : (
            <BookStatusOptions
              addNewCollectionItem={props.addNewCollectionItem}
            />
          )} */}
          <figure className="book-image-cont">
            {!bookMatch.volumeInfo.imageLinks ? (
              `No image`
            ) : (
              <img
                className="book-image"
                alt="book image"
                src={bookMatch.volumeInfo.imageLinks.thumbnail}
              />
            )}
          </figure>
        </div>
      </div>
    </div>
  );
}
