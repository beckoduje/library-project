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
                  {book.volumeInfo.title}
                </li>
              );
            })}
      </ul>
    </div>
  );
}
