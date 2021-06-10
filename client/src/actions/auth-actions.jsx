import { SET_AUTHENTICATION } from '../action-types/auth-action-types';

export const setIsAuthenticated = (dispatch, boolean) => {
  return dispatch({ type: SET_AUTHENTICATION, payload: boolean })
}