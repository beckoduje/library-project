import React from "react";
import Search from "../shared/Search";
import Header from "./Header";
import HomeBooksPictures from "./HomeBooksPictures";

export default function Home(props) {
  return (
    <div className="home-section">
      <Header
        setSearchedBooks={props.setSearchedBooks}
        setSelectedGenre={props.setSelectedGenre}
      />
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
