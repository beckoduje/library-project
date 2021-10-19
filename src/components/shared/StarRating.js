import React, { useState, useEffect } from "react";

export default function StarRating({ singleBook }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  let userRatings = [];

  const USER_RATING_KEY = "userRating";
  let ID;

  function addRatingToLS(index) {
    let tempRating = {
      id: ID,
      userRating: index,
    };
    let tempArray = userRatings.filter((book) => book.id !== ID);
    userRatings = tempArray;
    userRatings.push(tempRating);
    localStorage.setItem(USER_RATING_KEY, JSON.stringify(userRatings));
  }

  const userRatingsJSON = localStorage.getItem(USER_RATING_KEY);
  if (userRatingsJSON != null) {
    userRatings = JSON.parse(userRatingsJSON);
  }

  ID = !singleBook ? "1234" : singleBook.id;

  userRatings.forEach((book) => {
    if (book.id === ID && rating == 0) {
      setRating(book.userRating);
      return;
    }
  });

  useEffect(() => {
    if (!userRatings.some((book) => book.id === ID)) {
      setRating(0);
    }
  });

  return (
    <div className="star-rating-wrapper">
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
    </div>
  );
}
