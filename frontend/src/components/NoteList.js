import React from "react";
import NoteItem from "./NoteItem";

const NoteList = props => {
  //console.log("NoteList props = ", props);
  return (
    <ul>
      {props.noteItems.map(note => (
        <NoteItem key={note.id} note={note} handleClick={props.handleClick} />
      ))}
    </ul>
  );
};

export default NoteList;
