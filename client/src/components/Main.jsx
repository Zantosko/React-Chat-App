import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ChatRoom from './ChatRoom';
import Login from './Login';
import Registration from './Registration';

export const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/chatroom/:roomId" component={ChatRoom}></Route>
      <Route exact path="/chatroom/" component={ChatRoom}></Route>
      <Route exact path="/register" component={Registration}></Route>
      <Route exact path="/login" component={Login}></Route>
    </Switch>
  )
}
