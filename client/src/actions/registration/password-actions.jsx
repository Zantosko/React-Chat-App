import { CHANGE_PASSWORD } from '../../action-types/registration-action-types';

export const setPassword = (dispatch, password) => {
  return dispatch({ type: CHANGE_PASSWORD, payload: password })
}