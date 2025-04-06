import { Form, DatePicker, Select, InputNumber, Button } from 'antd';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import styles from './Booking.module.css';

const { Option } = Select;

const BookingForm = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const currentDate = dayjs();
  const tomorrow = currentDate.add(1, 'day');

  const timeOptions = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const handleSubmit = (values) => {
    // Convert the moment date object to the required format
    const formattedValues = {
      ...values,
      date: values.date.format('YYYY-MM-DD'),
    };
    onSubmit(formattedValues);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      name="booking"
      className={styles.bookingForm}
      onFinish={handleSubmit}
      initialValues={{
        date: tomorrow,
        time: '17:00',
        guests: 1,
        occasion: 'birthday',
      }}
    >
      <Form.Item
        label="Choose date"
        name="date"
        role="formitem"
        rules={[
          { required: true, message: 'Please select a date!' },
          {
            validator: (_, value) => {
              if (value && value.isBefore(currentDate, 'day')) {
                return Promise.reject('Cannot book a date in the past!');
              }
              return Promise.resolve();
            },
          },
        ]}
      >
        <DatePicker
          className={styles.formInput}
          format="YYYY-MM-DD"
          disabledDate={(current) => current && current < currentDate.startOf('day')}
          aria-label="Choose date"
          data-testid="date-picker"
        />
      </Form.Item>

      <Form.Item
        role="formitem"
        label="Choose time"
        name="time"
        rules={[{ required: true, message: 'Please select a time!' }]}
      >
        <Select className={styles.formInput} aria-label="Choose time" data-testid="select-time">
          {timeOptions.map((time) => (
            <Option key={time} value={time}>
              {time}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Number of guests"
        name="guests"
        rules={[
          { required: true, message: 'Please enter number of guests!' },
          { type: 'number', min: 1, max: 10, message: 'Must be between 1 and 10 guests!' },
        ]}
      >
        <InputNumber
          className={styles.formInput}
          min={1}
          max={10}
          placeholder="Enter number of guests"
          aria-label="Number of guests"
          data-testid="input-number"
        />
      </Form.Item>

      <Form.Item
        role="formitem"
        label="Occasion"
        name="occasion"
        rules={[{ required: true, message: 'Please select an occasion!' }]}
      >
        <Select className={styles.formInput} aria-label="Occasion" data-testid="select-occasion">
          <Option value="birthday">Birthday</Option>
          <Option value="anniversary">Anniversary</Option>
        </Select>
      </Form.Item>

      <Form.Item role="formitem">
        <Button type="primary" htmlType="submit" className={styles.submitButton} block data-testid="submit-button">
          Make your reservation
        </Button>
      </Form.Item>
    </Form>
  );
};

BookingForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default BookingForm;
