import React, { useContext, useEffect } from "react";
import GenresResultsList from "./GenresResultsList";
import Navigation from "../shared/Navigation";
import FeatherImg from "../shared/FeatherImg";
import Loading from "../shared/Loading";

import { useParams } from "react-router-dom";

import { LibraryContext } from "../LibraryContext";

export default function Genres() {
  const { setSearchedBooks, loading, setLoading } = useContext(LibraryContext);

  let { genre } = useParams();

  function getGenresData(genre) {
    setLoading(true);
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${genre}+subject:${genre}&startIndex=10&maxResults=10&printType=books`
    )
      .then(function (response) {
        setLoading(false);
        return response.json();
      })
      .then(function (data) {
        setSearchedBooks(data);
      });
  }

  useEffect(() => {
    getGenresData(genre);
  }, [genre]);

  return (
    <div className="genres-section">
      <Navigation />
      {loading ? <Loading /> : <GenresResultsList genre={genre} />}
      <FeatherImg />
    </div>
  );
}
