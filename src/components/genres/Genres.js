import React from "react";
import GenresResultsList from "./GenresResultsList";
import Navigation from "../shared/Navigation";
import FeatherImg from "../shared/FeatherImg";

export default function Genres() {
  return (
    <div className="genres-section">
      <Navigation />
      <GenresResultsList />
      <FeatherImg />
    </div>
  );
}
