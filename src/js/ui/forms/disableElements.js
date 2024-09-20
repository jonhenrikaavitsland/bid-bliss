/**
 * Disables HTML elements by their given IDs.
 *
 * This function takes one or more element IDs as arguments and disables each corresponding element.
 * If an element with a provided ID is not found, an error is logged to the console.
 *
 * @function disableElements
 * @param {...string} elementIds - The IDs of the elements to be disabled.
 * @example
 * // Disable multiple elements by their IDs
 * disableElements('submitButton', 'inputField', 'selectDropdown');
 */
export function disableElements(...elementIds) {
  elementIds.forEach((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.disabled = true;
    } else {
      console.error(`Element with ID "${elementId}" not found.`);
    }
  });
}
