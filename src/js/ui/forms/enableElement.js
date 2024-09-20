/**
 * Enables HTML elements by their given IDs if they are disabled.
 *
 * This function takes one or more element IDs as arguments and enables each corresponding element if it is currently disabled.
 * The list of element IDs is cleared after the elements are enabled.
 *
 * @function enableElements
 * @param {...string} elementIds - The IDs of the elements to be enabled.
 * @example
 * // Enable multiple elements by their IDs
 * enableElements('submitButton', 'inputField', 'selectDropdown');
 */
export function enableElements(...elementIds) {
  elementIds.forEach((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      if (element.disabled) {
        element.disabled = false;
        elementIds = [];
      }
    }
  });
}
