import React from 'react';
import {
  MessageLine2,
  MessageContainer2 
} from './styled-components/MessageStyles'

export default function TheirMessage({ message }) {
  return (
    <MessageLine2>
      <MessageContainer2>
        <p>{message.body}</p>
      </MessageContainer2>
    </MessageLine2>
  )
}
