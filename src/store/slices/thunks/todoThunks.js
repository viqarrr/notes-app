import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addTodo = createAsyncThunk(
  'users/addTodo', 
  async(todo) => {
  const response = await axios.post('http://localhost:5174/todos', todo)
  return response.data
  },
)

const fetchTodos = createAsyncThunk(
  'users/fetchTodos', 
  async() => {
    const response = await axios.get('http://localhost:5174/todos')
    return response.data
  },
)

const editTodo = createAsyncThunk(
  'users/editTodos', 
  async(todo) => {
  const response = await axios.put( `http://localhost:5174/todos/${todo.id}`, todo)
  return response.data
  },
)

const deleteTodo = createAsyncThunk(
  'users/deleteTodos', 
  async(id) => {
  await axios.delete(`http://localhost:5174/todos/${id}`)
  return id
  }
)

export { addTodo, fetchTodos, editTodo, deleteTodo }