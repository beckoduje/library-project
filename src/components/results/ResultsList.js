import React from "react";

export default function ResultsList({ searchedBooks }) {
  return (
    <div className="results-container">
      <ul className="results-list">
        {!searchedBooks
          ? ""
          : searchedBooks.items.map((book) => {
              return (
                <li key={Math.random()} className="results-list-item">
                  <h4 className="book-title">{book.volumeInfo.title}</h4>
                  <div className="book-authors-cont">
                    {book.volumeInfo.authors.length <= 1 ? (
                      <span className="book-author">
                        {book.volumeInfo.authors[0]}
                      </span>
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
                    {book.volumeInfo.averageRating}
                  </div>
                </li>
              );
            })}
      </ul>
    </div>
  );
}
