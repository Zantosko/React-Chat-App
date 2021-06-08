import React from 'react'
import MessageFeed from './MessageFeed'
import MessageInput from './MessageInput'
import Navbar from './Navbar'
import RoomDetails from './RoomDetails'
import { 
  Container,
  Grid
} from './styled-components/ChatRoomStyles';
import useChat from '../hooks/useChat';

export default function ChatRoom(props) {
  const { roomId } = props.match.params;
  const { messages, sendMessage } = useChat(roomId);

  console.log(messages)
  return (
    <Container>
      <Grid>
          <Navbar />
          <RoomDetails routeDetails={props}/>
          <MessageFeed messages={messages}/>
          <MessageInput sendMessage={sendMessage}/>
      </Grid>
    </Container>
  )
}
