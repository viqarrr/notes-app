import React from 'react';
import { showFormattedDate } from '../utils/index.js';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo, fetchTodos } from '../store/slices/thunks/todoThunks.js';

export default function TodosItem({ todo }) {
  const dispatch = useDispatch()
  const formattedDate = showFormattedDate(todo.dueDate);
  
  const handleEdit = () => {
    const editedTodo = {...todo, archived: !todo.archived}
    console.log(editedTodo)
    dispatch(editTodo(editedTodo))
    dispatch(fetchTodos())
  }
  
  return (
    <div className="todo-item">
      <div className="todo-item__body">
        <h3 className="todo-item__title">{todo.title} </h3>
        <p className="todo-item__date">{formattedDate}</p>
        <div className="todo-item__action">
          <button className="todo-item__delete-button" onClick={() => dispatch(deleteTodo(todo.id))} >Delete</button>
          <button className="todo-item__archive-button" onClick={handleEdit} >{todo.archived ? 'Unarchive' : 'Archive'}</button>
        </div>
      </div>
    </div>
  );
}