import { combineReducers } from 'redux';
import roomName from './roomNameReducer';
import newMessage from './messageReducer'

const rootReducer = combineReducers({
  roomName,
  newMessage
});

export default rootReducer;