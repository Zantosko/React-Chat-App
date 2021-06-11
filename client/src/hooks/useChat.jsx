import { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import { useSelector } from 'react-redux'

const JOIN_ROOM = "joinRoom"
const ROOM_INFO = "roomInfo";
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage"; // Name of the event
const SOCKET_SERVER_URL = "http://localhost:4001";

const useChat = (roomId) => {
  // Sent and received messages
  const [messages, setMessages] = useState([]); 
  const socketRef = useRef();
  const username = useSelector(state => state.usersInRoom[0])
  const [loggedInUsers, setLoggedInUsers] = useState([])

  useEffect(() => {
    
    // Creates a WebSocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: { roomId },
    });
    
    // Join chatroom
    socketRef.current.emit(JOIN_ROOM, { username, roomId })

    // Get room and users
    socketRef.current.on(ROOM_INFO, ({ room, users }) => {
      setLoggedInUsers(users)
    })

    // Listens for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });
    
    // Destroys the socket reference when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, [username]);

  // Sends a message to the server that forwards it to all users in the same room
  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
      senderName: username
    });
  };

  return { messages, sendMessage, loggedInUsers };
};

export default useChat;