import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.notes.map ((note, index) => {
        return <NoteItem key={note.id} note={note} handleClick={props.handleClick} /> }
      )}
    </ul>
  );
}

export default NoteList;

