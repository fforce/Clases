import React from 'react'

const Login = ({ draft, onChangeDraft }) =>(
  <div>
    <h1>Login</h1>
    <input onChange={event => onChangeDraft(event.target.value)} type="text" value={draft} />
    <button> Acceder </button>
  </div>
)
export default Login
