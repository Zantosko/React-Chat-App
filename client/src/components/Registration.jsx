import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './styled-components/GlobalStyles';
import { 
  SubWrapper, 
  InputContainer3,
  Input,
  Button,
  SubLabel,
  Title,
  SubContainer,
  Form,
  Divider,
  BottomText
} from './styled-components/HomeStyles';
import { toast } from 'react-toastify';

// Redux Hooks
import { useSelector, useDispatch } from 'react-redux';

// Actions
import { setFirstName } from '../actions/registration/firstName-actions';
import { setLastName } from '../actions/registration/lastName-actions';
import { setEmail } from '../actions/registration/email-actions';
import { setUsername } from '../actions/registration/username-actions';
import { setPassword } from '../actions/registration/password-actions';
import { setRePassword } from '../actions/registration/rePassword-actions';
import { setIsAuthenticated } from '../actions/auth-actions';

export default function Registration() {
  const dispatch = useDispatch();
  const firstName = useSelector(state => state.firstName);
  const lastName = useSelector(state => state.lastName);
  const email = useSelector(state => state.email);
  const username = useSelector(state => state.username);
  const password = useSelector(state => state.password);
  const rePassword = useSelector(state => state.rePassword);

  
  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {

      const body = {
        firstName,
        lastName,
        email,
        username,
        password,
        rePassword
      }

      const response = await fetch("http://localhost:4001/auth/register", {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
      })

      const parseResponse = await response.json();

      if (parseResponse.token) {
        localStorage.setItem("token", parseResponse.token);

        setIsAuthenticated(dispatch, true);
        toast.success("Registered Successfully");
      } else {
        setIsAuthenticated(dispatch, false);
        toast.error(parseResponse);
      }

    } catch (err) {
      console.error(err.message)
    }
  }
  
  return (
    <Wrapper>
      <SubWrapper>
        <InputContainer3>
          <Form onSubmit={onSubmitForm}>
            <Title>Register</Title>
            <SubContainer>
              <SubLabel htmlFor="firstName">First Name</SubLabel>
            </SubContainer>
            <Input 
              type="text" 
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(dispatch, e.target.value)}
            /><SubContainer>
            <SubLabel htmlFor="lastName">Last Name</SubLabel>
            </SubContainer>
            <Input 
              type="text" 
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(dispatch, e.target.value)}
            /><SubContainer>
            <SubLabel htmlFor="email">Email</SubLabel>
            </SubContainer>
            <Input 
              type="email" 
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(dispatch, e.target.value)}
            />
            <SubContainer>
              <SubLabel htmlFor="username">New Username</SubLabel>
            </SubContainer>
            <Input 
              type="text" 
              name="username"
              placeholder="Enter New Username"
              value={username}
              onChange={(e) => setUsername(dispatch, e.target.value)}
            />
            <SubContainer>
              <SubLabel htmlFor="password">New Password</SubLabel>
            </SubContainer>
            <Input 
              type="password" 
              name="password"
              placeholder="Enter New Password"
              value={password}
              onChange={(e) => setPassword(dispatch, e.target.value)}
            />
            <SubContainer>
              <SubLabel htmlFor="rePassword">Re-type Password</SubLabel>
            </SubContainer>
            <Input 
              type="password" 
              name="rePassword"
              placeholder="Re-type Password"
              value={rePassword}
              onChange={(e) => setRePassword(dispatch, e.target.value)}
            />
            <Button type="submit">Sign Up</Button>
            <Divider />
            <BottomText>Have an account? <Link to="/login" className="link">Login</Link></BottomText>
          </Form>
        </InputContainer3>
      </SubWrapper>
    </Wrapper>
  )
}
