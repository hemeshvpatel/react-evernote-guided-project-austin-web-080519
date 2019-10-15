import React, { Fragment } from "react";

const NoteViewer = props => {
  // console.log("props >", props.currentSelection);
  return (
    <Fragment>
      <h2>{props.currentSelection.title}</h2>
      <p>{props.currentSelection.body}</p>
      <button onClick={props.handleEdit}>Edit</button>
    </Fragment>
  );
};

export default NoteViewer;
