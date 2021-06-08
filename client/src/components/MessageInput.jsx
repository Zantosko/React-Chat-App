import React from 'react'
import { Footer } from './styled-components/ChatRoomStyles'
import { Input, SendButton } from './styled-components/MessageInputStyles';
import { useSelector, useDispatch } from 'react-redux';
import { setNewMessage } from '../actions/message-actions';
import PropTypes from 'prop-types';

export default function MessageInput({ sendMessage }) {
  const newMessage = useSelector(state => state.newMessage);
  const dispatch = useDispatch();

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage(dispatch, "");
  }

  return (
    <Footer>
      <Input 
        type="text"
        placeholder="Write your message here..."
        value={newMessage}
        onChange={(e) => setNewMessage(dispatch, e.target.value)}
      />
      <SendButton
        onClick={handleSendMessage}
      ><i className="fas fa-arrow-alt-circle-up"></i> Send</SendButton>
    </Footer>
  )
}

MessageInput.propTypes = {
  sendMessage: PropTypes.func.isRequired
}
