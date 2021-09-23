import React, { useState, useEffect, useContext } from "react";

import { LibraryContext } from "../LibraryContext";

export default function StarRating() {
  const { singleBook } = useContext(LibraryContext);
  // const [userRatings, setUserRatings] = useState([]); --- opet bez stanja
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  let userRatings = [];

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
    // setUserRatings([...userRatings, tempRating]); ----------------- opet bez stanja -----------------
    // setUserRatings(userRatings.add(tempRating));
    // console.log(userRatings); ----------------- opet bez stanja -----------------
    userRatings.filter((book) => book.id !== ID);
    userRatings.push(tempRating);
    localStorage.setItem(USER_RATING_KEY, JSON.stringify(userRatings));
  }

  // useEffect(() => { // ----------------- opet bez stanja -----------------
  //   const userRatingsJSON = localStorage.getItem(USER_RATING_KEY);
  //   if (userRatingsJSON != null) {
  //     setUserRatings(JSON.parse(userRatingsJSON));
  //     console.log(`Iz GET use Effekta ${userRatings}`);
  //   }
  // }, []);

  useEffect(() => {
    const userRatingsJSON = localStorage.getItem(USER_RATING_KEY);
    if (userRatingsJSON != null) {
      userRatings.push(JSON.parse(userRatingsJSON));
    }
  }, []);

  // const userRatingsJSON = localStorage.getItem(USER_RATING_KEY); ----- s ovim se normalno array loguje ali onda imam one nestane arraya kad dodajem (i kad je ovaj gornji iskomentiran)
  // if (userRatingsJSON != null) {
  //   userRatings.push(JSON.parse(userRatingsJSON));
  //   console.log(userRatings);
  // }

  useEffect(() => {
    if (userRatings.length > 0) {
      localStorage.setItem(USER_RATING_KEY, JSON.stringify(userRatings));
    }
    console.log(`Iz use Effekta ${userRatings}`);
  }, [userRatings]);

  useEffect(() => {
    ID = !singleBook ? "1234" : singleBook.id;
  });

  // useEffect(() => {
  //   console.log(`User rating iz zadnjeg UseEffecta: ${userRatings}`);
  //   if (userRatings.some((book) => book.id === ID)) {
  //     console.log("naddjeno");
  //   } else {
  //     console.log("nije nadeo");
  //   }
  // }, []);

  useEffect(() => {
    console.log(`User rating iz zadnjeg UseEffecta: ${userRatings}`);
    if (userRatings.some((book) => book.id === ID)) {
      console.log("naddjeno");
    } else {
      console.log("nije nadeo");
    }
  }, []);

  /*E ne ide ti onda push
Nego
userRatings= userRatingsJSON
Jer ti ovako pokusavas array da pushujes u array*/

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
