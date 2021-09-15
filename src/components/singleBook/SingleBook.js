import React from "react";
import FeatherImg from "../shared/FeatherImg";
import Navigation from "../shared/Navigation";
import SingleBookCard from "./SingleBookCard";
import SingleBookDescription from "./SingleBookDescription";

export default function SingleBook() {
  return (
    <div className="single-book-section">
      <Navigation />
      <SingleBookCard />
      <SingleBookDescription />
      <FeatherImg />
    </div>
  );
}
