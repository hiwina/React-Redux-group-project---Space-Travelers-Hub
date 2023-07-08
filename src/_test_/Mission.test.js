import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Mission from '../components/Mission';

const mockStore = configureStore([]);

test('renders Missions component', () => {
  const store = mockStore({ mission: { mission: [] } });

  render(
    <Provider store={store}>
      <Mission />
    </Provider>,
  );
});

test('handles join and leave mission', () => {
  const store = mockStore({ mission: { mission: [] } });

  render(
    <Provider store={store}>
      <Mission />
    </Provider>,
  );
});