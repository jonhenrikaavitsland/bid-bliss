import { bidAlertMessage } from './bidAlertMessage';
import { loginAlertMessage } from './loginAlertMessage';
import { newListingAlertMessage } from './newListingAlertMessage';
import { registerAlertMessage } from './registerAlertMessage';
import { showAlert } from './showAlert';

/**
 * Displays an alert message to the user based on the alert type and status.
 *
 * Determines the appropriate alert message to display based on the alert type (`register`, `login`, `bid`, or `newListing`)
 * and alert status. If the alert type is unsupported, a warning is logged. If the message is generated, it is shown using `showAlert`.
 *
 * @param {string} alertType The type of alert to display (`register`, `login`, `bid`, `newListing`).
 * @param {string|number} alertStatus The status associated with the alert type to determine the appropriate message.
 * @returns {void} No return value; handles alerts internally.
 * @example
 * ```js
 * // Display a registration alert with a success status
 * alertUser('register', 200);
 *
 * // Display a login alert with an error status
 * alertUser('login', 401);
 *
 * // Handle unsupported alert types gracefully
 * alertUser('unsupportedType', 500); // Logs: Unsupported alert type: unsupportedType
 * ```
 */
export function alertUser(alertType, alertStatus, ...elementIDs) {
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
    showAlert(message, ...elementIDs);
  }
}
