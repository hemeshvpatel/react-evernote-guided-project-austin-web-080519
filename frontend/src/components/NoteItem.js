import React from "react";
import Truncate from "react-truncate";

const NoteItem = props => {
  //console.log("NoteItem props = ", props)
  return (
    <li onClick={() => props.handleClick(props.note.id)}>
      <h2>{props.note.title}</h2>

      {/* Consider using substring when refactoring */}
      <Truncate lines={1}>{props.note.body}</Truncate>
    </li>
  );
};

export default NoteItem;
