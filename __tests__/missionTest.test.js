import React from 'react';
import { render, screen } from '@testing-library/react';
import Mission from '../src/components/Mission';

describe('Mission', () => {
  const mockMission = {
    id: 'mission1',
    missionName: 'Mission 1',
    description: 'Mission 1 description',
    highlights: true,
    reserved: true,
  };

  test('renders Mission component with active member status', () => {
    render(<Mission {...mockMission} />);

    const missionNameElement = screen.getByText('Mission 1');
    expect(missionNameElement).toBeInTheDocument();

    const descriptionElement = screen.getByText('Mission 1 description');
    expect(descriptionElement).toBeInTheDocument();

    const activeMemberStatusElement = screen.getByText('Active Member');
    expect(activeMemberStatusElement).toBeInTheDocument();
  });

  test('renders Mission component with not a member status', () => {
    const mockMissionNotReserved = {
      ...mockMission,
      reserved: false,
    };

    render(<Mission {...mockMissionNotReserved} />);

    const notAMemberStatusElement = screen.getByText('NOT A MEMBER');
    expect(notAMemberStatusElement).toBeInTheDocument();
  });

  test('renders MissionButton component with correct props', () => {
    render(<Mission {...mockMission} />);

    const missionButtonElement = screen.getByTestId('mission-button');
    expect(missionButtonElement).toBeInTheDocument();
    expect(missionButtonElement).toHaveAttribute('data-id', 'mission1');
    expect(missionButtonElement).toHaveAttribute('data-reserved', 'true');
  });
});
