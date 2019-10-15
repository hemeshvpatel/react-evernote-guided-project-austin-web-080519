import React, { Component } from "react";
import NoteList from "./NoteList";

class Sidebar extends Component {
  render() {
    // Check for noteItems in state
    //console.log("Current State = ", this.state.noteItems);
    return (
      <div className="master-detail-element sidebar">
        {this.props.noteItems.length > 0 && (
          <NoteList
            handleClick={this.props.handleClick}
            noteItems={this.props.noteItems}
          />
        )}
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;
