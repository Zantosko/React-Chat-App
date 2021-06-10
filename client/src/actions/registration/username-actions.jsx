import { CHANGE_USERNAME } from '../../action-types/registration-action-types'

export const setUsername = (dispatch, username) => {
  return dispatch({ type: CHANGE_USERNAME, payload: username })
}