import React, { Component } from 'react';

class NoteEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.currentSelection.title,
      body: this.props.currentSelection.body
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSave(this.state)
  }

  render() {
    return (
      <form className="note-editor" onSubmit={this.handleSubmit}>
        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
        <textarea name="body" value={this.state.body} onChange={this.handleChange}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
