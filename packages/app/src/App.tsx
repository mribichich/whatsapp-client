import React from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  RouteComponentProps,
} from 'react-router-dom';
import AnimatedSwitch from './components/AnimatedSwitch';
import AuthScreen from './components/AuthScreen';
import ChatCreationScreen from './components/ChatCreationScreen';
import ChatRoomScreen from './components/ChatRoomScreen';
import ChatsListScreen from './components/ChatsListScreen';
import { withAuth } from './services/auth.service';

const App: React.FC = () => (
  <BrowserRouter>
    <AnimatedSwitch>
      <Route exact path="/sign-(in|up)" component={AuthScreen} />
      <Route exact path="/chats" component={withAuth(ChatsListScreen)} />
      <Route
        exact
        path="/chats/:chatId"
        component={withAuth(
          ({ match, history }: RouteComponentProps<{ chatId: string }>) => (
            <ChatRoomScreen chatId={match.params.chatId} history={history} />
          )
        )}
      />
      <Route exact path="/new-chat" component={withAuth(ChatCreationScreen)} />
    </AnimatedSwitch>
    <Route exact path="/" render={redirectToChats} />
  </BrowserRouter>
);

const redirectToChats = () => <Redirect to="/chats" />;

export default App;
