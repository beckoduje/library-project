import React from "react";
import { useParams } from "react-router-dom";

export default function SingleBookCard(props) {
  let { id } = useParams();

  const bookMatch = props.searchedBooks.items.find(
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
          <div className="reading-status-container">
            <button
              data-collection="read"
              className="reading-status"
              onClick={(e) => {
                props.addNewCollectionItem(e);
              }}
            >
              Read
            </button>
            <button
              data-collection="reading"
              className="reading-status"
              onClick={(e) => {
                props.addNewCollectionItem(e);
              }}
            >
              Currently reading
            </button>
            <button
              data-collection="want"
              className="reading-status"
              onClick={(e) => {
                props.addNewCollectionItem(e);
              }}
            >
              Want to read
            </button>
          </div>
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
