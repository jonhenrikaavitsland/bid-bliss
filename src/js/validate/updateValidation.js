/**
 * Updates the validation state of an input element by applying styles and setting a validation message.
 *
 * This function adjusts the styling of the input element based on its validity and updates the message element
 * with the appropriate feedback. It applies error or success styles and displays or clears the validation message accordingly.
 *
 * @param {HTMLInputElement} input The input element being validated.
 * @param {boolean} isValid The validity state of the input; `true` if valid, `false` otherwise.
 * @param {HTMLElement} messageElement The element where the validation message will be displayed.
 * @param {string} message The message to display if the input is invalid.
 * @returns {void} No return value; modifies the DOM to update validation feedback.
 * @example
 * ```js
 * // Update validation feedback for an email input
 * const emailInput = document.querySelector('#email');
 * const messageElement = document.querySelector('.email-message');
 * updateValidation(emailInput, false, messageElement, 'Please enter a valid email address.');
 * ```
 */
export function updateValidation(input, isValid, messageElement, message) {
  if (isValid) {
    input.classList.remove('border-error');
    input.classList.add('border-2', 'border-correct');
    if (messageElement) messageElement.textContent = '';
  } else {
    input.classList.remove('border-correct');
    input.classList.add('border-2', 'border-error');
    if (messageElement) messageElement.textContent = message;
  }
}
