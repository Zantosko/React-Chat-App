import React from 'react';
import { Nav } from './styled-components/ChatRoomStyles'
import { Logo, Button } from './styled-components/NavbarStyles';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Nav>
      <Logo>ChatApp</Logo>
      <div className="btn-container">
        <Button>Logout</Button>
        <Link to="/">
          <Button>Leave Room</Button>
        </Link>
      </div>
    </Nav>
  )
}
