import { combineReducers } from 'redux'

import loginReducer from './loginReducer'
import userReduce from './userReduce'
//este estado lo maneja tal reducer
const rootReducer = combineReducers({
    loginReducer,
    userReduce
    
})

export default rootReducer