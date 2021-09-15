import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { LibraryContext } from "../LibraryContext";

export default function SingleBookDescription() {
  const { searchedBooks } = useContext(LibraryContext);

  let { id } = useParams();

  const bookMatch = searchedBooks.items.find(
    (book) => book.id.toString() === id.substring(1)
  );
  return (
    <div className="single-book-description">
      {!bookMatch.volumeInfo.description
        ? "-"
        : bookMatch.volumeInfo.description}
    </div>
  );
}
