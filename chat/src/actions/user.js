import { SET_LOGUIN_STATUS } from '../constants/actionTypes'

export const setCredential = login => ({
  type: SET_LOGUIN_STATUS,
  login
})

