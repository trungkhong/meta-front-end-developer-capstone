import styles from './Booking.module.css';

const ConfirmedBooking = () => {
  return (
    <div className={styles.confirmedBooking}>
      <h2>Booking Confirmed!</h2>
      <p>Thank you for your reservation at Little Lemon.</p>
      <p>We look forward to serving you!</p>
    </div>
  );
};

export default ConfirmedBooking;
