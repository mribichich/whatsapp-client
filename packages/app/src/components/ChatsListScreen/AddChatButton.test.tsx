import { ApolloProvider } from '@apollo/react-hooks';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { mockApolloClient } from '../../test-helpers';
import AddChatButton from './AddChatButton';

describe('AddChatButton', () => {
  afterEach(cleanup);

  it('goes back on arrow click', async () => {
    const history = createMemoryHistory();
    const client = mockApolloClient();

    {
      const { container, getByTestId } = render(
        <ApolloProvider client={client}>
          <AddChatButton history={history} />
        </ApolloProvider>
      );

      fireEvent.click(getByTestId('new-chat-button'));

      await waitFor(() =>
        expect(history.location.pathname).toEqual('/new-chat')
      );
    }
  });
});
