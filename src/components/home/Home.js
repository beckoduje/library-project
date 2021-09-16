import React from "react";
import FeatherImg from "../shared/FeatherImg";
import Header from "./Header";
import HomeQuotes from "./HomeQuotes";

export default function Home() {
  return (
    <div className="home-section">
      <Header />
      <HomeQuotes />
      <FeatherImg />
    </div>
  );
}
