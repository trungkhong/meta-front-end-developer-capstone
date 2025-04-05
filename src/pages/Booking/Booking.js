import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import BookingForm from './BookingForm';
import styles from './Booking.module.css';
import { getAvailableTimes, submitTime } from '@/utils/mockAPI';

const initializeTimes = (initialAvailableTimes) => [...initialAvailableTimes, ...getAvailableTimes(new Date())];

// Update times based on selected date
// Returns new available times if API returns results, otherwise keeps existing times
const updateTimes = (availableTimes, date) => {
  const response = getAvailableTimes(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const Booking = () => {
  const navigate = useNavigate();
  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);

  const handleSubmit = (formData) => {
    // Call to Submit Data
    const response = submitTime(formData);
    if (response) navigate('/confirmedBooking');
  };

  return (
    <div className={styles.wrapper}>
      <h1>Book Now</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Booking;
