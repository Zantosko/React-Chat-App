import { CHANGE_USERNAME } from '../../action-types/registration-action-types'

const initialState = "";

const username = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state = action.payload;

    default:
      return state;
  }
}

export default username;