import { bidAlertMessage } from './bidAlertMessage';
import { loginAlertMessage } from './loginAlertMessage';
import { newListingAlertMessage } from './newListingAlertMessage';
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
      break;
    case 'newListing':
      message = newListingAlertMessage(alertStatus);
      break;
    case undefined:
      message = null;
      break;
    default:
      console.warn(`Unsupported alert type: ${alertType}`);
      return;
  }

  if (message) {
    showAlert(message);
  }
}
