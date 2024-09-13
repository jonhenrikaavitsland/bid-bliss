/**
 * Clears the error message content of a specified element.
 *
 * This function removes all inner HTML content from the provided element, effectively clearing any displayed error messages.
 *
 * @param {HTMLElement} element The element whose content should be cleared.
 * @returns {void} No return value; modifies the DOM to clear the element's content.
 * @example
 * ```js
 * // Clear the error message from a validation element
 * const errorMessageElement = document.querySelector('.error-message');
 * clearError(errorMessageElement);
 * ```
 */
export function clearError(element) {
  element.innerHTML = '';
}
