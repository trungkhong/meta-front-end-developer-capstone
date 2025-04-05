import { render, screen } from '@testing-library/react';
import Booking from './Booking';

test('Renders the Booking Page heading', () => {
  render(<Booking />);
  const headingElement = screen.getByText('Book Now');
  expect(headingElement).toBeInTheDocument();
});
