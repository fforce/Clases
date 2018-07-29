import {
  SET_VISIBILITY_FILTER
} from '../constants/actionTypes'

const initialState = 'SHOW_ALL'

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default filterReducer
