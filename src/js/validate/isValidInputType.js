/**
 * Checks if the provided input type is valid based on a predefined list of accepted types.
 *
 * This function validates the input type against a list of standard HTML input types, returning `true` if the type is valid
 * and `false` otherwise.
 *
 * @param {string} type The input type to be validated.
 * @returns {boolean} `true` if the input type is valid, `false` otherwise.
 * @example
 * ```js
 * // Validate an input type
 * const isValid = isValidInputType('email');
 * console.log(isValid); // Outputs: true
 * ```
 */
export function isValidInputType(type) {
  const validTypes = ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'color', 'date', 'datetime-local', 'file', 'month', 'range', 'time', 'week', 'checkbox', 'radio', 'hidden', 'button', 'submit', 'reset'];
  return validTypes.includes(type);
}
