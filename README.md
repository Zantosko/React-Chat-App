# React ChatApp

## Description

This a real-time chat application that requires users create account and login. Key features include the use Socket.io for real-time connection and JWT (JSON Web Token) for user authentication. Even though this project had a heavy focus on the backend, another goal in mind was to learn how to make a complete full stack application with React, Node.js, PostgreSQL.

## Screenshots

<p align="center">
  <img src="client/src/assets/screenshots/Chatroom.png" height="300" width="300"/>
</p>
<p align="center">
  <img src="client/src/assets/screenshots/Register.png" height="300" width="300"/>
</p>
<p align="center">
  <img src="client/src/assets/screenshots/Login.png" height="300" width="300"/>
</p>
<p align="center">
  <img src="client/src/assets/screenshots/Failed-Login.png" height="300" width="300"/>
</p>
<p align="center">
  <img src="client/src/assets/screenshots/Error.png" height="300" width="300"/>
</p>

## Website Color Palette

<p align="center">
  <img src="client/src/assets/screenshots/Color-Palette.png" height="300" width="500"/>
</p>

## Key Features

- **JWT Authentication** - This feature allows a user to create an account and login accordingly. Once a new user registers and account, it will hit a registration route that runs the request body it through custom middleware that validates if all input fields are filled and formatted correctly. Once validated the password is then "hashed" with Bcrypt and mapped to the database with Sequelize which results with the client being returned a JWT. This JWT is then saved in local storage. For logging in whenever a user makes a request Bcrypt will compare the entered password to the hashed password and then once again return a JWT, where it is then saved to local storage.

- **Real Time Communication with Socket.io** - This feature enables the server and client to send messages to each other at any time, after a connection is established, without the need for explicit requests by one or the other. This is method preferred over HTTP, due to the fact that it has a faster reaction time and is typically better suited for ongoing updates. An initial "handshake" is established between the client and the server and this allows for ease of continous messaging between different users.

- **Toastify Notifications** - Whenever valid or invalid credentials are given at login/registration, a small toastify message update the user whether authentication was successful or not.

## Technologies Used

**Client-Side**:
- React/Redux
- React Router
- Styled Components
- React Toastify
- Socket.io-client

**Server-Side**:
- Node.js
- Express.js
- Socket.io
- JSON Web Token (JWT)
- PostgreSQL
- Sequelize
- Bcrypt

**NPM Packages**:

`Client`:
- “react-redux”: “^7.2.4”,
- “react-router-dom”: “^5.2.0”,
- “react-scripts”: “4.0.3”,
- “react-toastify”: “^7.0.4”,
- “redux”: “^4.1.0”,
- “redux-logger”: “^3.0.6”,
- “socket.io-client”: “^4.1.2”,
- “styled-components”: “^5.3.0”,

`Server`:
- “bcrypt”: “^5.0.1”,
- “cors”: “^2.8.5”,
- “dotenv”: “^10.0.0”,
- “express”: “^4.17.1”,
- “jsonwebtoken”: “^8.5.1”,
- “sequelize”: “^6.6.2”,
- “socket.io”: “^4.1.2”
- “sequelize-cli”: “^6.2.0”

## Challenges

1. There was steep learning curve for both Socket.io and JWT.
2. Planning out how many Actions/Reducers that I needed to make and how they could be reused.
3. Getting used to Styled Components.
4. Hashing passwords with Bcrypt.
5. Accessing user data through Socket.io.

## What was Learned?

- Integraing React with back-end comprised of Node.js and PostgreSQL.
- Gained a deeper understanding of web sockets and user authentication.
- Became more familiar with Socket.io syntax and initial setup.
- Using JWT syntax to create a tokens whenever a user registers or logs in.
- Creating custom middleware.
- Became more familiar with React/Redux methods.
  - Gained some exposure implementing custom React Hooks.
- Using Styled Components
