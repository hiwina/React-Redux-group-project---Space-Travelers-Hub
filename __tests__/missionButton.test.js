import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import MissionButton from '../src/components/MissionButton';
import { joinMission, leaveMission } from '../src/redux/missions/missionSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('MissionButton', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders MissionButton component with "Join mission" text when not reserved', () => {
    render(<MissionButton id="mission1" reserved={false} />);

    const joinMissionButtonElement = screen.getByText('Join mission');
    expect(joinMissionButtonElement).toBeInTheDocument();

    const leaveMissionButtonElement = screen.queryByText('Leave mission');
    expect(leaveMissionButtonElement).not.toBeInTheDocument();
  });

  test('renders MissionButton component with "Leave mission" text when reserved', () => {
    render(<MissionButton id="mission1" reserved />);

    const leaveMissionButtonElement = screen.getByText('Leave mission');
    expect(leaveMissionButtonElement).toBeInTheDocument();

    const joinMissionButtonElement = screen.queryByText('Join mission');
    expect(joinMissionButtonElement).not.toBeInTheDocument();
  });

  test('dispatches joinMission action when Join mission button is clicked', () => {
    render(<MissionButton id="mission1" reserved={false} />);

    const joinMissionButtonElement = screen.getByText('Join mission');
    fireEvent.click(joinMissionButtonElement);

    expect(mockDispatch).toHaveBeenCalledWith(joinMission('mission1'));
    expect(mockDispatch).not.toHaveBeenCalledWith(leaveMission('mission1'));
  });

  test('dispatches leaveMission action when Leave mission button is clicked', () => {
    render(<MissionButton id="mission1" reserved />);

    const leaveMissionButtonElement = screen.getByText('Leave mission');
    fireEvent.click(leaveMissionButtonElement);

    expect(mockDispatch).toHaveBeenCalledWith(leaveMission('mission1'));
    expect(mockDispatch).not.toHaveBeenCalledWith(joinMission('mission1'));
  });
});
