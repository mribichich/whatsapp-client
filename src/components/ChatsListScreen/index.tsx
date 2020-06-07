import React from 'react';
import styled from 'styled-components';
import ChatsList from './ChatsList';
import ChatsNavbar from './ChatsNavbar';

const Container = styled.div`
  height: 100vh;
`;

const ChatsListScreen: React.FC = () => (
  <div>
    <Container>
      <ChatsNavbar />
      <ChatsList />
    </Container>
  </div>
);

export default ChatsListScreen;
