import React, { useState, useEffect, useContext } from "react";

import { LibraryContext } from "../LibraryContext";

export default function StarRating() {
  const { singleBook } = useContext(LibraryContext);
  const [userRatings, setUserRatings] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  /*
    console.log(`ID varijabla: ${ID}`);
    console.log(`Ternary vrijednost: ${!singleBook ? "1234" : singleBook.id}`);
  */

  const USER_RATING_KEY = "userRating";
  let ID;

  function addRatingToLS(index) {
    let tempRating = {
      id: ID,
      userRating: index,
    };
    // setUserRatings([...userRatings].filter((book) => book.id !== ID));
    [...userRatings].forEach((book) => console.log(book.id));
    console.log(`Iz dodavanja funckije ${[...userRatings]}`);
    setUserRatings([...userRatings, tempRating]);
    console.log(userRatings);
  }

  useEffect(() => {
    const userRatingsJSON = localStorage.getItem(USER_RATING_KEY);
    if (userRatingsJSON != null) {
      setUserRatings(JSON.parse(userRatingsJSON));
    }
  }, []);

  useEffect(() => {
    if (userRatings.length > 0) {
      localStorage.setItem(USER_RATING_KEY, JSON.stringify(userRatings));
    }
    console.log(`Iz use Effekta ${userRatings}`);
  }, [userRatings]);

  useEffect(() => {
    ID = !singleBook ? "1234" : singleBook.id;
  });

  return (
    <div className="star-rating">
      <p className="star-rating-text">Leave your rating:</p>
      <div className="stars-wrapper">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={
                index <= (hover || rating) ? "star-btn on" : "star-btn off"
              }
              onClick={() => {
                setRating(index);
                addRatingToLS(index);
              }}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <i className="star fas fa-star start-rating empty" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
