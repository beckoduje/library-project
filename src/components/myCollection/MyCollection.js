import React from "react";
import FeatherImg from "../shared/FeatherImg";
import Navigation from "../shared/Navigation";
import MyCollectionListContainer from "./MyCollectionListContainer";

export default function MyCollection() {
  return (
    <div className="myCollection-section">
      <Navigation />
      <MyCollectionListContainer />
      <FeatherImg />
    </div>
  );
}
