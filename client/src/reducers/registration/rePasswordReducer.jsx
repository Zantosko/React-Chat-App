import { CHANGE_REPASSWORD } from '../../action-types/registration-action-types'

const initialState = "";

const rePassword = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_REPASSWORD:
      return state = action.payload;

    default:
      return state;
  }
}

export default rePassword;