import { useEffect, useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { getInitialData, showFormattedDate } from '../utils/index.js';
import NotesHeader from '../components/NotesHeader.jsx';
import NotesInput from '../components/NotesInput.jsx';
import NotesBody from '../components/NotesBody.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../store/slices/thunks/todoThunks.js';


export default function NotesApp() {
  return (
    <>
      <NotesHeader />
      <NotesInput />
      <NotesBody  />
    </>
  )
}





