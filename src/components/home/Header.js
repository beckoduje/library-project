import React from "react";
import Navigation from "../shared/Navigation";

export default function Header() {
  return (
    <header className="header">
      <Navigation hidden="hidden" />
      <h1 className="header-title">Browse the Library</h1>
    </header>
  );
}
