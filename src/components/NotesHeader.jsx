import React from 'react';
import { useDispatch } from 'react-redux';

export default function NotesHeader() {
  const dispatch = useDispatch()
  
  function handleSearch(title){
    if(title.length == 0) {
      setNotes(realTimeNotes);
   } 
    setNotes((notes) => notes.filter((note) => note.title.toLowerCase().includes(title.toLowerCase())));
  }
  return (
    <div className="note-app__header" >
      <h1>Notes</h1>
      <input type="text" placeholder="Search Note " onChange={(e) => dispatch(search(e.target.value))} />
    </div>
  )
}
