import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LibraryProvider } from "./components/LibraryContext";

import "./css/style.css";

import Home from "./components/home/Home";
import Results from "./components/results/Results";
import MyCollection from "./components/myCollection/MyCollection";
import Genres from "./components/genres/Genres";
import SingleBook from "./components/singleBook/SingleBook";

function App() {
  return (
    <LibraryProvider>
      <Router>
        <Switch>
          <Route path="/book">
            <SingleBook />
          </Route>
          <Route path="/collection">
            <MyCollection />
          </Route>
          <Route path="/genres">
            <Genres />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </LibraryProvider>
  );
}

export default App;
