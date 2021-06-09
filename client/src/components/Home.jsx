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
import { useDispatch, useSelector } from 'react-redux';
import { setRoomName } from '../actions/roomName-actions'

export default function Home() {
  const roomName = useSelector(state => state.roomName);
  const dispatch = useDispatch();

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
            <Button>Join Room</Button>
          </Link>
        </InputContainer>
      </SubWrapper>
    </Wrapper>
  )
}
