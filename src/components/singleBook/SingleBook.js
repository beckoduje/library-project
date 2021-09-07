import React from "react";
import FeatherImg from "../shared/FeatherImg";
import Navigation from "../shared/Navigation";
import SingleBookCard from "./SingleBookCard";
import SingleBookDescription from "./SingleBookDescription";

export default function SingleBook(props) {
  return (
    <div className="single-book-section">
      <Navigation
        setSearchedBooks={props.setSearchedBooks}
        getUserInput={props.getUserInput}
        userInput={props.userInput}
        setSelectedGenre={props.setSelectedGenre}
      />
      <SingleBookCard searchedBooks={props.searchedBooks} />
      <SingleBookDescription searchedBooks={props.searchedBooks} />
      <FeatherImg />
    </div>
  );
}
