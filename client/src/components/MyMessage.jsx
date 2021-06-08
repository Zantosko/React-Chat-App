import React from 'react'
import { 
  MessageLine, 
  MessageContainer,
  MessageContent
} from './styled-components/MessageStyles';

export default function MyMessage({ message }) {
  return (
    <MessageLine>
      <MessageContainer>
        <MessageContent>{message.body}</MessageContent>
      </MessageContainer>
    </MessageLine>
  )
}
