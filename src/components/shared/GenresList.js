import React from "react";

import { Link } from "react-router-dom";

export default function GenresList() {
  return (
    <ul className="genres-list">
      <li className="single-genre">
        <Link to="/genres">Science</Link>
      </li>
      <li className="single-genre">
        <Link to="/genres">Psychology</Link>
      </li>
      <li className="single-genre">
        <Link to="/genres">Philosophy</Link>
      </li>
      <li className="single-genre">
        <Link to="/genres">Religion</Link>
      </li>
      <li className="single-genre">
        <Link to="/genres">Art</Link>
      </li>
      <li className="single-genre">
        <Link to="/genres">Astronomy</Link>
      </li>
      <li className="single-genre">
        <Link to="/genres">Physics</Link>
      </li>
      <li className="single-genre">
        <Link to="/genres">Chemistry</Link>
      </li>
      <li className="single-genre">
        <Link to="/genres">Fiction</Link>
      </li>
    </ul>
  );
}
