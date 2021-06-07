import { CHANGE_NEW_MESSAGE } from '../action-types/message-action-types';

export const setNewMessage = (dispatch, newMessage) => {
  return dispatch({ type: CHANGE_NEW_MESSAGE, payload: newMessage })
}