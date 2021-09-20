import React, { useState, useEffect, useContext } from "react";

import { LibraryContext } from "../LibraryContext";

export default function StarRating() {
  const { singleBook } = useContext(LibraryContext);
  const [userRatings, setUserRatings] = useState();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const ID = !singleBook ? "1234" : singleBook.id;

  let userRatingsHelper = new Set();

  console.log(`${userRatings} + Stanje jebeno`);
  console.log(`${userRatingsHelper} + helper set`);

  const USER_RATING_KEY = "userRating";

  useEffect(() => {
    // -------------------------- ALL COLLECTION --------------------------
    const userRatingJSON = localStorage.getItem(USER_RATING_KEY);
    // if (userRatingJSON != null) setUserRatings(JSON.parse(userRatingJSON));
    if (userRatingJSON != null) {
      setUserRatings(JSON.parse(userRatingJSON));
      userRatingsHelper.add(userRatings);
    }
  }, []);
  // -------------------------- ALL COLLECTION --------------------------
  useEffect(() => {
    localStorage.setItem(USER_RATING_KEY, JSON.stringify(userRatings));
  }, [userRatings]);

  function addRatingToLS(index) {
    setRating(index);
    let tempRating = {
      id: ID,
      userRating: index,
    };
    userRatingsHelper.add(tempRating);
    setUserRatings(...userRatingsHelper);
  }

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
                // index <= (hover || userRatings.singleBook.id)
                //   ? "star-btn on"
                //   : "star-btn off"
              }
              onClick={() => addRatingToLS(index)}
              // onClick={() =>
              //   setUserRatings([
              //     ...userRatings,
              //     { id: singleBook.id, userRating: index },
              //   ])
              // }
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
