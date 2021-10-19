import React from "react";

export default function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-subcon">
        <lord-icon
          className="loading-icon"
          src="https://cdn.lordicon.com/wxnxiano.json"
          trigger="loop"
          colors="primary:#ffffff,secondary:#ffffff"
          style={{ width: "100%", height: "100%" }}
        ></lord-icon>
      </div>
    </div>
  );
}
