const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const app = express();
const formatMessage = require("./utils/messages");

const port = process.env.PORT || 4001;
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

//* Middleware
app.use(express.json());

//* Socket.io Setup

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

//* Routes

//? Index Route
app.use("/", require("./routes/index"));

//? Authorization Route
app.use("/auth", require("./routes/jwtAuth"));


server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});