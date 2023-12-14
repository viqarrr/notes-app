import React from 'react';
import { showFormattedDate } from '../utils/index.js';

export default function NotesItem({ id, title, createdAt, content, archived, onDelete, onArchive }) {
 const formattedDate = showFormattedDate(createdAt);
  return (
    <div className="note-item">
      <div className="note-item__body">
        <h3 className="note-item__title">{title} </h3>
        <p className="note-item__date">{formattedDate}</p>
        <p className="note-item__content">{content}</p>
        <div className="note-item__action">
          <button className="note-item__delete-button" onClick={() => onDelete(id)} >Delete</button>
          <button className="note-item__archive-button" onClick={() => onArchive(id)} >{archived ? 'Unarchive' : 'Archive'}</button>
        </div>
      </div>
    </div>
  );
}