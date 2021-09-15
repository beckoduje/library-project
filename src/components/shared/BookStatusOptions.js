import React, { useContext } from "react";

import { LibraryContext } from "../LibraryContext";

export default function BookStatusOptions(props) {
  const { addNewCollectionItem } = useContext(LibraryContext);
  return (
    <div className="reading-status-container">
      <button
        data-collection="read"
        className="reading-status"
        onClick={(e) => {
          addNewCollectionItem(e);
        }}
      >
        Read
      </button>
      <button
        data-collection="reading"
        className="reading-status"
        onClick={(e) => {
          addNewCollectionItem(e);
        }}
      >
        Currently reading
      </button>
      <button
        data-collection="want"
        className="reading-status"
        onClick={(e) => {
          addNewCollectionItem(e);
        }}
      >
        Want to read
      </button>
    </div>
  );
}
