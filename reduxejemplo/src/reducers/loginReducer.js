import {
  CHANGE_DRAFT
} from '../constants/actionTypes'

const initialState = ''

const loginReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case CHANGE_DRAFT:
      return action.draft //devuelvo el nuevo estado como es un string devuelve un nuevo objeto
    default:
      return state
  }
}

export default loginReducer
