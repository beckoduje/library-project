import React, { useState, useContext } from "react";
import MyCollectionList from "./MyCollectionList";
import MyCollectionNav from "./MyCollectionNav";

import { LibraryContext } from "../LibraryContext";

export default function MyCollectionListContainer() {
  const [showCollectionCategory, setShowCollectionCategory] = useState("all");

  const { myCollection, readBooks, readingBooks, wantList } =
    useContext(LibraryContext);

  return (
    <div className="results-container myCollection-container">
      <MyCollectionNav
        showCollectionCategory={showCollectionCategory}
        setShowCollectionCategory={setShowCollectionCategory}
      />
      {showCollectionCategory === "all" ? (
        <MyCollectionList data={myCollection} />
      ) : showCollectionCategory === "read" ? (
        <MyCollectionList data={readBooks} />
      ) : showCollectionCategory === "reading" ? (
        <MyCollectionList data={readingBooks} />
      ) : (
        <MyCollectionList data={wantList} />
      )}
    </div>
  );
}
