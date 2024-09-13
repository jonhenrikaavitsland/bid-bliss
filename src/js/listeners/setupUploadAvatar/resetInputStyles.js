/**
 * Resets the styles of the upload input element by removing specific CSS classes.
 *
 * This function removes the `border-2`, `border-error`, and `border-correct` classes from the upload input element
 * to reset its appearance. If the input element is not found in the DOM, it logs an error message.
 *
 * @returns {void} No return value; modifies the input element's classes directly.
 * @example
 * ```js
 * // Reset styles of the upload input element
 * resetInputStyles();
 * ```
 */
export function resetInputStyles() {
  const uploadInput = document.querySelector('[data-upload="input"]');

  if (!uploadInput) {
    console.error('Upload input element not found');
    return;
  }

  uploadInput.classList.remove('border-2', 'border-error', 'border-correct');
}
