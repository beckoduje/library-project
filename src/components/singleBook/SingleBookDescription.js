import React from "react";

export default function SingleBookDescription({ singleBook }) {
  return (
    <div className="single-book-description-wrapper">
      {!singleBook ? (
        ""
      ) : (
        <div className="single-book-description">
          {!singleBook.volumeInfo.description
            ? "-"
            : singleBook.volumeInfo.description.replace(/<\/?[^>]+(>|$)/g, "")}
        </div>
      )}
    </div>
  );
}
