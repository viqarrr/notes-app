import React, { useEffect } from "react";
import NotesList from "./NotesList";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../store/slices/thunks/todoThunks";

export default function NotesBody() {
  const notes = useSelector((state) => state.todo.data)
  const dispatch = useDispatch()
  console.log(notes)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  // const activeNotes = notes.filter((note) => note.archived == false);
  // const archivedNotes = notes.filter((note) => note.archived == true);

  return (
    <div className="note-app__body">
      {/* <h2>Active Notes</h2>
      {activeNotes.length > 0 ? (
        <div className="notes-list">
          {activeNotes.map((note) => (
            <NotesItem
              key={note.id}
              id={note.id}
              {...note}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">No Notes Available</p>
      )}
      <h2>Archived Notes</h2>
      {archivedNotes.length > 0 ? (
        <div className="notes-list">
          {archivedNotes.map((note) => (
            <NotesItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onArchive={onArchive}
              {...note}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">No Notes Available</p>
      )} */}
    </div>
  );
}
