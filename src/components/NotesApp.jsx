import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { getInitialData, showFormattedDate } from '../utils/index.js';
import NotesHeader from './NotesHeader';
import NotesInput from './NotesInput';
import NotesBody from './NotesBody';


export default function NotesApp() {
  const [notes, setNotes] = useState(getInitialData);
  const [realTimeNotes, setRealTimeNotes] = useState(notes);
  
  function handleSearch(title){
    if(title.length == 0) {
      setNotes(realTimeNotes);
   } 
    setNotes((notes) => notes.filter((note) => note.title.toLowerCase().includes(title.toLowerCase())));
  }
  function handleAddNote(note) {
    setNotes([...notes, note]);
    setRealTimeNotes([...realTimeNotes, note]);
  }
  function handleDelete(id) {
    setNotes((notes) => notes.filter((note) => note.id !== id));
    setRealTimeNotes((notes) => notes.filter((note) => note.id !== id));
  }
  function handleArchive(id) {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    setNotes(updatedNotes);
    setRealTimeNotes(updatedNotes);
  }
  
  
  return (
    <>
      <NotesHeader onSearch={handleSearch} />
      <NotesInput onAddNote={handleAddNote} />
      <NotesBody notes={notes} onDelete={handleDelete} onArchive={handleArchive} />
    </>
  )
}





