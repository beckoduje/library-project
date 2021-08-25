import React from "react";
import GenresResultsList from "./GenresResultsList";
import Navigation from "../shared/Navigation";

export default function Genres(props) {
  return (
    <div className="genres-section">
      <Navigation
        setSearchedBooks={props.setSearchedBooks}
        getData={props.getData}
        getUserInput={props.getUserInput}
        userInput={props.userInput}
        inputOK={props.inputOK}
        results="results"
      />
      <GenresResultsList
        searchedBooks={props.searchedBooks}
        setMyCollection={props.setMyCollection}
        setReadBooks={props.setReadBooks}
        setReadingBooks={props.setReadingBooks}
        setWantList={props.setWantList}
        addNewCollectionItem={props.addNewCollectionItem}
      />
    </div>
  );
}
