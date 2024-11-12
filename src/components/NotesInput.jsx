import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { getInitialData, showFormattedDate } from '../utils/index.js';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/slices/thunks/todoThunks.js';

export default function NotesInput() {
  const [title, setTitle] = useState('');
  const [charLimit, setCharLimit] = useState(50)
  const dispatch = useDispatch()
  
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
      title, 
      createdAt: new Date(), 
      archived: false
    }

    dispatch(addTodo(newNote))

    setTitle('');
    setContent('');
  }
  
  return (
    <div className="note-input">
      <h2 className="note-input__title">Create Note</h2>
      <h2 className="note-input__title__char-limit">Remaining Character: {charLimit}</h2>
      <form className="note-input__body" onSubmit={handleSubmit} >
        <input type="text" placeholder="Note Title" value={title} onChange={handleTitleChange} />
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
}