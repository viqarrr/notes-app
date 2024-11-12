import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addTodo = createAsyncThunk(
  'users/addTodo', 
  async(todo) => {
  const response = await axios.post('https://localhost:5174/todos')
  return response.data
  },
)

const fetchTodos = createAsyncThunk(
  'users/fetchTodos', 
  async() => {
    const response = await axios.get('https://localhost:5174/todos')
    return response.data
  },
)

const editTodo = createAsyncThunk(
  'users/editTodos', 
  async(todo) => {
  const response = await axios.put(`https://localhost:5174/todos/${todo.id}`, todo)
  return response.data
  },
)

const deleteTodo = createAsyncThunk(
  'users/deleteTodos', 
  async(todo) => {
  await axios.delete(`https://localhost:5174/todos/${todo.id}`)
  },
)

export { addTodo, fetchTodos, editTodo, deleteTodo }