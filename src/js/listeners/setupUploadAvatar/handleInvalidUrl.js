import { showAlert } from '../../errorHandling/showAlert';

/**
 * Handles the appearance and behavior of the upload input when an invalid URL is detected.
 *
 * This function modifies the input field's styles to indicate an error state by adding specific CSS classes.
 * It also triggers an alert to notify the user that the provided URL is invalid. Logs an error if the input element is not found.
 *
 * @returns {void} No return value; updates the input element's styles and displays an alert message.
 * @example
 * ```js
 * // Handle invalid URL scenario when validating input
 * handleInvalidUrl();
 * ```
 */
export function handleInvalidUrl() {
  const uploadInput = document.querySelector('[data-upload="input"]');

  if (!uploadInput) {
    console.error('Upload input element not found');
    return;
  }

  if (!uploadInput.classList.contains('border-2')) {
    uploadInput.classList.add('border-2');
  }

  if (!uploadInput.classList.contains('border-error')) {
    uploadInput.classList.add('border-error');
  }

  if (uploadInput.classList.contains('border-correct')) {
    uploadInput.classList.remove('border-correct');
  }

  showAlert('Image URL must be a valid and accessible URL.');
}
