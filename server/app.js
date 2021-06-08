const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const app = express();
const formatMessage = require("./utils/messages");

const port = process.env.PORT || 4001;
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "*"
  }
});

io.on("connection", socket => {
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  // Listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, data => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data)
  });

  socket.on("disconnect", () => {
    socket.leave(roomId);
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});