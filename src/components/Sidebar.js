import React from 'react';
import NoteList from './NoteList';

const Sidebar = (props) => {
  // console.log(props)

  const {notes, handleClickForNoteContent, createNote, filteredNotes} = props
  
    return (
      
      <div className='master-detail-element sidebar'>
        <button onClick = {(e) => createNote(e)}>Add a note...</button>
        <NoteList 
        notes = {notes}
        handleClickForNoteContent = {handleClickForNoteContent}
        filteredNotes = {filteredNotes}
        />
      </div>
    );
  }


export default Sidebar;
