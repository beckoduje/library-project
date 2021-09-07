import React from "react";

export default function MyCollectionNav(props) {
  return (
    <div className="myCollection-nav">
      <ul className="myCollection-nav-list">
        <li className="myCollection-nav-list-shelve">
          <button
            className={
              props.showCollectionCategory == "all"
                ? "myCollection-nav-list-shelve-button active"
                : "myCollection-nav-list-shelve-button"
            }
            onClick={() => {
              props.setShowCollectionCategory("all");
            }}
          >
            All
          </button>
        </li>
        <li className="myCollection-nav-list-shelve">
          <button
            className={
              props.showCollectionCategory == "read"
                ? "myCollection-nav-list-shelve-button active"
                : "myCollection-nav-list-shelve-button"
            }
            onClick={() => {
              props.setShowCollectionCategory("read");
            }}
          >
            Read
          </button>
        </li>
        <li className="myCollection-nav-list-shelve">
          <button
            className={
              props.showCollectionCategory == "reading"
                ? "myCollection-nav-list-shelve-button active"
                : "myCollection-nav-list-shelve-button"
            }
            onClick={() => {
              props.setShowCollectionCategory("reading");
            }}
          >
            Reading
          </button>
        </li>
        <li className="myCollection-nav-list-shelve">
          <button
            className={
              props.showCollectionCategory == "want"
                ? "myCollection-nav-list-shelve-button active"
                : "myCollection-nav-list-shelve-button"
            }
            onClick={() => {
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
