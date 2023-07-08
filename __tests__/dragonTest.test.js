import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import DragonsPage from '../src/pages/DragonsPage';
import { fetchDragons, cancelReservation, reserveDragon } from '../redux/dragons/dragonSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('DragonsPage', () => {
  const mockDispatch = jest.fn();
  const mockDragons = [
    { id: 'dragon1', name: 'Dragon 1', description: 'Dragon 1 description', reserved: false, flickr_images: ['https://example.com/dragon1.jpg'] },
    { id: 'dragon2', name: 'Dragon 2', description: 'Dragon 2 description', reserved: true, flickr_images: ['https://example.com/dragon2.jpg'] },
  ];

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        dragons: { dragons: mockDragons },
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders DragonsPage component', () => {
    render(<DragonsPage />);

    const dragon1NameElement = screen.getByText('Dragon 1');
    expect(dragon1NameElement).toBeInTheDocument();

    const dragon2NameElement = screen.getByText('Dragon 2');
    expect(dragon2NameElement).toBeInTheDocument();

    const reserveButtonElement = screen.getByText('Reserve Dragon');
    expect(reserveButtonElement).toBeInTheDocument();

    const cancelReservationButtonElement = screen.getByText('Cancel Reservation');
    expect(cancelReservationButtonElement).toBeInTheDocument();
  });

  test('dispatches fetchDragons action when dragons array is empty', () => {
    useSelector.mockImplementation((selector) =>
      selector({
        dragons: { dragons: [] },
      })
    );

    render(<DragonsPage />);

    expect(mockDispatch).toHaveBeenCalledWith(fetchDragons());
  });

  test('dispatches reserveDragon action when reserve button is clicked', () => {
    render(<DragonsPage />);

    const reserveButtonElement = screen.getByText('Reserve Dragon');
    fireEvent.click(reserveButtonElement);

    expect(mockDispatch).toHaveBeenCalledWith(reserveDragon('dragon1'));
  });

  test('dispatches cancelReservation action when cancel reservation button is clicked', () => {
    render(<DragonsPage />);

    const cancelReservationButtonElement = screen.getByText('Cancel Reservation');
    fireEvent.click(cancelReservationButtonElement);

    expect(mockDispatch).toHaveBeenCalledWith(cancelReservation('dragon2'));
  });
});
