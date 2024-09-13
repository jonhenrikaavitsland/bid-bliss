/**
 * Displays a custom alert message in the DOM and handles the alert's visibility.
 *
 * The function updates the alert message text and displays the alert container with appropriate styling based on the message type.
 * It adds event listeners to handle closing the alert when the alert button is clicked.
 * If required alert elements are missing from the DOM, it logs an error.
 *
 * @param {string} message The alert message to display.
 * @returns {void} No return value; manipulates the DOM elements to show the alert.
 * @example
 * ```js
 * // Show an alert with a success message
 * showAlert('Registration successful! Your profile has been created.');
 *
 * // Show an alert with a general error message
 * showAlert('An unknown error occurred. Please try again.');
 * ```
 */
export function showAlert(message) {
  const alertContainer = document.getElementById('custom-alert');
  const alertMessage = document.getElementById('alert-message');
  const alertButton = document.getElementById('alert-button');

  if (!alertContainer || !alertMessage || !alertButton) {
    console.error('Alert elements are missing in the DOM.');
    return;
  }

  alertMessage.textContent = message;

  if (message === 'Registration successful! Your profile has been created.') {
    alertContainer.classList.add('border-correct');
  } else {
    alertContainer.classList.add('border-error');
  }

  alertContainer.classList.remove('hidden');
  alertContainer.classList.add('flex');
  document.body.classList.add('overflow-hidden');

  const hideAlert = () => {
    alertContainer.classList.remove('flex', 'border-error', 'border-correct');
    alertContainer.classList.add('hidden');
    console.clear();
    alertButton.removeEventListener('click', hideAlert);
  };

  alertButton.addEventListener('click', hideAlert);
}
