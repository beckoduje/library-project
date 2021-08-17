import React from "react";
import Search from "../shared/Search";
import Header from "./Header";
import HomeBooksPictures from "./HomeBooksPictures";

export default function Home(props) {
  return (
    <div className="home-section">
      <Header />
      <Search setSearchedBooks={props.setSearchedBooks} />
      <HomeBooksPictures />
    </div>
  );
}
