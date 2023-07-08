import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from '../src/components/navigation-bar';

test('renders NavigationBar component', () => {
  render(
    <BrowserRouter>
      <NavigationBar />
    </BrowserRouter>,
  );

  // Verify that the logo and company name are rendered
  const logoElement = screen.getByAltText('logo');
  expect(logoElement).toBeInTheDocument();

  const companyNameElement = screen.getByText('Space Travels Hub');
  expect(companyNameElement).toBeInTheDocument();

  // Verify that the navigation links are rendered
  const rocketLinkElement = screen.getByText('Rocket');
  expect(rocketLinkElement).toBeInTheDocument();

  const dragonLinkElement = screen.getByText('Dragon');
  expect(dragonLinkElement).toBeInTheDocument();

  const missionLinkElement = screen.getByText('Mission');
  expect(missionLinkElement).toBeInTheDocument();

  const myProfileLinkElement = screen.getByText('My Profile');
  expect(myProfileLinkElement).toBeInTheDocument();
});
