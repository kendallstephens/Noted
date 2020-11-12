import React from 'react';

const NoteItem = ({note, handleClickForNoteContent}) => (
  
   
  <li onClick={() => handleClickForNoteContent(note)}>
    <h2>{note.title} </h2>
    <p>{note.body.slice(0, 20) + ('...')}</p>
  </li>
);

export default NoteItem;
