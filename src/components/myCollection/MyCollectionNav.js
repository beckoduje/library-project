import React from "react";

export default function MyCollectionNav(props) {
  return (
    <div className="myCollection-nav">
      <ul className="myCollection-nav-list">
        <li className="myCollection-nav-list-shelve">
          <button
            className="myCollection-nav-list-shelve-button"
            onClick={() => {
              // props.setShowCollectionCategory(props.myCollection);
              props.setShowCollectionCategory("all");
            }}
          >
            All
          </button>
        </li>
        <li className="myCollection-nav-list-shelve">
          <button
            className="myCollection-nav-list-shelve-button"
            onClick={() => {
              // props.setShowCollectionCategory(props.readBooks);
              props.setShowCollectionCategory("read");
            }}
          >
            Read
          </button>
        </li>
        <li className="myCollection-nav-list-shelve">
          <button
            className="myCollection-nav-list-shelve-button"
            onClick={() => {
              // props.setShowCollectionCategory(props.readingBooks);
              props.setShowCollectionCategory("reading");
            }}
          >
            Reading
          </button>
        </li>
        <li className="myCollection-nav-list-shelve">
          <button
            className="myCollection-nav-list-shelve-button"
            onClick={() => {
              // props.setShowCollectionCategory(props.wantList);
              props.setShowCollectionCategory("want");
            }}
          >
            Want to read
          </button>
        </li>
      </ul>
    </div>
  );
}
