import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, clickDelete }) =>
  <ul className="todo-list">
    {todos.map(todo =>
      <TodoItem key={todo.id} {...todo} clickDelete={clickDelete(todo)} />
    )}
  </ul>

export default TodoList
