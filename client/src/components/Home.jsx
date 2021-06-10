import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './styled-components/GlobalStyles';
import { 
  SubWrapper, 
  InputContainer,
  Input,
  Button,
  Label
} from './styled-components/HomeStyles';

// Redux Hooks
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { setRoomName } from '../actions/roomName-actions';
import { setIsAuthenticated } from '../actions/auth-actions';
import { setUsersInRoom } from '../actions/usersInRoom-actions'

// React Toastify
import { toast } from 'react-toastify'

export default function Home() {
  const dispatch = useDispatch();
  const roomName = useSelector(state => state.roomName);

  const logout = e => {
    e.preventDefault()
    localStorage.removeItem("token");
    setIsAuthenticated(dispatch, false);
    toast.success("Logged out successfully")
  }

  return (
    <Wrapper>
      <SubWrapper>
        <InputContainer>
          <Label htmlFor="room-name">Room Name</Label>
          <Input 
            type="text" 
            name="room-name"
            placeholder="Room"
            value={roomName}
            onChange={(e) => setRoomName(dispatch, e.target.value)}
            required
            />
          <Link to={`/chatroom/${roomName}`}>
            <Button
              onClick={() => setUsersInRoom(dispatch)}
            >Join Room</Button>
          </Link>
          <br />
          <Button 
            primary
            onClick={(e) => logout(e)} 
          >Log out</Button>
        </InputContainer>
      </SubWrapper>
    </Wrapper>
  )
}
