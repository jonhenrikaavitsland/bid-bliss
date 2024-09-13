import { createDiv } from '../../elements/createDiv';

/**
 * Sanitizes a given input string by encoding HTML entities to prevent XSS attacks.
 *
 * This function creates a temporary div element, sets its inner text to the input string, and retrieves the sanitized HTML,
 * effectively escaping any potentially dangerous HTML tags or scripts.
 *
 * @param {string} input The input string to be sanitized.
 * @returns {string} The sanitized string with HTML entities encoded.
 * @example
 * ```js
 * // Sanitize a potentially unsafe input
 * const userInput = '<script>alert("XSS")</script>';
 * const safeInput = sanitizeInput(userInput);
 * console.log(safeInput); // Outputs: "&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;"
 * ```
 */
export function sanitizeInput(input) {
  const div = createDiv();
  div.innerText = input;
  return div.innerHTML;
}
