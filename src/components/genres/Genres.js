import React, { useState } from "react";
import GenresResultsList from "./GenresResultsList";
import Navigation from "../shared/Navigation";

export default function Genres(props) {
  const [selectedGenre, setSelectedGenre] = useState();

  return (
    <div className="genres-section">
      <Navigation
        setSearchedBooks={props.setSearchedBooks}
        getData={props.getData}
        getUserInput={props.getUserInput}
        userInput={props.userInput}
        inputOK={props.inputOK}
        setSelectedGenre={setSelectedGenre}
        results="results"
      />
      <GenresResultsList
        selectedGenre={selectedGenre}
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
