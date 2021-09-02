import React, { useState, useEffect } from "react";
import MyCollectionList from "./MyCollectionList";
import MyCollectionNav from "./MyCollectionNav";

export default function MyCollectionListContainer(props) {
  const [showCollectionCategory, setShowCollectionCategory] = useState("all");

  return (
    <div className="results-container myCollection-container">
      <MyCollectionNav
        setShowCollectionCategory={setShowCollectionCategory}
        myCollection={props.myCollection}
        readBooks={props.readBooks}
        readingBooks={props.readingBooks}
        wantList={props.wantList}
      />
      {showCollectionCategory === "all" ? (
        <MyCollectionList
          data={props.myCollection}
          addNewCollectionItem={props.addNewCollectionItem}
          removeCollectionItem={props.removeCollectionItem}
        />
      ) : showCollectionCategory === "read" ? (
        <MyCollectionList
          data={props.readBooks}
          addNewCollectionItem={props.addNewCollectionItem}
          removeCollectionItem={props.removeCollectionItem}
        />
      ) : showCollectionCategory === "reading" ? (
        <MyCollectionList
          data={props.readingBooks}
          addNewCollectionItem={props.addNewCollectionItem}
          removeCollectionItem={props.removeCollectionItem}
        />
      ) : (
        <MyCollectionList
          data={props.wantList}
          addNewCollectionItem={props.addNewCollectionItem}
          removeCollectionItem={props.removeCollectionItem}
        />
      )}
    </div>
  );
}
