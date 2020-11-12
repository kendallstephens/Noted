import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  const {notes, handleClickForNoteContent, filteredNotes} = props
  // console.log(notes)
  
  return (
    <ul>
      {props.filteredNotes.map((note) =>(
      <NoteItem 
      key = {note.id} 
      note = {note}
      handleClickForNoteContent = {handleClickForNoteContent}
      
      
      />
      ))}
    </ul>
  );
}

export default NoteList;
