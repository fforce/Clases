import React from 'react'

const TodoItem = ({ title, clickDelete }) =>
  <li>
    <div className="view">
      <input type="checkbox" className="toggle" />
      <label>{title}</label>
      <button className="destroy" onClick={clickDelete} ></button>
    </div>
  </li>

export default TodoItem
