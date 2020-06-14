import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as subscriptions from './graphql/subscriptions';
import { mockApolloClient } from './test-helpers';

it('renders without crashing', () => {
  const client = mockApolloClient([
    {
      request: { query: subscriptions.messageAdded },
      result: { data: {} },
    },
  ]);
  const div = document.createElement('div');

  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
