import React from 'react'
import NewTodo from './NewTodo'
import TodoList from './TodoList'
import Filter from './Filter'

const TodoApp = ({ filter, onChangeFilter, todos, onCompleteTodo, onToggleTodo, draft, onChangeDraft, addTodo }) =>
  <div>
    <NewTodo
      draft={draft}
      onDraftChange={onChangeDraft}
      onAddTodo={addTodo}
    />
    <TodoList todos={todos} onCompleteTodo={onCompleteTodo} onToggleTodo={onToggleTodo} />
    <Filter filter={filter} onChangeFilter={onChangeFilter} />
  </div>

export default TodoApp
