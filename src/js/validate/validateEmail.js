import { REG_Email } from '../data/constants';

/**
 * Validates an email address against a regular expression pattern.
 *
 * This function checks if the provided email address matches a predefined regular expression pattern for valid email formats.
 *
 * @param {string} email The email address to be validated.
 * @returns {boolean} `true` if the email is valid, `false` otherwise.
 * @example
 * ```js
 * // Validate an email address
 * const isValid = validateEmail('example@domain.com');
 * console.log(isValid); // Outputs: true
 * ```
 */
export function validateEmail(email) {
  return REG_Email.test(email);
}
