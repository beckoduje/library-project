import React from "react";
import FeatherImg from "../shared/FeatherImg";
import Navigation from "../shared/Navigation";
import MyCollectionList from "./MyCollectionList";

export default function MyCollection(props) {
  return (
    <div className="myCollection-section">
      <Navigation
        setSearchedBooks={props.setSearchedBooks}
        getData={props.getData}
        getUserInput={props.getUserInput}
        userInput={props.userInput}
        inputOK={props.inputOK}
        results="results"
        setSelectedGenre={props.setSelectedGenre}
      />
      <MyCollectionList
        myCollection={props.myCollection}
        readBooks={props.readBooks}
        readingBooks={props.readingBooks}
        wantList={props.wantList}
        addNewCollectionItem={props.addNewCollectionItem}
        removeCollectionItem={props.removeCollectionItem}
      />
      <FeatherImg />
    </div>
  );
}
