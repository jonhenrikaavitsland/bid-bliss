/**
 * Generates an alert message based on the status of a registration action.
 *
 * Returns a message string based on the provided alert status code, typically used to notify the user of the outcome
 * of the registration process. Handles specific cases like successful registration and duplicate email errors.
 *
 * @param {number} alertStatus The status code of the registration action (e.g., 201, 400).
 * @returns {string} The appropriate alert message based on the status code.
 * @example
 * ```js
 * // Handle a successful registration
 * const successMessage = registerAlertMessage(201);
 * console.log(successMessage); // Outputs: 'Registration successful! Your profile has been created.'
 *
 * // Handle an error due to an existing account with the same email
 * const errorMessage = registerAlertMessage(400);
 * console.log(errorMessage); // Outputs: 'An account with this email already exists. Please use a different email.'
 *
 * // Handle an unknown error during registration
 * const unknownError = registerAlertMessage(500);
 * console.log(unknownError); // Outputs: 'An unknown error occurred. Please try again.'
 * ```
 */
export function registerAlertMessage(alertStatus) {
  let message;

  switch (alertStatus) {
    case 201:
      message = 'Registration successful! Your profile has been created.';
      break;
    case 400:
      message = 'An account with this email already exists. Please use a different email.';
      break;
    default:
      message = 'An unknown error occurred. Please try again.';
      break;
  }
  return message;
}
