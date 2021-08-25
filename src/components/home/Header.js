import React from "react";
import Navigation from "../shared/Navigation";

export default function Header(props) {
  return (
    <header className="header">
      <Navigation setSearchedBooks={props.setSearchedBooks} hidden="hidden" />
      <h1 className="header-title">Browse the Library</h1>
    </header>
  );
}
