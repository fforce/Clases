import React from 'react'

const Login = ({ draft, onChangeDraft, submitForm }) => (
  <div>
    <h1>Login</h1>
    <form onSubmit={(e) => { e.preventDefault(); alert("hola"); submitForm(true) }}>
      <input onChange={event => onChangeDraft(event.target.value)} type="text" value={draft} />
      <button type="submit"> Acceder </button>
    </form>
  </div>
)
export default Login
