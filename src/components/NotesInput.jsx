import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { getInitialData, showFormattedDate } from '../utils/index.js';

export default function NotesInput({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [charLimit, setCharLimit] = useState(50);
  
  function handleTitleChange(e) {
    if(e.target.value.length <= 50) {
      setTitle(e.target.value);
      setCharLimit(50 - e.target.value.length)
    } else {
      return
    }
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    
    if(title.length == 0)  return ;
    
    const newNote = {
      id: +new Date(), 
      title, 
      content, 
      createdAt: new Date(), 
      archived: false
    }
    onAddNote(newNote);
    
    setTitle('');
    setContent('');
  }
  
  return (
    <div className="note-input">
      <h2 className="note-input__title">Create Note</h2>
      <h2 className="note-input__title__char-limit">Remaining Character: {charLimit}</h2>
      <form className="note-input__body" onSubmit={handleSubmit} >
        <input type="text" placeholder="Note Title" value={title} onChange={handleTitleChange} />
        <textarea placeholder="Write your note here" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
}