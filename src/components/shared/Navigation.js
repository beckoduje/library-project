import React from "react";
import Search from "./Search";
// import ThemeToggle from "../home/ThemeToggle";

import { Link } from "react-router-dom";
import GenresList from "./GenresList";

export default function Navigation(props) {
  return (
    <nav className="navigation">
      {/* <ThemeToggle /> */}
      <div className="logo">
        {/* <i className="fas fa-book"></i> */}
        <i className="fas fa-book-open logo-image"></i>
        <span className="logo-name">library</span>
      </div>
      <Search
        hidden={props.hidden}
        getData={props.getData}
        getUserInput={props.getUserInput}
        userInput={props.userInput}
        inputOK={props.inputOK}
      />
      <ul className="navigation-links">
        <li className="navigation-link">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation-link">
          <a href="#">
            Genres
            <i className="fas fa-caret-down menu-open"></i>
          </a>
          <GenresList
            setSearchedBooks={props.setSearchedBooks}
            setSelectedGenre={props.setSelectedGenre}
          />
        </li>
        <li className="navigation-link">
          <Link to="/collection">My Collection</Link>
        </li>
      </ul>
    </nav>
  );
}

// Maknuto iz Search: setSearchedBooks={props.setSearchedBooks}
