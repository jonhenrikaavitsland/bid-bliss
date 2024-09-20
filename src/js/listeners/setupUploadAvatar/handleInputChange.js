import { isValidUrl } from '../../data/isValidUrl';
import { sanitizeInput } from '../../validate/sanitize/sanitizeInput';
import { resetInputStyles } from './resetInputStyles';
import { updateInputStyles } from './updateInputStyles';

/**
 * Handles the input change event for the upload input element.
 *
 * This function checks the value of the upload input field, validates the URL,
 * and updates the input styles based on its validity. If the input element is not found,
 * an error is logged. If the input is empty, the styles are reset.
 *
 * @returns {void} No return value; manipulates the input element and updates styles internally.
 * @example
 * ```js
 * // Set up an input event listener for the upload input
 * const uploadInput = document.querySelector('[data-upload="input"]');
 * uploadInput.addEventListener('input', handleInputChange);
 * ```
 */
export function handleInputChange() {
  const uploadInput = document.querySelector('[data-upload="input"]');

  if (!uploadInput) {
    console.error('Upload input element not found');
    return;
  }

  const url = sanitizeInput(uploadInput.value.trim());

  if (!url) {
    resetInputStyles();
    return;
  }

  updateInputStyles(isValidUrl(url));
}
