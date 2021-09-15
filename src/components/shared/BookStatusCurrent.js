import React, { useState, useEffect, useContext } from "react";

import { LibraryContext } from "../LibraryContext";

export default function BookStatusCurrent(props) {
  const [value, setValue] = useState();
  const { readBooks, readingBooks } = useContext(LibraryContext);
  const statusVal = () => {
    return readBooks.some((e) => e.id === props.id)
      ? "read"
      : readingBooks.some((e) => e.id === props.id)
      ? "reading"
      : "want";
  };
  function handleChange(event) {
    setValue(event.target.value);
  }
  useEffect(() => {
    setValue(statusVal);
  }, []);
  return (
    <div className="book-current-status">
      <select
        className="book-status-list"
        value={value}
        onChange={handleChange}
        // value={
        //   props.readBooks.some((e) => e.id === props.id)
        //     ? "read"
        //     : props.readingBooks.some((e) => e.id === props.id)
        //     ? "reading"
        //     : "want"
        // }
        // onChange={(e) => (value = e.target.value)}
      >
        {/* {props.readBooks.some((e) => e.id === props.id) ? (
          <option value="read" selected="selected">
            Read
          </option>
        ) : (
          <option value="read">Read</option>
        )}
        {props.readingBooks.some((e) => e.id === props.id) ? (
          <option value="reading" selected="selected">
            Reading
          </option>
        ) : (
          <option value="reading">Reading</option>
        )}
        {props.wantList.some((e) => e.id === props.id) ? (
          <option value="want" selected="selected">
            Want to read
          </option>
        ) : (
          <option value="want">Want to read</option>
        )} */}
        <option value="read">Read</option>
        <option value="reading">Reading</option>
        <option value="want">Want to read</option>
      </select>
    </div>
  );
}
