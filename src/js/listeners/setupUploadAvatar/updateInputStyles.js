/**
 * Updates the styles of the upload input element based on the validity of the input.
 *
 * This function adjusts the border styles of the upload input element to indicate whether the input is valid or invalid.
 * If the input is valid, it adds the correct styling classes; if invalid, it applies error styles.
 * Logs an error if the input element is not found in the DOM.
 *
 * @param {boolean} isValid A boolean indicating whether the input is valid (`true`) or invalid (`false`).
 * @returns {void} No return value; updates the input element's classes directly.
 * @example
 * ```js
 * // Update input styles to indicate valid input
 * updateInputStyles(true);
 *
 * // Update input styles to indicate invalid input
 * updateInputStyles(false);
 * ```
 */
export function updateInputStyles(isValid) {
  const uploadInput = document.querySelector('[data-upload="input"]');

  if (!uploadInput) {
    console.error('Upload input element not found');
    return;
  }

  if (isValid) {
    if (uploadInput.classList.contains('border-error')) {
      uploadInput.classList.remove('border-error');
    }
    if (!uploadInput.classList.contains('border-2')) {
      uploadInput.classList.add('border-2');
    }
    if (!uploadInput.classList.contains('border-correct')) {
      uploadInput.classList.add('border-correct');
    }
  } else {
    if (!uploadInput.classList.contains('border-2')) {
      uploadInput.classList.add('border-2');
    }
    if (!uploadInput.classList.contains('border-error')) {
      uploadInput.classList.add('border-error');
    }
    if (uploadInput.classList.contains('border-correct')) {
      uploadInput.classList.remove('border-correct');
    }
  }
}
