import { CHANGE_EMAIL } from '../../action-types/registration-action-types'


export const setEmail = (dispatch, email) => {
  return dispatch({ type: CHANGE_EMAIL, payload: email })
}