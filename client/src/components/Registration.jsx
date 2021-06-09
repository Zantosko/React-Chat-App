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
  Divider
} from './styled-components/HomeStyles';

export default function Registration() {
  return (
    <Wrapper>
      <SubWrapper>
        <InputContainer3>
          <Form>
            <Title>Register</Title>
            <SubContainer>
              <SubLabel htmlFor="firstName">First Name</SubLabel>
            </SubContainer>
            <Input 
              type="text" 
              name="firstName"
              placeholder="First Name"
            /><SubContainer>
            <SubLabel htmlFor="lastName">Last Name</SubLabel>
            </SubContainer>
            <Input 
              type="text" 
              name="lastName"
              placeholder="Last Name"
            /><SubContainer>
            <SubLabel htmlFor="email">Email</SubLabel>
            </SubContainer>
            <Input 
              type="email" 
              name="email"
              placeholder="Email Address"
            />
            <SubContainer>
              <SubLabel htmlFor="username">New Username</SubLabel>
            </SubContainer>
            <Input 
              type="text" 
              name="username"
              placeholder="Enter New Username"
            />
            <SubContainer>
              <SubLabel htmlFor="password">New Password</SubLabel>
            </SubContainer>
            <Input 
              type="password" 
              name="room-name"
              placeholder="Enter New Password"
            />
            <SubContainer>
              <SubLabel htmlFor="rePassword">Re-type Password</SubLabel>
            </SubContainer>
            <Input 
              type="password" 
              name="rePassword"
              placeholder="Re-type Password"
            />
            <Button>Sign Up</Button>
            <Divider />
            <h3>Have an account? <Link to="/login" className="link">Login</Link></h3>
          </Form>
        </InputContainer3>
      </SubWrapper>
    </Wrapper>
  )
}
