import React from "react";

import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

export default function Loading() {
  // register lottie and define custom element
  defineLordIconElement(loadAnimation);
  return (
    <div className="loading-container">
      <lord-icon
        trigger="loop"
        src="/112-book-morph-outline-edited.json"
      ></lord-icon>
    </div>
  );
}
