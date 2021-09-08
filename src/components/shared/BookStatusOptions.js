import React from "react";

export default function BookStatusOptions(props) {
  return (
    <div className="reading-status-container">
      <button
        data-collection="read"
        className="reading-status"
        onClick={(e) => {
          props.addNewCollectionItem(e);
        }}
      >
        Read
      </button>
      <button
        data-collection="reading"
        className="reading-status"
        onClick={(e) => {
          props.addNewCollectionItem(e);
        }}
      >
        Currently reading
      </button>
      <button
        data-collection="want"
        className="reading-status"
        onClick={(e) => {
          props.addNewCollectionItem(e);
        }}
      >
        Want to read
      </button>
    </div>
  );
}
