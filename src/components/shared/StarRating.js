import React, { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
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
              onClick={() => setRating(index)}
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

// Array.from({ length: 5 }, (v, i) => (
//   <i
//     key={`star_${i + 1}`}
//     className={
//       i < book.volumeInfo.averageRating
//         ? "fas fa-star start-rating full"
//         : "fas fa-star start-rating empty"
//     }
//   />
// )
