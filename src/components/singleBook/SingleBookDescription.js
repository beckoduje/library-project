import React, { useContext } from "react";

import { LibraryContext } from "../LibraryContext";

export default function SingleBookDescription() {
  const { singleBook } = useContext(LibraryContext);

  console.log(singleBook);

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

//cleanText = strInputCode.replace(/<\/?[^>]+(>|$)/g, "");
