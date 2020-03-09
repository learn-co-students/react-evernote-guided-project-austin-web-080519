import React from 'react';

const NoteItem = (props) => (
  <li onClick={ event => props.handleClick(props.note)}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.substring(0, 50)}</p>
  </li>
);

export default NoteItem;
