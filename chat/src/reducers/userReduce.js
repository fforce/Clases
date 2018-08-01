import {
    CHANGE_DRAFT,
    SET_LOGUIN_STATUS
  } from '../constants/actionTypes'
  
  const isLogued = false
  
  const UserReduce = (state = isLogued, action) => {
    debugger;
    switch (action.type) {
      case SET_LOGUIN_STATUS:
        return action.login //devuelvo el nuevo estado como es un string devuelve un nuevo objeto
      default:
        return state
    }
  }
  
  export default UserReduce
  