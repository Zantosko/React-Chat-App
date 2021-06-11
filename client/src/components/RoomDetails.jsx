import React from 'react'
import { AsideLeft } from './styled-components/ChatRoomStyles';
import { Content, Title } from './styled-components/RoomDetailsStyles';

export default function RoomDetails({ routeDetails, loggedInUsers }) {
  const { roomId } = routeDetails.match.params;

  return (
    <AsideLeft>
      <Content>
        <Title><i className="fas fa-person-booth"></i> Room Name:</Title>
        <div>
          <h3>{roomId}</h3>
        </div>
        <Title><i className="fas fa-users"></i> Users</Title>
        <div>
          {loggedInUsers.map(user => {
            return <h3 key={user.id}>{user.username}</h3>
          })}
        </div>
      </Content>
    </AsideLeft>
  )
}
