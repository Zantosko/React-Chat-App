import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './styled-components/GlobalStyles';
import { 
  SubWrapper, 
  InputContainer2,
  Input,
  Button,
  SubLabel,
  Title,
  SubContainer,
  Form,
  Divider
} from './styled-components/HomeStyles';
import { toast } from 'react-toastify'

// Redux Hooks
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { setUsername } from '../actions/registration/username-actions'
import { setPassword } from '../actions/registration/password-actions'
import { setIsAuthenticated } from '../actions/auth-actions'

export default function Login() {
  const dispatch = useDispatch();
  const username = useSelector(state => state.username);
  const password = useSelector(state => state.password);

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {

      const body = { username, password }

      const response = await fetch("http://localhost:4001/auth/login", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
      });

      const parseResponse = await response.json();

      if (parseResponse.token) {
        localStorage.setItem("token", parseResponse.token);

        setIsAuthenticated(dispatch, true);
        toast.success("Logged in successfully")
      } else {
        setIsAuthenticated(dispatch, false);
        toast.error(parseResponse)
      }

    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Wrapper>
      <SubWrapper>
        <InputContainer2>
          <Form onSubmit={onSubmitForm}>
            <Title>ChatApp</Title>
            <SubContainer>
              <SubLabel htmlFor="username">Username</SubLabel>
            </SubContainer>
            <Input 
              type="text" 
              name="username"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(dispatch, e.target.value)}
            />
            <SubContainer>
              <SubLabel htmlFor="password">Password</SubLabel>
            </SubContainer>
            <Input 
              type="password" 
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(dispatch, e.target.value)}
            />
            <Button>Log In</Button>
            <Divider />
            <Link to="/register">
              <Button primary>Create New Account</Button>
            </Link>
          </Form>
        </InputContainer2>
      </SubWrapper>
    </Wrapper>
  )
}
