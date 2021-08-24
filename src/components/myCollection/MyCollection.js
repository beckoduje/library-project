import React from "react";
import Navigation from "../shared/Navigation";
import MyCollectionList from "./MyCollectionList";

export default function MyCollection(props) {
  return (
    <div className="myCollection-section">
      <Navigation
        getData={props.getData}
        getUserInput={props.getUserInput}
        userInput={props.userInput}
        inputOK={props.inputOK}
        results="results"
      />
      <MyCollectionList
        myCollection={props.myCollection}
        readBooks={props.readBooks}
        readingBooks={props.readingBooks}
        wantList={props.wantList}
        addNewCollectionItem={props.addNewCollectionItem}
      />
    </div>
  );
}
