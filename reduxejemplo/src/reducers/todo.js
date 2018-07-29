import {
  ADD_TODO,
  TOGGLE_TODO,
  CHANGE_TODO,
  DESTROY_TODO
} from '../constants/actionTypes'

const initialState = []

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        id: action.id,
        title: action.title,
        completed: false
      }]
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
        ? { ...todo, completed:  !todo.completed }
        : todo
      )
    case CHANGE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, title: action.title }
        } else {
          return todo
        }
      })
    case DESTROY_TODO:
      return state.filter(t => t.id !== action.id)
    default:
      return state
  }
}

export default todoReducer
