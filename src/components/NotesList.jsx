import React from 'react';
import NotesItem from './NotesItem'

export default function NotesList() {
  const activeNotes = notes.filter((note) => note.archived == false);
  const archivedNotes = notes.filter((note) => note.archived == true);
  return (
    <>
      <h2>Active Notes</h2>
        { activeNotes.length > 0 ? (
          <div className="notes-list">
          { activeNotes.map((note) => (
            <NotesItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
            )
          )}  
          </div>
          ) : (
            <p className="notes-list__empty-message">No Notes Available</p> 
          )
        }
      <h2>Archived Notes</h2>
        { archivedNotes.length > 0 ? (
          <div className="notes-list">
          { archivedNotes.map((note) => (
            <NotesItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} {...note} />
            )
          )}  
          </div>
          ) : (
            <p className="notes-list__empty-message">No Notes Available</p>
          )
        }
    </>
  );
}