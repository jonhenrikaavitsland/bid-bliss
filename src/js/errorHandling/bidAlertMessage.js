/**
 * Generates an alert message based on the status of a bid action.
 *
 * Returns a message string based on the provided alert status code, typically used to notify the user of bid outcomes.
 * If the status is 201, no message is generated (returns `null`). Handles specific bid errors such as bidding on own listings
 * or submitting a lower bid than the current one.
 *
 * @param {number} alertStatus The status code of the bid action (e.g., 201, 400, 403).
 * @returns {string|null} The appropriate alert message based on the status code, or `null` if no message is needed.
 * @example
 * ```js
 * // Get a message for a successful bid
 * const message = bidAlertMessage(201);
 * console.log(message); // Outputs: null (no message for success)
 *
 * // Get a message for an error due to bidding on own listing
 * const errorMessage = bidAlertMessage(403);
 * console.log(errorMessage); // Outputs: 'You cannot bid on your own listing'
 *
 * // Handle unknown error status
 * const unknownError = bidAlertMessage(500);
 * console.log(unknownError); // Outputs: 'An unknown error occurred. Please try again.'
 * ```
 */
export function bidAlertMessage(alertStatus) {
  let message;

  switch (alertStatus) {
    case 201:
      message = null;
      break;
    case 400:
      message = 'Your bid must be higher than the current bid.';
      break;
    case 403:
      message = 'You cannot bid on your own listing';
      break;
    default:
      message = 'An unknown error occurred. Please try again.';
      break;
  }
  return message;
}
