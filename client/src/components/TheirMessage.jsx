import React from 'react';
import {
  MessageLine2,
  MessageContainer2,
  MessageContent
} from './styled-components/MessageStyles'

export default function TheirMessage({ message }) {
  return (
    <MessageLine2>
      <MessageContainer2>
        <MessageContent>{message.body}</MessageContent>
      </MessageContainer2>
    </MessageLine2>
  )
}
