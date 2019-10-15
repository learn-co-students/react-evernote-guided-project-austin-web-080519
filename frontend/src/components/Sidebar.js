import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {

  handleNewButtonClick = (event) => {
    event.preventDefault();
    this.props.onNewNote();
  }

  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={this.props.notes} handleClick={this.props.handleClick}/>
        <button onClick={this.handleNewButtonClick}>New</button>
      </div>
    );
  }
}

export default Sidebar;
