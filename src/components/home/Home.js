import React, { useEffect, useContext } from "react";
import FeatherImg from "../shared/FeatherImg";
import Header from "./Header";
import HomeQuotes from "./HomeQuotes";

import { LibraryContext } from "../LibraryContext";

export default function Home(props) {
  const {
    myCollection,
    setMyCollection,
    setReadBooks,
    setReadingBooks,
    setWantList,
    readBooks,
    readingBooks,
    wantList,
  } = useContext(LibraryContext);
  const MY_COLLECTION_KEY = "myCollection";
  const READ_BOOKS_KEY = "readBooks";
  const READING_BOOKS_KEY = "readingBooks";
  const WANT_LIST_KEY = "wishList";

  useEffect(() => {
    // -------------------------- ALL COLLECTION --------------------------
    const myCollectionJSON = localStorage.getItem(MY_COLLECTION_KEY);
    if (myCollectionJSON != null) setMyCollection(JSON.parse(myCollectionJSON));
    // -------------------------- READ COLLECTION --------------------------
    const myReadCollectionJSON = localStorage.getItem(READ_BOOKS_KEY);
    if (myReadCollectionJSON != null)
      setReadBooks(JSON.parse(myReadCollectionJSON));
    // -------------------------- READING COLLECTION --------------------------
    const myReadingCollectionJSON = localStorage.getItem(READING_BOOKS_KEY);
    if (myReadingCollectionJSON != null)
      setReadingBooks(JSON.parse(myReadingCollectionJSON));
    // -------------------------- WANT COLLECTION --------------------------
    const myWantCollectionJSON = localStorage.getItem(WANT_LIST_KEY);
    if (myWantCollectionJSON != null)
      setWantList(JSON.parse(myWantCollectionJSON));
  }, []);
  // -------------------------- ALL COLLECTION --------------------------
  useEffect(() => {
    localStorage.setItem(MY_COLLECTION_KEY, JSON.stringify(myCollection));
  }, [myCollection]);
  // -------------------------- READ COLLECTION --------------------------
  useEffect(() => {
    localStorage.setItem(READ_BOOKS_KEY, JSON.stringify(readBooks));
  }, [readBooks]);
  // -------------------------- READING COLLECTION --------------------------
  useEffect(() => {
    localStorage.setItem(READING_BOOKS_KEY, JSON.stringify(readingBooks));
  }, [readingBooks]);
  // -------------------------- WANT COLLECTION --------------------------
  useEffect(() => {
    localStorage.setItem(WANT_LIST_KEY, JSON.stringify(wantList));
  }, [wantList]);

  return (
    <div className="home-section">
      <Header />
      <HomeQuotes />
      <FeatherImg />
    </div>
  );
}
