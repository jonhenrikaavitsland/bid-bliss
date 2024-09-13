/**
 * Validates if the given string is a valid URL or matches a specific path pattern.
 *
 * Checks whether the input is a string and then validates it against a specific path pattern
 * or a general URL format. Returns `true` if the input matches the path pattern or is a valid URL, otherwise `false`.
 *
 * @param {string} url The URL or path string to validate.
 * @returns {boolean} Returns `true` if the input is a valid URL or matches the specific path pattern, otherwise `false`.
 * @example
 * ```js
 * // Validate a specific path
 * const isValidPath = isValidUrl('/src/images/pic.jpg');
 * console.log(isValidPath); // Outputs: true
 *
 * // Validate a full URL
 * const isValidFullUrl = isValidUrl('https://example.com');
 * console.log(isValidFullUrl); // Outputs: true
 *
 * // Handle invalid input
 * const isInvalid = isValidUrl('invalid-url');
 * console.log(isInvalid); // Outputs: false
 * ```
 */
export function isValidUrl(url) {
  if (typeof url !== 'string') {
    console.error('Invalid input: URL must be a string.');
    return false;
  }

  const specificPathPattern = /^\/(src\/images|assets)\/[\w\-./]*$/;
  if (specificPathPattern.test(url)) {
    return true;
  }

  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
