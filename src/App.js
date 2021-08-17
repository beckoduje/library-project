import React, { useState } from "react";

import "./css/style.css";

import Home from "./components/home/Home";
import Results from "./components/results/Results";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [searchedBooks, setSearchedBooks] = useState();

  console.log(searchedBooks);

  return (
    <Router>
      <Switch>
        <Route path="/results">
          <Results
            searchedBooks={searchedBooks}
            setSearchedBooks={setSearchedBooks}
          />
        </Route>
        <Route path="/">
          <Home setSearchedBooks={setSearchedBooks} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
