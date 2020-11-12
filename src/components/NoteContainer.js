import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  
  render() {
    const {notes, selectedNote, handleClickForNoteContent, createNote, handleClickEdit, editNote,  handleEditSave,  handleCancelEdit, handleSearch, filteredNotes, handleRemoveNote} = this.props
    console.log(selectedNote)
    
    return (
      <Fragment>
        <Search 
        handleSearch = {handleSearch}
       
        />
        <div className='container'>
          <Sidebar 
          notes = {notes}
          handleClickForNoteContent = {handleClickForNoteContent}
          createNote = {createNote}
          filteredNotes = {filteredNotes}
          
           />
          <Content 
          selectedNote = {selectedNote}
          handleClickEdit = {handleClickEdit}
          editNote = {editNote}
          handleEditSave = {handleEditSave}
          handleCancelEdit = {handleCancelEdit}
          handleRemoveNote = {handleRemoveNote}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
