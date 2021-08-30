import React from "react";

export default function ResultsList(props) {
  return (
    <div className="results-container">
      <ul className="results-list">
        {props.searchedBooks.length < 1
          ? ""
          : props.searchedBooks.items.map((book) => {
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
                    by&nbsp;
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
                      : book.volumeInfo.averageRating}
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
