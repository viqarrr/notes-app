import React from 'react';
import { useDispatch } from 'react-redux';
import { search } from "../store/slices/todoSlice";

export default function TodosHeader() {
  const dispatch = useDispatch()
  
  return (
    <div className="todo-app__header" >
      <h1>Todos</h1>
      <input type="text" placeholder="Search Todo " onChange={(e) => dispatch(search(e.target.value))} />
    </div>
  )
}
