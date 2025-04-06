import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import { showNotification } from '../../utils/notification';
import styles from './Booking.module.css';

// Mock API function (replace with actual API call)
const submitAPI = (formData) => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true); // Simulate successful booking
    }, 1000);
  });
};

const BookingPage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      const success = await submitAPI(formData);
      if (success) {
        showNotification.success('Booking submitted successfully!');
        navigate('/booking-confirmed');
      } else {
        showNotification.error('Failed to submit booking. Please try again.');
      }
    } catch (error) {
      console.error('Booking submission error:', error);
      showNotification.error('An error occurred while submitting your booking.');
    }
  };

  return (
    <div className={styles.bookingPage}>
      <h2 className={styles.bookingPageTitle}>Reserve a Table</h2>
      <BookingForm onSubmit={handleSubmit} />
    </div>
  );
};

export default BookingPage;
