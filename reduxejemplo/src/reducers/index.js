import { combineReducers } from 'redux'
import todo from './todo'
import draft from './draft'
import filter from './filter'
//este estado lo maneja tal reducer
const rootReducer = combineReducers({
  todo,
  draft: draft,
  filter
})

export default rootReducer
