import { CHANGE_LAST_NAME } from '../../action-types/registration-action-types'

const initialState = "";

const lastName = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LAST_NAME:
      return state = action.payload;

    default:
      return state;
  }
}

export default lastName;