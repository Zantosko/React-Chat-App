import React from 'react';
import { Nav } from './styled-components/ChatRoomStyles'
import { 
  Logo, 
  Button,
  ButtonContainer
} from './styled-components/NavbarStyles';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

// Redux Hooks
import { useDispatch } from 'react-redux';

// Actions
import { setIsAuthenticated } from '../actions/auth-actions'
import { removeUserFromRoom } from '../actions/usersInRoom-actions'

export default function Navbar() {
  const dispatch = useDispatch();

  const logout = e => {
    e.preventDefault()
    localStorage.removeItem("token");
    setIsAuthenticated(dispatch, false);
    removeUserFromRoom(dispatch)
    toast.success("Logged out successfully")
  }

  const inform = () => {
    removeUserFromRoom(dispatch)
    toast.info("Exited Room")
  }

  return (
    <Nav>
      <Logo>ChatApp</Logo>
      <ButtonContainer>
        <Button onClick={(e) => logout(e)}>Logout</Button>
        <Link to="/">
          <Button onClick={() => inform()} primary>Leave Room</Button>
        </Link>
      </ButtonContainer>
    </Nav>
  )
}
