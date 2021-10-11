import React, { useState, useEffect } from "react";
import FeatherImg from "../shared/FeatherImg";
import Navigation from "../shared/Navigation";
import StarRating from "../shared/StarRating";
import SingleBookCard from "./SingleBookCard";
import SingleBookDescription from "./SingleBookDescription";

import { useParams } from "react-router-dom";

export default function SingleBook() {
  let { id } = useParams();
  const [singleBook, setSingleBook] = useState();
  const osisanID = id;

  function getSingleBook(id) {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setSingleBook(data);
      });
  }

  useEffect(() => {
    getSingleBook(osisanID);
  }, []);

  return (
    <div className="single-book-section">
      <Navigation />
      <SingleBookCard singleBook={singleBook} />
      <StarRating singleBook={singleBook} />
      <SingleBookDescription singleBook={singleBook} />
      <FeatherImg />
    </div>
  );
}
