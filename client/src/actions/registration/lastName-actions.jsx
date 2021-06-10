import { CHANGE_LAST_NAME } from '../../action-types/registration-action-types'

export const setLastName = (dispatch, lastName) => {
  return dispatch({ type: CHANGE_LAST_NAME, payload: lastName })
}