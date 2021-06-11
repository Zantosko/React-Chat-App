import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import ChatRoom from './ChatRoom';
import Login from './Login';
import Registration from './Registration';
import Error from './ErrorPage';

// React Toastify
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Redux Hooks
import { useSelector, useDispatch } from "react-redux";

// Actions
import { setIsAuthenticated } from '../actions/auth-actions'

// React Toastify Configuration
toast.configure();

export const Main = () => {
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const dispatch = useDispatch();
  
  const isAuth = async () => {
    try {

      const response = await fetch("http://localhost:4001/auth/is-verified", {
        method: "GET",
        headers: { token: localStorage.token }
      });

      const parseResponse = await response.json();

      parseResponse === true ? setIsAuthenticated(dispatch, true) : setIsAuthenticated(dispatch, false)

    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth()
  },[])

  return (
    <Switch>
      <Route 
        exact path="/" 
        render={props => 
          isAuthenticated ? (
            <Home {...props}/>
          ) : (
            <Redirect to="/login"/>
          )
        }
      />
      <Route exact path="/chatroom/:roomId" 
      render={props => 
        isAuthenticated ? (
          <ChatRoom {...props}/>
        ) : (
          <Redirect to="/login"/>
        )
      }/>
      <Route 
        exact path="/register" 
        render={props =>
          !isAuthenticated ? (
            <Registration {...props}/>
          ) : (
            <Redirect to="/login"/>
          )
        }
      />
      <Route 
        exact path="/login" 
        render={props =>
          !isAuthenticated ? (
            <Login {...props}/>
          ) : (
            <Redirect to="/"/>
          )
        }
      />
      <Route path="*" component={Error}/>
    </Switch>
  )
}
