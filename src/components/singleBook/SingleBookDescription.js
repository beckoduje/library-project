import React, { useContext } from "react";

import { LibraryContext } from "../LibraryContext";

export default function SingleBookDescription() {
  const { singleBook } = useContext(LibraryContext);

  return (
    <>
      {!singleBook ? (
        ""
      ) : (
        <div className="single-book-description">
          {!singleBook.volumeInfo.description
            ? "-"
            : singleBook.volumeInfo.description}
        </div>
      )}
    </>
  );
}
