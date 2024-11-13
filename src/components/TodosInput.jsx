import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/slices/thunks/todoThunks.js';
import { formatDateToInput } from '../utils/index.js';

export default function TodosInput() {
  const [charLimit, setCharLimit] = useState(50)
  const dispatch = useDispatch()
  
  const initialTodoState = {
    title: '',
    date: formatDateToInput(new Date())
  }
  const [todo, setTodo] = useState(initialTodoState)

  const { title, date } = todo

  function handleTitleChange(e) {
    if(e.target.value.length <= 50) {
      setTitle(e.target.value);
      setCharLimit(50 - e.target.value.length)
    }
  }
  
  function handleChange(e) {
    setTodo({...todo, [e.target.name]: e.target.value})
    console.log(todo)
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    
    if(title.length == 0)  return ;
    
    const newTodo = {
      title, 
      dueDate: date, 
      archived: false
    }
    console.log(newTodo)
    dispatch(addTodo(newTodo))

    setTodo(initialTodoState);
    setCharLimit(50)
  }
  
  return (
    <div className="todo-input">
      <h2 className="todo-input__title">Create Todo</h2>
      <form className="todo-input__body" onSubmit={handleSubmit} >
        <div className='labels'>
          <label>Todo Title</label>
          <label className="todo-input__title__char-limit">Remaining Character: {charLimit}</label>
        </div>
        <input type="text" name="title" placeholder="todo Title" value={title} onChange={handleChange} />
        <label>Due Date</label>
        <input type="date" name="date" placeholder="Due Date" value={date} onChange={handleChange} />
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
}