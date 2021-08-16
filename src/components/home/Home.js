import React from "react";
import Search from "../shared/Search";
import Header from "./Header";
import HomeBooksPictures from "./HomeBooksPictures";

export default function Home() {
  return (
    <div className="home-section">
      <Header />
      <Search />
      <HomeBooksPictures />
    </div>
  );
}
