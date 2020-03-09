import React, { Component } from 'react';

class NoteEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.note.title,
      body: this.props.note.body
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  handleCancel = event => {
    this.props.onCancel();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="note-editor">
        <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
        <textarea name="body" onChange={this.handleChange} value={this.state.body}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={this.handleCancel}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
