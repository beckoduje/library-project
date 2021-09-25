import React, { useState, useEffect, useContext } from "react";

import { LibraryContext } from "../LibraryContext";

export default function StarRating() {
  const { singleBook } = useContext(LibraryContext);
  // const [userRatings, setUserRatings] = useState([]); --- opet bez stanja
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

  // useEffect(() => {
  //   const userRatingsJSON = localStorage.getItem(USER_RATING_KEY);
  //   if (userRatingsJSON != null) {
  //     userRatings.push(JSON.parse(userRatingsJSON));
  //   }
  // }, []);

  const userRatingsJSON = localStorage.getItem(USER_RATING_KEY);
  if (userRatingsJSON != null) {
    userRatings = JSON.parse(userRatingsJSON);
  }

  // useEffect(() => {
  //   if (userRatings.length > 0) {
  //     localStorage.setItem(USER_RATING_KEY, JSON.stringify(userRatings));
  //   }
  //   console.log(`Iz use Effekta di postavljam LS  ${userRatings}`);
  // }, [userRatings]);

  // if (userRatings.length > 0) { makao trenutno
  //   localStorage.setItem(USER_RATING_KEY, JSON.stringify(userRatings));
  // }

  // useEffect(() => {
  //   ID = !singleBook ? "1234" : singleBook.id;
  //   console.log("logiram id iz effekta di ga traim" + ID);
  // });
  ID = !singleBook ? "1234" : singleBook.id;

  // useEffect(() => {
  //   console.log(
  //     "use effekt userRatings di bi treba nać u arrayu ID" + userRatings
  //   );
  //   console.log("use effekt userRatings di bi treba nać u arrayu ID" + ID);
  //   console.log(
  //     "use effekt userRatings di bi treba nać u arrayu ID" + userRatings[0].id
  //   );
  //   if (userRatings.some((book) => book.id === ID)) {
  //     console.log("naddjeno");
  //   } else {
  //     console.log("nije nadeo");
  //   }
  // }, []);

  // if (userRatings.some((book) => book.id === ID) && rating == 0) {
  //   console.log("naddjeno");
  //   // setRating();
  //   console.log(rating);
  // } else {
  //   console.log("nije nadeo");
  // }

  userRatings.forEach((book) => {
    if (book.id === ID && rating == 0) {
      console.log(book.userRating);
      setRating(book.userRating);
      return;
    }
  });

  useEffect(() => {
    console.log(rating);
  }, []);

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
