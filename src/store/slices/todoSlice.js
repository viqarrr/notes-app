import { createSlice } from "@reduxjs/toolkit";
import { addTodo, fetchTodos, editTodo, deleteTodo } from "./thunks/todoThunks";

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    data: [],
    filteredData: []
  },
  reducers:{
    search: (state, action) => {
      if(action.payload.length == 0) {
        state.data = state.filteredData;
     } 
    state.data = state.data.filter((todo) =>
      todo.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.data.push(action.payload)
    })
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.data = action.payload
      state.filteredData = state.data
    })
    builder.addCase(editTodo.fulfilled, (state, action) => {
      state.data = state.data.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload};
        }
        console.log(todo)
        return todo
        });
      state.filteredData = state.data
    })
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.data = state.data.filter(todo => {return todo.id !== action.payload})
      state.filteredData = state.data
    })
  }
})

export const { search } = todoSlice.actions
export default todoSlice.reducer;