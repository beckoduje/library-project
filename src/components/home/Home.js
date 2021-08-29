import React from "react";
import Search from "../shared/Search";
import Header from "./Header";
import HomeBooksPictures from "./HomeBooksPictures";
import HomeQuotes from "./HomeQuotes";

export default function Home(props) {
  return (
    <div className="home-section">
      <Header
        setSearchedBooks={props.setSearchedBooks}
        setSelectedGenre={props.setSelectedGenre}
      />
      <HomeQuotes />
      <h3 className="header-title">Browse our library:</h3>
      <Search
        getData={props.getData}
        getUserInput={props.getUserInput}
        userInput={props.userInput}
        inputOK={props.inputOK}
        // setStoredUserInput={props.setStoredUserInput}
      />
      <HomeBooksPictures />
    </div>
  );
}

// maka iz Search: setSearchedBooks={props.setSearchedBooks}
