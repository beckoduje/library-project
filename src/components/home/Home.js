import React from "react";
import FeatherImg from "../shared/FeatherImg";
import Header from "./Header";
import HomeQuotes from "./HomeQuotes";

export default function Home(props) {
  return (
    <div className="home-section">
      <Header
        setSearchedBooks={props.setSearchedBooks}
        setSelectedGenre={props.setSelectedGenre}
        getData={props.getData}
        getUserInput={props.getUserInput}
        userInput={props.userInput}
        // inputOK={props.inputOK}
      />
      <HomeQuotes />
      <FeatherImg />
    </div>
  );
}
