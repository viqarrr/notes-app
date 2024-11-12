import React from 'react';
import { showFormattedDate } from '../utils/index.js';
import { useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../store/slices/thunks/todoThunks.js';

export default function NotesItem({ id, title, createdAt, content, archived }) {
  const dispatch = useDispatch()
 
  const formattedDate = showFormattedDate(createdAt);
  return (
    <div className="note-item">
      <div className="note-item__body">
        <h3 className="note-item__title">{title} </h3>
        <p className="note-item__date">{formattedDate}</p>
        <p className="note-item__content">{content}</p>
        <div className="note-item__action">
          <button className="note-item__delete-button" onClick={() => dispatch(deleteTodo(id))} >Delete</button>
          <button className="note-item__archive-button" onClick={() => dispatch(editTodo(id))} >{archived ? 'Unarchive' : 'Archive'}</button>
        </div>
      </div>
    </div>
  );
}