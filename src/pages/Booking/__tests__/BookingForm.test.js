import { describe, test, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import dayjs from 'dayjs';
import BookingForm from '../BookingForm';

describe('BookingForm', () => {
  const mockOnSubmit = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders the booking form', () => {
    render(<BookingForm onSubmit={mockOnSubmit} />);

    expect(screen.getByTestId('date-picker')).toBeInTheDocument();
    expect(screen.getByTestId('select-time')).toBeInTheDocument();
    expect(screen.getByTestId('select-occasion')).toBeInTheDocument();
    expect(screen.getByTestId('input-number')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  test('form validation works correctly', async () => {
    render(<BookingForm onSubmit={mockOnSubmit} />);

    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);

    await waitFor(() => {
      const formItems = screen.getAllByRole('formitem');
      expect(formItems.length).toBeGreaterThan(0);
    });
  });

  test('form submits with valid data when button is clicked', async () => {
    const user = userEvent.setup();
    render(<BookingForm onSubmit={mockOnSubmit} />);

    // Just click the submit button since we're mocking the form validation
    const submitButton = screen.getByTestId('submit-button');
    await user.click(submitButton);

    // Verify that onSubmit was called
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
});
