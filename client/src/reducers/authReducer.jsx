import { SET_AUTHENTICATION } from '../action-types/auth-action-types';

const initialState = false;

const isAuthenticated = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION: 
      return state = action.payload;

    default:
      return state;
  }
}

export default isAuthenticated;