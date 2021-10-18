import React from "react";

import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

// register lottie and define custom element
defineLordIconElement(loadAnimation);

export default function Loading() {
  return (
    <div className="loading-container">
      <lord-icon
        className="loading-icon"
        trigger="loop"
        src="/my-icon.json"
      ></lord-icon>
    </div>
  );
}
