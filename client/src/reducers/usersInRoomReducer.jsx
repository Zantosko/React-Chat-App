import {
  USER_ENTERS_ROOM
} from '../action-types/usersInRoom-action-type';

const initialState = [];

const usersInRoom = (state = initialState, action) => {
  switch (action.type) {
    case USER_ENTERS_ROOM: 
      const userList = [...state];
      userList.push(action.payload);
      return userList;

    default:
      return state;
  }
}

export default usersInRoom;