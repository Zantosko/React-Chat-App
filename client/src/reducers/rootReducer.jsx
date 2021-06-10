import { combineReducers } from 'redux';
import roomName from './roomNameReducer';
import newMessage from './messageReducer';
import firstName from './registration/firstNameReducer';
import lastName from './registration/lastNameReducer';
import email from './registration/emailReducer';
import username from './registration/usernameReducer';
import password from './registration/passwordReducer';
import rePassword from './registration/rePasswordReducer';
import isAuthenticated from '../reducers/authReducer';
import usersInRoom from './usersInRoomReducer'

const rootReducer = combineReducers({
  roomName,
  newMessage,
  firstName,
  lastName,
  email,
  username,
  password,
  rePassword,
  isAuthenticated,
  usersInRoom
});

export default rootReducer;