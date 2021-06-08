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

export default function Login() {
  return (
    <Wrapper>
      <SubWrapper>
        <InputContainer2>
          <Form>
            <Title>ChatApp</Title>
            <SubContainer>
              <SubLabel htmlFor="username">Username</SubLabel>
            </SubContainer>
            <Input 
              type="text" 
              name="username"
              placeholder="Enter Username"
            />
            <SubContainer>
              <SubLabel htmlFor="password">Password</SubLabel>
            </SubContainer>
            <Input 
              type="password" 
              name="password"
              placeholder="Enter Password"
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
