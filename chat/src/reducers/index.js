import { combineReducers } from 'redux'

import LoginReducer from './LoginReducer'
import UserReduce from './UserReduce'
//este estado lo maneja tal reducera
const rootReducer = combineReducers({
    LoginReducer,
    UserReduce
    
})

export default rootReducer