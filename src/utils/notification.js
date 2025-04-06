import { notification } from 'antd';

// Configure notification globally
notification.config({
  placement: 'topRight',
  duration: 3,
});

export const showNotification = {
  success: (message, title = 'Success') => {
    notification.success({ message: title, description: message });
  },
  error: (message, title = 'Error') => {
    notification.error({ message: title, description: message });
  },
  info: (message, title = 'Info') => {
    notification.info({ message: title, description: message });
  },
  warning: (message, title = 'Warning') => {
    notification.warning({ message: title, description: message });
  },
};
