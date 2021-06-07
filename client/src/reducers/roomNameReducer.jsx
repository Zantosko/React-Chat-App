import { CHANGE_ROOM_NAME } from '../action-types/roomName-action-types';

const initialState = "";

const roomName = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ROOM_NAME:
      return (state = action.payload);
    
    default:
      return state;
  }
}

export default roomName;