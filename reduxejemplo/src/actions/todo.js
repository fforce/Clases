import { v4 } from 'node-uuid'

import {
  ADD_TODO,
  TOGGLE_TODO,
  CHANGE_TODO,
  DESTROY_TODO
} from '../constants/actionTypes'

export const addTodo = title => ({
  type: ADD_TODO,
  id: v4(),
  title
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const changeTodo = (id, title) => ({
  type: CHANGE_TODO,
  id,
  title
})

export const destroyTodo = id => ({
  type: DESTROY_TODO,
  id
})
