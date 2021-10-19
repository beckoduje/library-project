import React from "react";

import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

import book from "../../images/bookAnima.gif";

export default function Loading() {
  // register lottie and define custom element
  defineLordIconElement(loadAnimation);
  return (
    <div className="loading-container">
      {/* <lord-icon
        trigger="hover"
        src="/522-fish-outline.json"
      ></lord-icon> */}
      <img src={book} />
    </div>
  );
}
