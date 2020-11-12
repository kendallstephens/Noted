import React, { Component } from 'react';
// import ReactQuill from 'react-quill'
// import 'react-quill/dist/quill.snow.css';


class NoteEditor extends Component {

  state = {
    title: this.props.selectedNote.title,
    body: this.props.selectedNote.body, 
    id: this.props.selectedNote.id
  }

  
  

  handleEdit = (e) => {
    // const { target: {value, name} } = e
    this.setState({
      [e.target.name]: e.target.value

    })
  }
  render() {
    const {handleEditSave, handleCancelEdit} = this.props
    return (
      <form className="note-editor" >
        <input type="text" name="title" value = {this.state.title} onChange = {this.handleEdit}/>
        <textarea name="body" value = {this.state.body} onChange = {this.handleEdit}/>
        <div className="button-row">
          <input onClick = {(e) =>  handleEditSave(e, this.state)}className="button" type="submit" value="Save" />
          <button onClick = {() => handleCancelEdit(this.state)}type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
