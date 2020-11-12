import React, { Fragment } from 'react';

const NoteViewer = ({selectedNote, handleClickEdit, handleRemoveNote}) => {

  console.log(selectedNote)
  
  return (
    <Fragment>
      <h2>{selectedNote.title}</h2>
      <p>{selectedNote.body}</p>
      <button onClick = {() => handleClickEdit(selectedNote)}>Edit</button>
      <button onClick = {() =>  handleRemoveNote(selectedNote)}>Remove</button>
     
    </Fragment>
  );
  
}

export default NoteViewer;
