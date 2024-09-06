import { registerAlertMessage } from './registerAlertMessage';
import { showAlert } from './showAlert';

export function alertUser(alertType, alertStatus) {
  let message;

  switch (alertType) {
    case 'register':
      message = registerAlertMessage(alertStatus);
      break;
  }
  showAlert(message);
}
