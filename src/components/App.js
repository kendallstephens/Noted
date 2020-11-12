import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

const NotesURL = 'http://localhost:3000/api/v1/notes'

class App extends Component {
  
  state = {
    notes: [],
    selectedNote: null,
    editNote: false,
    filteredNotes: ''
  }

  componentDidMount() {
    fetch(NotesURL)
    .then(res => res.json())
    .then(notes => {
      this.setState({notes})
    })
   }

   handleClickForNoteContent = (note) => {
     this.setState({
        selectedNote: note,
        editNote: false
     })
   }

   createNote = () => {
     let notePlaceholder = {
       body: 'placeholder',
       title: 'default',
       user: {
         id: 1,
         name: 'kendallstephens'
       }
     }
     this.postNewNote(NotesURL, notePlaceholder)
     .then(newNote => this.setState({
       notes: [newNote, ...this.state.notes],
       selectedNote: newNote
     }))
   }

   postNewNote = (NotesURL, newNote) => {
    return fetch(NotesURL, {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
      body: JSON.stringify(newNote)
    }).then(res => res.json())
   
  }

  handleClickEdit = (note) => {
    this.setState({
      editNote: true
    })
  }

  handleCancelEdit = (note) => {
    this.setState({
      editNote: false
    })
  }

  handleEditSave = (e, selectedNote) => {
    e.preventDefault()
    return fetch(`http://localhost:3000/api/v1/notes/${selectedNote.id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(selectedNote)
    }).then(res => res.json())
    .then(note => {
      const updatedNotes = this.state.notes.map(n => n.id == note.id ? note: n)
      this.setState({notes: updatedNotes})
    })
    
  }

  handleSearch = (value) => {
    // let keyword = e.target.value;
    this.setState({filteredNotes: value})
  }

  filteredNotes = () => {
    return this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.filteredNotes.toLowerCase()))
  }

  handleRemoveNote = (note) => {
    // console.log(note)
    // e.stopPropagation()
    this.setState((prevState) =>({
      selectedNote: prevState.notes.filter((n) => n !== note),
      notes: prevState.notes.filter((n) => n !== note)

    }))
    this.deleteNote(note.id)

  }

  deleteNote = (note, editNote) => {
    console.log(note)
    fetch(`http://localhost:3000/api/v1/notes/${note}`, {
      method: 'DELETE'
    }).then(res => res.json())
    .then(res => console.log(res))
    this.setState({selectedNote: null})
  }

  render() {
    // console.log(this.state.notes)
    const {notes, selectedNote, editNote} = this.state
    const {handleClickForNoteContent, createNote, handleClickEdit, handleEditSave, handleCancelEdit, handleSearch, filteredNotes, handleRemoveNote} = this
    return (
      <div className="app">
        <Header />
        <NoteContainer 
        notes = {notes}
        selectedNote = {selectedNote}
        editNote = {editNote}
        handleClickForNoteContent = {handleClickForNoteContent}
        createNote = {createNote}
        handleClickEdit = {handleClickEdit}
        handleEditSave = {handleEditSave}
        handleCancelEdit = {handleCancelEdit}
        handleSearch = {handleSearch}
        filteredNotes = {filteredNotes()}
        handleRemoveNote = {handleRemoveNote}

  
        />
      </div>
    );
  }
}

export default App;
