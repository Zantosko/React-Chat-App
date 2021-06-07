const express = require("express");
const socketIo = require("socket.io");
const http = require("http");
const app = express();
const formatMessage = require("./utils/messages");
const { 
  userJoin, 
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require("./utils/users");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

app.use(index);

const server = http.createServer(app);

const io = socketIo(server);

const botName = "ChatCord Bot";


io.on("connection", socket => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room)

    socket.join(user.room)

    // Welcome current user
    // This communicates to single user that is connecting
    socket.emit("message", formatMessage(botName, "Welcome to ChartCord!"));
  
    // Brodcast when a user connects
    // This will brodcast to everyone besides the user that's connecting
    socket.broadcast
      .to(user.room)
      .emit("message", formatMessage(botName, `${user.username} has joined the chat`));

      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room)
      })
  });

  // Listen for chatMessage
  socket.on("chatMessage", msg => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if(user) {
      // Alerts all users when a single user leaves
      io.to(user.room).emit("message", formatMessage(botName, `${user.username} has left the chat`));

      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    }

  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`)
})