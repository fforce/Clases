import { combineReducers } from 'redux'

import loginReducer from './loginReducer'
//este estado lo maneja tal reducer
const rootReducer = combineReducers({
    loginReducer
})

export default rootReducer