import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  if (props.editedSelection) {
    return (
    <Fragment>
      <h2>{props.editedSelection.title}</h2>
      <p>{props.editedSelection.body}</p>
      <button onClick={props.handleEdit}>Edit</button>
    </Fragment> )}
    else {
      return (
        <Fragment>
          <h2>{props.currentSelection.title}</h2>
          <p>{props.currentSelection.body}</p>
          <button onClick={props.handleEdit}>Edit</button>
        </Fragment> )
    };
}
  
  


export default NoteViewer;
