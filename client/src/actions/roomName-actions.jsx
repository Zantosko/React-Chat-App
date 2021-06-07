import { CHANGE_ROOM_NAME } from '../action-types/roomName-action-types';

export const setRoomName = (dispatch, roomName) => {
  return dispatch({ type: CHANGE_ROOM_NAME, payload: roomName })
}