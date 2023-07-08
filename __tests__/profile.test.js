import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import MyProfile from '../src/components/profile';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('MyProfile', () => {
  const mockMissions = [
    { mission_id: 'mission1', mission_name: 'Mission 1', reserved: true },
    { mission_id: 'mission2', mission_name: 'Mission 2', reserved: true },
  ];

  const mockRockets = [
    { id: 'rocket1', rocketName: 'Rocket 1', reserved: true },
    { id: 'rocket2', rocketName: 'Rocket 2', reserved: false },
  ];

  const mockDragons = [
    { id: 'dragon1', name: 'Dragon 1', reserved: true },
    { id: 'dragon2', name: 'Dragon 2', reserved: false },
  ];

  beforeEach(() => {
    useSelector.mockImplementation((selector) =>
      selector({
        missions: { missions: mockMissions },
        rockets: { rockets: mockRockets },
        dragons: { dragons: mockDragons },
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders MyProfile component', () => {
    render(<MyProfile />);

    const myMissionsHeadingElement = screen.getByText('My missions');
    expect(myMissionsHeadingElement).toBeInTheDocument();

    const joinedMissionElement1 = screen.getByText('Mission 1');
    expect(joinedMissionElement1).toBeInTheDocument();

    const joinedMissionElement2 = screen.getByText('Mission 2');
    expect(joinedMissionElement2).toBeInTheDocument();

    const myRocketsHeadingElement = screen.getByText('My Rockets');
    expect(myRocketsHeadingElement).toBeInTheDocument();

    const reservedRocketElement = screen.getByText('Rocket 1');
    expect(reservedRocketElement).toBeInTheDocument();

    const myDragonsHeadingElement = screen.getByText('Dragon');
    expect(myDragonsHeadingElement).toBeInTheDocument();

    const reservedDragonElement = screen.getByText('Dragon 1');
    expect(reservedDragonElement).toBeInTheDocument();
  });

  test('renders "No missions" if no joined missions', () => {
    const mockMissionsNoJoined = [
      { mission_id: 'mission1', mission_name: 'Mission 1', reserved: false },
      { mission_id: 'mission2', mission_name: 'Mission 2', reserved: false },
    ];

    useSelector.mockImplementation((selector) =>
      selector({
        missions: { missions: mockMissionsNoJoined },
        rockets: { rockets: mockRockets },
        dragons: { dragons: mockDragons },
      })
    );

    render(<MyProfile />);

    const noMissionsElement = screen.getByText('No missions');
    expect(noMissionsElement).toBeInTheDocument();
  });

  test('renders "No rockets" if no reserved rockets', () => {
    const mockRocketsNoReserved = [
      { id: 'rocket1', rocketName: 'Rocket 1', reserved: false },
      { id: 'rocket2', rocketName: 'Rocket 2', reserved: false },
    ];

    useSelector.mockImplementation((selector) =>
      selector({
        missions: { missions: mockMissions },
        rockets: { rockets: mockRocketsNoReserved },
        dragons: { dragons: mockDragons },
      })
    );

    render(<MyProfile />);

    const noRocketsElement = screen.getByText('No rockets');
    expect(noRocketsElement).toBeInTheDocument();
  });

  test('renders "No dragons" if no reserved dragons', () => {
    const mockDragonsNoReserved = [
      { id: 'dragon1', name: 'Dragon 1', reserved: false },
      { id: 'dragon2', name: 'Dragon 2', reserved: false },
    ];

    useSelector.mockImplementation((selector) =>
      selector({
        missions: { missions: mockMissions },
        rockets: { rockets: mockRockets },
        dragons: { dragons: mockDragonsNoReserved },
      })
    );

    render(<MyProfile />);

    const noDragonsElement = screen.getByText('No dragons');
    expect(noDragonsElement).toBeInTheDocument();
  });
});
