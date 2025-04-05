import { useState } from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';

import styles from './Booking.module.css';

const BookingForm = (props) => {
  const currentDate = dayjs();

  const tomorrow = currentDate.add('day', 1);
  const [resDate, setResDate] = useState(tomorrow.format('DD/MM/YYYY'));
  const [resTime, setResTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('birthday');

  return (
    <form className={styles.bookingForm} onSubmit={handleSubmit}>
      <div className={styles.formItem}>
        <label htmlFor="res-date">Choose date</label>
        <input value={resDate} onChange={(e) => setResDate(e.target.value)} name="res-date" type="date" id="res-date" />
      </div>

      <div className={styles.formItem}>
        <label htmlFor="res-time">Choose time</label>
        <select value={resTime} onChange={(e) => setResTime(e.target.value)} name="res-time" id="res-time ">
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
        </select>
      </div>

      <div className={styles.formItem}>
        <label htmlFor="guests">Number of guests</label>
        <input
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          name="guests"
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
        />
      </div>

      <div className={styles.formItem}>
        <label htmlFor="occasion">Occasion</label>
        <select value={occasion} onChange={(e) => setOccasion(e.target.value)} name="occasion" id="occasion">
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </div>

      <div className={styles.formItem}>
        <input className={classNames(styles.submitButton, 'yellow-btn')} type="submit" value="Make Your reservation" />
      </div>
    </form>
  );
};

export default BookingForm;
