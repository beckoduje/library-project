import React from "react";

export default function MyCollectionNav(props) {
  return (
    <div className="myCollection-nav">
      <ul className="myCollection-nav-list">
        <li className="myCollection-nav-list-shelve">
          <button
            className="myCollection-nav-list-shelve-button"
            onClick={() => {
              props.setShowCollectionCategory(props.myCollection);
            }}
          >
            All
          </button>
        </li>
        <li className="myCollection-nav-list-shelve">
          <button
            className="myCollection-nav-list-shelve-button"
            onClick={() => {
              props.setShowCollectionCategory(props.readBooks);
            }}
          >
            Read
          </button>
        </li>
        <li className="myCollection-nav-list-shelve">
          <button
            className="myCollection-nav-list-shelve-button"
            onClick={() => {
              props.setShowCollectionCategory(props.readingBooks);
            }}
          >
            Reading
          </button>
        </li>
        <li className="myCollection-nav-list-shelve">
          <button
            className="myCollection-nav-list-shelve-button"
            onClick={() => {
              props.setShowCollectionCategory(props.wantList);
            }}
          >
            Want to read
          </button>
        </li>
      </ul>
    </div>
  );
}
