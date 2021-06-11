import React from 'react';
import {
  MessageLine2,
  MessageContainer2,
  MessageContent,
  SenderIdContainer,
  SenderId
} from './styled-components/MessageStyles'

export default function TheirMessage({ message }) {
  return (
    <MessageLine2>
      <MessageContainer2>
        <MessageContent>{message.body}</MessageContent>
        <SenderIdContainer>
          <SenderId>From: {message.senderName}</SenderId>
        </SenderIdContainer>
      </MessageContainer2>
    </MessageLine2>
  )
}
