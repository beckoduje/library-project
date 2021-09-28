import React, { useContext } from "react";

import { LibraryContext } from "../LibraryContext";

export default function SingleBookDescription() {
  const { singleBook } = useContext(LibraryContext);

  console.log(singleBook);

  return (
    <>
      {!singleBook ? (
        ""
      ) : (
        <div className="single-book-description">
          {!singleBook.volumeInfo.description
            ? "-"
            : singleBook.volumeInfo.description.replace(/<\/?[^>]+(>|$)/g, "")}
        </div>
      )}
    </>
  );
}

//cleanText = strInputCode.replace(/<\/?[^>]+(>|$)/g, "");
