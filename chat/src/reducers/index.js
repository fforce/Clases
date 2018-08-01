import { combineReducers } from 'redux'

import LoginReducer from './LoginReducer'
import UserReduce from './UserReduce'
//este estado lo maneja tal reducer
const rootReducer = combineReducers({
    LoginReducer,
    UserReduce
    
})

export default rootReducer