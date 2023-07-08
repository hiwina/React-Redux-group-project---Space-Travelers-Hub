import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import React from 'react';
import store from '../redux/store';
import Mission from '../components/Mission';

describe('User Interactions test', () => {
  it('will test user interaction', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Mission />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});