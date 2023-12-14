import React from 'react';

export default function NotesHeader({ onSearch }) {
  return (
    <div className="note-app__header" >
      <h1>Notes</h1>
      <input type="text" placeholder="Search Note " onChange={(e) => onSearch(e.target.value)} />
    </div>
  )
}
