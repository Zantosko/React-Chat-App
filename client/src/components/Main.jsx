import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ChatRoom from './ChatRoom';

export const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/chatroom/:roomId" component={ChatRoom}></Route>
      <Route exact path="/chatroom/" component={ChatRoom}></Route>
    </Switch>
  )
}
