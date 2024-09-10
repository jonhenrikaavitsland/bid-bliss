import { ifLoggedIn } from '../ui/loggedIn/ifLoggedIn';
import { closeModal } from '../ui/modal/closeModal';
import { modal } from '../data/constants';

export function loginAlertMessage(alertStatus) {
  let message;

  switch (alertStatus) {
    case 200:
      message = null;
      setTimeout(ifLoggedIn, 1000);
      closeModal(modal);
      break;
    case 401:
      message = 'Incorrect email or password. Please try again.';
      break;
    default:
      message = 'An unknown error occurred during login. Please try again.';
      break;
  }
  return message;
}
