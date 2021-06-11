import React from 'react'
import { 
  MessageLine, 
  MessageContainer,
  MessageContent,
  SenderIdContainer,
  SenderId
} from './styled-components/MessageStyles';

export default function MyMessage({ message }) {
  return (
    <MessageLine>
      <MessageContainer>
        <MessageContent>{message.body}</MessageContent>
        <SenderIdContainer>
          <SenderId>From: {message.senderName}</SenderId>
        </SenderIdContainer>
      </MessageContainer>
    </MessageLine>
  )
}
