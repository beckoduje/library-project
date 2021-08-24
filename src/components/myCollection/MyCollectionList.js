import React, { useState, useEffect } from "react";
import MyCollectionNav from "./MyCollectionNav";

export default function MyCollectionList(props) {
  const [showCollectionCategory, setShowCollectionCategory] = useState(
    props.myCollection
  );

  // useEffect(() => {
  //   setShowCollectionCategory(props.myCollection);
  // }, []);

  return (
    <div className="myCollection-container">
      <MyCollectionNav
        setShowCollectionCategory={setShowCollectionCategory}
        myCollection={props.myCollection}
        readBooks={props.readBooks}
        readingBooks={props.readingBooks}
        wantList={props.wantList}
      />
      <ul className="myCollection-list">
        {showCollectionCategory.length === 0
          ? ""
          : showCollectionCategory.map((book) => {
              return (
                <li key={Math.random()} className="myCollection-list-item">
                  <h4 className="book-title">
                    {!book.title ? `-` : book.title}
                  </h4>
                  <div className="book-authors-cont">
                    {!book.authors ? (
                      <span className="book-author">-</span>
                    ) : (
                      book.authors.map((author) => {
                        return (
                          <span key={Math.random()} className="book-author">
                            {author}
                          </span>
                        );
                      })
                    )}
                  </div>
                  <div className="book-average-rating">
                    {!book.averageRating ? `-` : book.averageRating}
                  </div>
                  <div className="reading-status-container">
                    <button
                      className="reading-status"
                      onClick={(e) => {
                        props.addNewCollectionItem(e);
                      }}
                    >
                      Read
                    </button>
                    <button className="reading-status">
                      Currently reading
                    </button>
                    <button className="reading-status">Want to read</button>
                  </div>
                  <figure className="book-image-cont">
                    {!book.imageLinks ? (
                      `No image`
                    ) : (
                      <img
                        className="book-image"
                        alt="book image"
                        src={book.imageLinks}
                      />
                    )}
                  </figure>
                </li>
              );
            })}
      </ul>
    </div>
  );
}
