import React from "react";
import Navigation from "../shared/Navigation";

export default function Header(props) {
  return (
    <header className="header">
      <Navigation
        setSearchedBooks={props.setSearchedBooks}
        setSelectedGenre={props.setSelectedGenre}
        getData={props.getData}
        getUserInput={props.getUserInput}
        userInput={props.userInput}
        // inputOK={props.inputOK}
      />
    </header>
  );
}
