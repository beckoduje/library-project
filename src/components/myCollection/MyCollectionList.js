import React, { useState, useEffect } from "react";
import MyCollectionListTest from "./MyCollectionListTest";
import MyCollectionNav from "./MyCollectionNav";

// //create your forceUpdate hook
// function useForceUpdate() {
//   const [value, setValue] = useState(0); // integer state
//   return () => setValue((value) => value + 1); // update the state to force render
// }

export default function MyCollectionList(props) {
  // // call your hook here
  // const forceUpdate = useForceUpdate();

  // const [showCollectionCategory, setShowCollectionCategory] = useState(
  //   props.myCollection
  // );
  const [showCollectionCategory, setShowCollectionCategory] = useState("all");

  /* 
    {collection === "read" ? <Collection props={read} />
        : collection === "wishlist" ? <Collection props={wishlist} />
        : collection === "want" ? <Collection props={want} />
        : <Collection props={all} />}
        nije 
        ternary ti je skracenica za if/else
        ili else if 
        mozes da imas koliko god imas uslova
  */

  // useEffect(() => {
  //   setShowCollectionCategory(props.myCollection);
  // }, [props.myCollection]);

  return (
    <div className="results-container myCollection-container">
      <MyCollectionNav
        setShowCollectionCategory={setShowCollectionCategory}
        myCollection={props.myCollection}
        readBooks={props.readBooks}
        readingBooks={props.readingBooks}
        wantList={props.wantList}
      />
      {showCollectionCategory === "all" ? (
        <MyCollectionListTest
          data={props.myCollection}
          addNewCollectionItem={props.addNewCollectionItem}
          removeCollectionItem={props.removeCollectionItem}
        />
      ) : showCollectionCategory === "read" ? (
        <MyCollectionListTest
          data={props.readBooks}
          addNewCollectionItem={props.addNewCollectionItem}
          removeCollectionItem={props.removeCollectionItem}
        />
      ) : showCollectionCategory === "reading" ? (
        <MyCollectionListTest
          data={props.readingBooks}
          addNewCollectionItem={props.addNewCollectionItem}
          removeCollectionItem={props.removeCollectionItem}
        />
      ) : (
        <MyCollectionListTest
          data={props.wantList}
          addNewCollectionItem={props.addNewCollectionItem}
          removeCollectionItem={props.removeCollectionItem}
        />
      )}
      {/* <ul className="results-list myCollection-list">
        {showCollectionCategory.length === 0
          ? ""
          : showCollectionCategory.map((book) => {
              return (
                <li
                  key={Math.random()}
                  className="results-list-item myCollection-list-item"
                  data-id-number={book.id}
                >
                  <h4 className="book-title">
                    {!book.title ? `-` : book.title}
                  </h4>
                  <div className="book-authors-cont">
                    {!book.authors ? (
                      <span className="book-author">-</span>
                    ) : (
                      ("by&nbsp",
                      book.authors.map((author) => {
                        return (
                          <span key={Math.random()} className="book-author">
                            {author}
                          </span>
                        );
                      }))
                    )}
                  </div>
                  <div className="book-average-rating">
                    {!book.averageRating
                      ? `-`
                      : Array.from({ length: 5 }, (v, i) => (
                          <i
                            key={`star_${i + 1}`}
                            className={
                              i < book.averageRating
                                ? "fas fa-star start-rating full"
                                : "fas fa-star start-rating empty"
                            }
                          />
                        ))}
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
                  <button
                    className="remove-book-btn"
                    onClick={() => props.removeCollectionItem(book.id)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </li>
              );
            })}
      </ul> */}
    </div>
  );
}
