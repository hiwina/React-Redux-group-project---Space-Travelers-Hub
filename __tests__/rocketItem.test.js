import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import RocketItem from '../src/components/RocketItem';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('RocketItem', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockRocketItem = {
    rocketName: 'Falcon 9',
    rocketDescription: 'A two-stage rocket designed and manufactured by SpaceX',
    reserved: false,
    flickrImages: ['https://example.com/rocket1.jpg'],
    id: 'rocket1',
  };

  test('renders RocketItem component', () => {
    render(<RocketItem rocketItem={mockRocketItem} />);

    const rocketImageElement = screen.getByAltText('Rocket');
    expect(rocketImageElement).toBeInTheDocument();

    const rocketTitleElement = screen.getByText('Falcon 9');
    expect(rocketTitleElement).toBeInTheDocument();

    const rocketDescriptionElement = screen.getByText('A two-stage rocket designed and manufactured by SpaceX');
    expect(rocketDescriptionElement).toBeInTheDocument();

    const reserveButtonElement = screen.getByText('Reserve Rocket');
    expect(reserveButtonElement).toBeInTheDocument();
  });

  test('dispatches reserveRocket action when reserve button is clicked', () => {
    render(<RocketItem rocketItem={mockRocketItem} />);

    const reserveButtonElement = screen.getByText('Reserve Rocket');
    fireEvent.click(reserveButtonElement);

    expect(mockDispatch).toHaveBeenCalledWith(reserveRocket('rocket1'));
  });

  test('dispatches cancelReserved action when cancel reservation button is clicked', () => {
    const reservedRocketItem = {
      ...mockRocketItem,
      reserved: true,
    };

    render(<RocketItem rocketItem={reservedRocketItem} />);

    const cancelReservationButtonElement = screen.getByText('Cancel Reservation');
    fireEvent.click(cancelReservationButtonElement);

    expect(mockDispatch).toHaveBeenCalledWith(cancelReserved('rocket1'));
  });

  test('renders "No Rocket" if rocketItem is falsy', () => {
    render(<RocketItem rocketItem={null} />);

    const noRocketElement = screen.getByText('No Rocket');
    expect(noRocketElement).toBeInTheDocument();
  });
});
