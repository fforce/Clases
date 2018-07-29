import {
  CHANGE_DRAFT,
  ADD_TODO
} from '../constants/actionTypes'

const initialState = ''

const draftReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case CHANGE_DRAFT:
      return action.draft
    case ADD_TODO:
      return ''
    default:
      return state
  }
}

export default draftReducer
