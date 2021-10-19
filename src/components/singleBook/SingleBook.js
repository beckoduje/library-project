import React, { useState, useEffect, useContext } from "react";
import FeatherImg from "../shared/FeatherImg";
import Navigation from "../shared/Navigation";
import StarRating from "../shared/StarRating";
import SingleBookCard from "./SingleBookCard";
import SingleBookDescription from "./SingleBookDescription";
import Loading from "../shared/Loading";

import { useParams } from "react-router-dom";

import { LibraryContext } from "../LibraryContext";

export default function SingleBook() {
  const { loading, setLoading } = useContext(LibraryContext);
  let { id } = useParams();
  const [singleBook, setSingleBook] = useState();

  function getSingleBook(id) {
    setLoading(true);
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(function (response) {
        setLoading(false);
        return response.json();
      })
      .then(function (data) {
        setSingleBook(data);
      });
  }

  useEffect(() => {
    getSingleBook(id);
  }, []);

  return (
    <div className="single-book-section">
      <Navigation />
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          <SingleBookCard singleBook={singleBook} />
          <StarRating singleBook={singleBook} />
          <SingleBookDescription singleBook={singleBook} />{" "}
        </>
      )}
      <FeatherImg />
    </div>
  );
}
