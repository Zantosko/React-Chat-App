import { CHANGE_REPASSWORD } from '../../action-types/registration-action-types';

export const setRePassword = (dispatch, rePassword) => {
  return dispatch({ type: CHANGE_REPASSWORD, payload: rePassword })
}