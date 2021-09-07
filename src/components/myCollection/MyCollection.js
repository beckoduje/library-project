import React from "react";
import FeatherImg from "../shared/FeatherImg";
import Navigation from "../shared/Navigation";
import MyCollectionListContainer from "./MyCollectionListContainer";

export default function MyCollection(props) {
  return (
    <div className="myCollection-section">
      <Navigation
        setSearchedBooks={props.setSearchedBooks}
        getData={props.getData}
        getUserInput={props.getUserInput}
        userInput={props.userInput}
        setSelectedGenre={props.setSelectedGenre}
      />
      <MyCollectionListContainer
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
