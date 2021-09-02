import React from "react";

export default function MyCollectionList(props) {
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
                <h4 className="book-title">{!book.title ? `-` : book.title}</h4>
                <div className="book-authors-cont">
                  {!book.authors ? (
                    <span className="book-author">-</span>
                  ) : (
                    ("by&nbsp",
                    book.authors.map((author) => {
                      return (
                        <span key={Math.random()} className="book-author">
                          {author}
                        </span>
                      );
                    }))
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
                <div className="reading-status-container">
                  <button
                    className="reading-status"
                    onClick={(e) => {
                      props.addNewCollectionItem(e);
                    }}
                  >
                    Read
                  </button>
                  <button className="reading-status">Currently reading</button>
                  <button className="reading-status">Want to read</button>
                </div>
                <figure className="book-image-cont">
                  {!book.imageLinks ? (
                    `No image`
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
                  onClick={() => props.removeCollectionItem(book.id)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </li>
            );
          })}
    </ul>
  );
}
