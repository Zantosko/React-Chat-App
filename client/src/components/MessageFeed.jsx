import React from 'react';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import { AsideRight } from './styled-components/ChatRoomStyles'

export default function MessageFeed({ messages }) {
  return (
    <AsideRight>
      {messages.map((message, idx) => message.ownedByCurrentUser ? <MyMessage key={idx} message={message}/> : <TheirMessage key={idx} message={message}/>)}
      <br></br>
    </AsideRight>
  )
}
