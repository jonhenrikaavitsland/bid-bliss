import { bidAlertMessage } from './bidAlertMessage';
import { loginAlertMessage } from './loginAlertMessage';
import { registerAlertMessage } from './registerAlertMessage';
import { showAlert } from './showAlert';

export function alertUser(alertType, alertStatus) {
  let message;

  switch (alertType) {
    case 'register':
      message = registerAlertMessage(alertStatus);
      break;
    case 'login':
      message = loginAlertMessage(alertStatus);
      break;
    case 'bid':
      message = bidAlertMessage(alertStatus);
  }

  if (message) showAlert(message);
}
