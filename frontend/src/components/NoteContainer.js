import React, { Component, Fragment } from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

class NoteContainer extends Component {
  state = {
    noteItems: [],
    currentSelection: 0,
    editStatus: false,
    searchInput: ""
  };

  componentDidMount() {
    this.fetchNotes();
  }

  fetchNotes = () => {
    fetch("http://localhost:3000/api/v1/notes")
      .then(response => response.json())
      .then(notes => {
        //console.log("All notes from API Backend", notes);
        const filteredNotes = notes.filter(note =>
          note.title.includes(this.state.searchInput)
        );
        console.log("filteredNotes: ", filteredNotes);

        this.setState({
          noteItems: filteredNotes
        });
      });
  };

  handleClick = noteID => {
    // this is from the Note Item onCLick selection
    // console.log("noteID here: ", noteID);
    fetch(`http://localhost:3000/api/v1/notes/${noteID}`)
      .then(response => response.json())
      .then(note => {
        this.setState({
          currentSelection: note
        });
      });
  };

  handleEdit = event => {
    console.log("handleEdit event = ", event);
    this.setState({
      editStatus: !this.state.editStatus
    });
  };

  handleSave = updatedNote => {
    //console.log("Updated Note for Patch = ", updatedNote);
    fetch(
      `http://localhost:3000/api/v1/notes/${this.state.currentSelection.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          title: updatedNote.title,
          body: updatedNote.body
        })
      }
    )
      .then(response => response.json())
      .then(response => {
        console.log("PATCH Response = ", response);
        this.fetchNotes();
      });
  };

  searchNow = input => {
    this.setState({
      searchInput: input
    });
    this.fetchNotes();
  };

  render() {
    return (
      <Fragment>
        <Search searchNow={this.searchNow} />
        <div className="container">
          <Sidebar
            handleClick={this.handleClick}
            noteItems={this.state.noteItems}
          />
          <Content
            editStatus={this.state.editStatus}
            handleEdit={this.handleEdit}
            handleSave={this.handleSave}
            currentSelection={this.state.currentSelection}
          />
          )}
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
