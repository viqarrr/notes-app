import React, { useEffect } from "react";
import TodosItem from "./TodosItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../store/slices/thunks/todoThunks";

export default function TodosBody() {
  const todos = useSelector((state) => state.todo.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos())
    console.log(todos)
  }, [])

  useEffect(() => {
    // Log todos when they change
    console.log(todos);
  }, [todos]);

  const activeTodos = todos.filter((todo) => todo.archived == false);
  const archivedTodos = todos.filter((todo) => todo.archived == true);

  return (
    <div className="todo-app__body">
      <h2>Active Todos</h2>
      {activeTodos.length > 0 ? (
        <div className="todos-list">
          {activeTodos.map((todo) => (
            <TodosItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </div>
      ) : (
        <p className="todos-list__empty-message">No todos Available</p>
      )}
      <h2>Archived Todos</h2>
      {archivedTodos.length > 0 ? (
        <div className="todos-list">
          {archivedTodos.map((todo) => (
            <TodosItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </div>
      ) : (
        <p className="todos-list__empty-message">No Todos Available</p>
      )}
    </div>
  );
}
