import { REG_Password } from '../data/constants';

/**
 * Validates a password against minimum length requirements and a regular expression pattern.
 *
 * This function checks if the provided password meets the minimum length requirement of 8 characters
 * and matches a predefined regular expression pattern for valid password formats.
 *
 * @param {string} password The password string to be validated.
 * @returns {boolean} `true` if the password is valid, `false` otherwise.
 * @example
 * ```js
 * // Validate a password
 * const isValid = validatePassword('StrongPass123!');
 * console.log(isValid); // Outputs: true
 * ```
 */
export function validatePassword(password) {
  return password.length >= 8 && REG_Password.test(password);
}
