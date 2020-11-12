import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  const {handleClickForNoteContent, filteredNotes} = props
  // console.log(notes)
  
  return (
    <ul>
      {filteredNotes.map((note) =>(
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
