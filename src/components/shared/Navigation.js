import React from "react";
import Search from "./Search";
// import ThemeToggle from "../home/ThemeToggle";

import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <nav className="navigation">
      {/* <ThemeToggle /> */}
      <div className="logo">Library Logo</div>
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
          <a href="#">Categories</a>
        </li>
        <li className="navigation-link">
          <a href="#">My Collection</a>
        </li>
      </ul>
    </nav>
  );
}

// Maknuto iz Search: setSearchedBooks={props.setSearchedBooks}
