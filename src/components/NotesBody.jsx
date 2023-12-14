import React from 'react';
import NotesList from './NotesList';

export default function NotesBody({ notes, onDelete, onArchive }) {
  return (
    <div className="note-app__body">
      <NotesList notes={notes} onDelete={onDelete} onArchive={onArchive} />
    </div>
  )
}