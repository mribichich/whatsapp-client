import { History } from 'history';
import React from 'react';
import styled from 'styled-components';
import AddChatButton from './AddChatButton';
import ChatsList from './ChatsList';
import ChatsNavbar from './ChatsNavbar';

const Container = styled.div`
  height: 100vh;
`;

interface ChatsListScreenProps {
  history: History;
}

const ChatsListScreen: React.FC<ChatsListScreenProps> = ({ history }) => (
  <div>
    <Container>
      <ChatsNavbar history={history} />
      <ChatsList history={history} />
      <AddChatButton history={history} />
    </Container>
  </div>
);

export default ChatsListScreen;
