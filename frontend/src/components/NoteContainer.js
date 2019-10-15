import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

const notesURL = 'http://localhost:3000/api/v1/notes'

class NoteContainer extends Component {
  state = {
    notes: [],
    selectedNote: null,
    clickedStatus: false,
    searchInput: ""
  }

componentDidMount() {
  this.fetchNotes();
}

  fetchNotes = () => {
    fetch(notesURL)
    .then(resp => resp.json())
    .then(notesListResp => {
      const notesList = notesListResp.filter( note => note.title.includes(this.state.searchInput))
      this.setState({
        notes: notesList
      })
    })
  }

  onSearch = (search) => {
    this.setState({
      searchInput: search
    })
    this.fetchNotes();
  }

  saveNote = (noteData) => {
    let data = {
      title: noteData.title,
      body: noteData.body,
      user: {
        id: 1,
        name: "jason"
      }
    }

    let configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }

    fetch(`${notesURL}/${this.state.selectedNote.id}`, configObj)
    .then(resp => resp.json())
    .then(noteObj => {
      this.fetchNotes();
    })
  }

  handleClick = (note) => {
    this.setState({
      selectedNote: note,
      clickedStatus: false
    })
  }

  onCancel = () => {
    this.setState({
      clickedStatus: false
    })
  }

  handleEditClick = () => {
    this.setState({
      clickedStatus: true
    })
  }

  onNewNote = () => {
    let data = {
      title: "Title Placeholder",
      body: "Content Placeholder",
      user: {
        id: 1,
        name: "jason"
      }
    }

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    }

    fetch(notesURL, configObj)
    .then(resp => resp.json())
    .then(noteObj => {
      this.fetchNotes();
    })
  }


  render() {
    return (
      <Fragment>
        <Search onSearch={this.onSearch}/>
        <div className='container'>
          <Sidebar notes={this.state.notes} handleClick={this.handleClick} onNewNote={this.onNewNote}/>
          <Content note={this.state.selectedNote} clickedStatus={this.state.clickedStatus} saveNote={this.saveNote} onCancel={this.onCancel} handleEditClick={this.handleEditClick}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
