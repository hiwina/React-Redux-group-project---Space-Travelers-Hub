import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import React from 'react';
import store from '../redux/store';
import Rocket from '../components/Rocket';

describe('User Interactions test', () => {
  it('will test user interaction', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rocket />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});