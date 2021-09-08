import React from "react";
import { useParams } from "react-router-dom";

export default function SingleBookDescription(props) {
  let { id } = useParams();

  const bookMatch = props.searchedBooks.items.find(
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
