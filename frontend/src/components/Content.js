import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {

  renderContent = () => {
    if (this.props.clickedStatus) {
      return <NoteEditor note={this.props.note} onSubmit={this.onSubmit} onCancel={this.props.onCancel}/>;
    } else if (this.props.note !== null) {
      return <NoteViewer note={this.props.note} handleEditClick={this.props.handleEditClick}/>;
    } else {
      return <Instructions />;
    }
  }

  onSubmit = (noteData) => {
    this.props.saveNote(noteData)
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
