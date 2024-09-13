/**
 * Validates if the given string represents a valid date and time.
 *
 * This function checks if the provided datetime string can be converted into a valid Date object.
 * It returns `true` if the datetime is valid and `false` otherwise.
 *
 * @param {string} datetime The datetime string to be validated.
 * @returns {boolean} `true` if the datetime is valid, `false` otherwise.
 * @example
 * ```js
 * // Check if a datetime string is valid
 * const isValid = isValidDateTime('2023-09-13T12:00:00Z');
 * console.log(isValid); // Outputs: true
 * ```
 */
export function isValidDateTime(datetime) {
  const date = new Date(datetime);
  return !Number.isNaN(date.getTime());
}
