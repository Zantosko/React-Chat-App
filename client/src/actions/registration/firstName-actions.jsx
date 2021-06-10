import { CHANGE_FIRST_NAME  } from '../../action-types/registration-action-types'

export const setFirstName = (dispatch, firstName) => {
  return dispatch({ type: CHANGE_FIRST_NAME, payload: firstName })
}