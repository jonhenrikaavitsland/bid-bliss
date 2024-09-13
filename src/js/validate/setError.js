/**
 * Sets an error message on the specified element and applies an error styling class.
 *
 * This function updates the inner HTML of the given element with the provided error message
 * and adds a class to style the element as an error.
 *
 * @param {HTMLElement} element The element where the error message will be displayed.
 * @param {string} message The error message to be shown.
 * @returns {void} No return value; modifies the DOM to display the error message.
 * @example
 * ```js
 * // Display an error message in a validation element
 * const errorElement = document.querySelector('.error-message');
 * setError(errorElement, 'Invalid input. Please try again.');
 * ```
 */
export function setError(element, message) {
  element.innerHTML = message;
  element.classList.add('text-error');
}
