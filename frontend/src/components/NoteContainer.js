import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  constructor() {
    super() 

    this.state = {
      notes: [],
      currentSelection: 0,
      editStatus: false,
      editedSelection: 0
    }
  }

handleClick = (noteID) => {
  fetch(`http://localhost:3000/api/v1/notes/${noteID}`)
  .then(resp => resp.json())
  .then(note => {
    this.setState({ currentSelection: note})
  })
  
}

handleEdit = () => {
  this.setState({ editStatus: true }) 
}

handleSave = (updatedNote) => {
  fetch(`http://localhost:3000/api/v1/notes/${this.state.currentSelection.id}`, {
    method: 'PATCH', 
    headers: {
      "Content-Type": 'application/json',
      Accept: "application/json"
    }, 
    body: JSON.stringify({
      title: updatedNote.title,
      body: updatedNote.body
    })
  })
  .then(resp => resp.json())
  .then(resp => {
    fetch(`http://localhost:3000/api/v1/notes/${resp.id}`)
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp)
      this.setState({ editedSelection: resp })
    })
    .then(
      <Content notes={this.state.notes} 
          handleSave={this.handleSave}
          editedSelection={this.state.editedSelection}
          currentSelection={this.state.currentSelection} 
          handleClick={this.handleClick} 
          handleEdit={this.handleEdit} 
          editStatus={this.state.editStatus}/>
    )
  })
}

componentDidMount() {
  this.fetchNotes()
  }


fetchNotes = () => {
  fetch('http://localhost:3000/api/v1/notes')
  .then(resp => resp.json())
  .then(notes => {
    this.setState({ notes: notes })
  })
}
  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar notes={this.state.notes} 
          handleClick={this.handleClick}/>
          <Content notes={this.state.notes} 
          handleSave={this.handleSave}
          currentSelection={this.state.currentSelection} 
          handleClick={this.handleClick} 
          handleEdit={this.handleEdit} 
          editStatus={this.state.editStatus}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
