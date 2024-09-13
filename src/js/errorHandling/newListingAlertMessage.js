/**
 * Generates an alert message based on the status of a new listing action.
 *
 * Returns a message string based on the provided alert status code, typically used to notify the user of the outcome
 * when creating a new listing. If the status is 201 (successful creation), no message is generated (`null`).
 * Handles specific errors such as exceeding the character limit for image URLs and other unknown errors.
 *
 * @param {number} alertStatus The status code of the new listing action (e.g., 201, 400).
 * @returns {string|null} The appropriate alert message based on the status code, or `null` if no message is needed.
 * @example
 * ```js
 * // Handle a successful listing creation
 * const message = newListingAlertMessage(201);
 * console.log(message); // Outputs: null (no message for success)
 *
 * // Handle an error due to image URL exceeding the character limit
 * const errorMessage = newListingAlertMessage(400);
 * console.log(errorMessage); // Outputs: 'Image URL cannot be greater than 300 characters'
 *
 * // Handle an unknown error during listing creation
 * const unknownError = newListingAlertMessage(500);
 * console.log(unknownError); // Outputs: 'An unknown error occurred. Please try again.'
 * ```
 */
export function newListingAlertMessage(alertStatus) {
  let message;

  switch (alertStatus) {
    case 201:
      message = null;
      break;
    case 400:
      message = 'Image URL cannot be greater than 300 characters';
      break;
    default:
      message = 'An unknown error occurred. Please try again.';
      break;
  }
  return message;
}
