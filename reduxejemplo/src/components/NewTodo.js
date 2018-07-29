import React from 'react'

const NewTodo = ({ draft, onDraftChange, onAddTodo }) =>
  <div>
    <h1>todo</h1>
    <form onSubmit={e => {
      e.preventDefault()
      onAddTodo(draft)
    }}>
      <input
        type="text"
        value={draft}
        onChange={e => onDraftChange(e.target.value)}
      />
    </form>
  </div>
  
export default NewTodo
