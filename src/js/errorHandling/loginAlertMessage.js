import { ifLoggedIn } from '../ui/loggedIn/ifLoggedIn';
import { closeModal } from '../ui/modal/closeModal';
import { modal } from '../data/constants';

/**
 * Generates an alert message based on the status of a login action.
 *
 * Returns a message string based on the provided alert status code, typically used to notify the user of login outcomes.
 * If the status is 200 (successful login), no message is generated (`null`), and the user interface updates to reflect the logged-in state.
 * Handles specific errors like incorrect credentials and unknown errors.
 *
 * @param {number} alertStatus The status code of the login action (e.g., 200, 401).
 * @returns {string|null} The appropriate alert message based on the status code, or `null` if no message is needed.
 * @example
 * ```js
 * // Handle a successful login
 * const message = loginAlertMessage(200);
 * console.log(message); // Outputs: null (no message for success)
 *
 * // Handle a failed login due to incorrect credentials
 * const errorMessage = loginAlertMessage(401);
 * console.log(errorMessage); // Outputs: 'Incorrect email or password. Please try again.'
 *
 * // Handle an unknown error during login
 * const unknownError = loginAlertMessage(500);
 * console.log(unknownError); // Outputs: 'An unknown error occurred during login. Please try again.'
 * ```
 */
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
