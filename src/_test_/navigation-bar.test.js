import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import NavigationBar from '../Components/navigation-bar';

test('NavigationBar component renders correctly', () => {
  renderer.create(
    <MemoryRouter>
      <NavigationBar />
    </MemoryRouter>,
  );
});
