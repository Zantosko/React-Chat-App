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
              <SubLabel htmlFor="room-name">First Name</SubLabel>
            </SubContainer>
            <Input 
              type="text" 
              name="room-name"
              placeholder="First Name"
            /><SubContainer>
            <SubLabel htmlFor="room-name">Last Name</SubLabel>
            </SubContainer>
            <Input 
              type="text" 
              name="room-name"
              placeholder="Last Name"
            /><SubContainer>
            <SubLabel htmlFor="room-name">Email</SubLabel>
            </SubContainer>
            <Input 
              type="text" 
              name="room-name"
              placeholder="Email Address"
            />
            <SubContainer>
              <SubLabel htmlFor="room-name">New Username</SubLabel>
            </SubContainer>
            <Input 
              type="text" 
              name="room-name"
              placeholder="Enter New Username"
            />
            <SubContainer>
              <SubLabel htmlFor="room-name">New Password</SubLabel>
            </SubContainer>
            <Input 
              type="password" 
              name="room-name"
              placeholder="Enter New Password"
            />
            <SubContainer>
              <SubLabel htmlFor="room-name">Re-type Password</SubLabel>
            </SubContainer>
            <Input 
              type="password" 
              name="room-name"
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
