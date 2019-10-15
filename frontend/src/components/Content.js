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
  renderContent = (props) => {
    if (this.props.editStatus === true) {
      return <NoteEditor currentSelection={this.props.currentSelection} handleSave={this.props.handleSave} editedSelection={this.props.editedSelection}/>;
    } else if (this.props.editedSelection) {
      return <NoteViewer currentSelection={this.props.currentSelection} handleEdit={this.props.handleEdit} editedSelection={this.props.editedSelection}/>;
    } else if (this.props.currentSelection !== 0) {
      return <NoteViewer currentSelection={this.props.currentSelection} handleEdit={this.props.handleEdit} editedSelection={this.props.editedSelection}/>;
    } else {
      return <Instructions />;
    }
  }



  render() {
    console.log(this.props)
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
